// server.js (ES Module Version with All Features)
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import multer from "multer";
import ffmpeg from "fluent-ffmpeg"; // Import ffmpeg wrapper

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json({ limit: "50mb" }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const postsDirectory = path.join(__dirname, "src", "blog-posts");
const mediaDirectory = path.join(__dirname, "src", "media");

app.use("/media", express.static(mediaDirectory));

if (!fs.existsSync(postsDirectory))
  fs.mkdirSync(postsDirectory, { recursive: true });
if (!fs.existsSync(mediaDirectory))
  fs.mkdirSync(mediaDirectory, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, mediaDirectory),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// API Route for uploading files
app.post("/api/upload", upload.single("mediaFile"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }

  const filePath = `/media/${req.file.filename}`;
  const fullPath = path.join(mediaDirectory, req.file.filename);

  // If it's a video, generate a thumbnail
  if (req.file.mimetype.startsWith("video/")) {
    const thumbnailFilename = `${req.file.filename}.png`;
    const thumbnailPath = path.join(mediaDirectory, thumbnailFilename);

    ffmpeg(fullPath)
      .on("end", () => {
        res.json({ filePath, thumbnailUrl: `/media/${thumbnailFilename}` });
      })
      .on("error", (err) => {
        console.error("ffmpeg error:", err);
        // Still return the video path even if thumbnail fails
        res
          .status(500)
          .json({ filePath, error: "Failed to generate thumbnail." });
      })
      .screenshots({
        count: 1,
        folder: mediaDirectory,
        filename: thumbnailFilename,
        timemarks: ["00:00:01.000"],
      });
  } else {
    // If it's an image, the filePath is also the thumbnailUrl
    res.json({ filePath, thumbnailUrl: filePath });
  }
});

// GET all posts
app.get("/api/posts", (req, res) => {
  fs.readdir(postsDirectory, (err, files) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Failed to read posts directory" });
    const posts = files
      .filter((file) => file.endsWith(".json"))
      .map((file) =>
        JSON.parse(fs.readFileSync(path.join(postsDirectory, file), "utf8"))
      )
      .sort((a, b) => new Date(b.date) - new Date(a.date));
    res.json(posts);
  });
});

// SAVE or UPDATE a post
app.post("/api/posts", (req, res) => {
  const post = req.body;
  const isUpdate = !!post.id;

  if (!isUpdate) {
    const timestamp = new Date();
    post.id = timestamp.getTime();
    post.date = timestamp.toISOString();
    post.filename = `${timestamp.toISOString().replace(/:/g, "-")}.json`;
  }

  const filePath = path.join(postsDirectory, post.filename);

  // Handle media file cleanup on update
  if (isUpdate) {
    try {
      const oldPostContent = fs.readFileSync(filePath, "utf8");
      const oldPost = JSON.parse(oldPostContent);
      const oldMediaUrls = oldPost.media?.map((m) => m.url) || [];
      const newMediaUrls = post.media?.map((m) => m.url) || [];

      const filesToDelete = oldMediaUrls.filter(
        (url) => !newMediaUrls.includes(url)
      );

      filesToDelete.forEach((url) => {
        const mediaPath = path.join(__dirname, "src", url);
        const thumbPath = `${mediaPath}.png`; // Check for video thumbnail
        if (fs.existsSync(mediaPath)) fs.unlinkSync(mediaPath);
        if (fs.existsSync(thumbPath)) fs.unlinkSync(thumbPath);
      });
    } catch (e) {
      console.error("Could not read old post file for media cleanup:", e);
    }
  }

  const fileContent = JSON.stringify(post, null, 2);
  fs.writeFile(filePath, fileContent, "utf8", (err) => {
    if (err) return res.status(500).json({ message: "Failed to save post" });
    res.status(201).json(post);
  });
});

// DELETE a post and its media
app.delete("/api/posts/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(postsDirectory, filename);

  if (fs.existsSync(filePath)) {
    try {
      const post = JSON.parse(fs.readFileSync(filePath, "utf8"));
      if (post.media && Array.isArray(post.media)) {
        post.media.forEach((mediaItem) => {
          if (mediaItem.url) {
            const mediaPath = path.join(__dirname, "src", mediaItem.url);
            const thumbPath = `${mediaPath}.png`;
            if (fs.existsSync(mediaPath)) fs.unlinkSync(mediaPath);
            if (fs.existsSync(thumbPath)) fs.unlinkSync(thumbPath);
          }
        });
      }
    } catch (e) {
      console.error("Error cleaning up media:", e);
    }

    fs.unlink(filePath, (err) => {
      if (err)
        return res.status(500).json({ message: "Failed to delete post JSON" });
      res.status(200).json({ message: "Post and media deleted" });
    });
  } else {
    return res.status(404).json({ message: "Post not found" });
  }
});

app.listen(port, () => {
  console.log(`✅ Uturn Blog Server is running at http://localhost:${port}`);
  console.log(`📝 Posts are stored in: ${postsDirectory}`);
  console.log(`🖼️ Media is stored in: ${mediaDirectory}`);
});
