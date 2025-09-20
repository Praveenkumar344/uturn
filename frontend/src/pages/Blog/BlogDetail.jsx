import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ShareButtons from "../../components/ShareButtons.jsx";

export default function BlogDetail() {
  const { id } = useParams(); // documentId from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const [hoverLike, setHoverLike] = useState(false);
  const [hoverDislike, setHoverDislike] = useState(false);

  const [dislikesCount, setDislikesCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({
    name: "",
    email: "",
    text: "",
  });

  // Fetch blog
  useEffect(() => {
    fetch(`http://localhost:1337/api/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data.data);
        setLikesCount(data.data?.likes || 0   );
        setDislikesCount(data.data?.dislikes || 0);
      });

    fetchComments();
  }, [id]);

  // Fetch comments
  const fetchComments = async () => {
    const res = await fetch(
      `http://localhost:1337/api/comments?filters[blog][documentId][$eq]=${id}&sort=createdAt:desc&pagination[limit]=10`
    );
    const data = await res.json();
    setComments(data.data || []);
  };

  // Handle Like
  const handleLike = async () => {
    const updatedLikes = liked ? likesCount - 1 : likesCount + 1;
    const updatedDislikes = disliked ? dislikesCount - 1 : dislikesCount;

    setLiked(!liked);
    setDisliked(false);
    setLikesCount(updatedLikes);
    if (disliked) setDislikesCount(updatedDislikes);

    await fetch(`http://localhost:1337/api/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          likes: updatedLikes,
          dislikes: updatedDislikes,
        },
      }),
    });
  };

  // Handle Dislike
  const handleDislike = async () => {
    const updatedDislikes = disliked ? dislikesCount - 1 : dislikesCount + 1;
    const updatedLikes = liked ? likesCount - 1 : likesCount;

    setDisliked(!disliked);
    setLiked(false);
    setDislikesCount(updatedDislikes);
    if (liked) setLikesCount(updatedLikes);

    await fetch(`http://localhost:1337/api/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          dislikes: updatedDislikes,
          likes: updatedLikes,
        },
      }),
    });
  };

  // Submit comment
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.text || !newComment.name || !newComment.email) {

      return;
    }

    await fetch("http://localhost:1337/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
      data: {
        Text: newComment.text,
        Name: newComment.name,
        Email: newComment.email,
         blog: id,
      },
    }),
    });

    setNewComment({ name: "", email: "", text: "" });
    fetchComments();
  };
  const formatDate = (inputDate) => {
    const date = new Date(inputDate);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options).toUpperCase();
  };
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `http://localhost:1337/api/blogs/${id}?populate=*`
        );
        const data = await res.json();
        setBlog(data.data || null);
          if (data.data?.id) {
        setBlog((prev) => ({ ...prev, strapiId: data.data.id }));
      }
        const blogs_res = await fetch(
          "http://localhost:1337/api/blogs?populate=*"
        );
        const blogs_data = await blogs_res.json();
        setBlogs(blogs_data.data || []);
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!blog) return <p className="text-center text-red-500">Blog not found</p>;
  return (
    <div className="flex flex-col items-center justify-center w-full h-full border-b-1 border-gray-300 pb-10 ">
      <section className="relative flex items-center justify-center bg-[url('/assets/blog_bg.jpg')] bg-cover w-full text-white py-30 mb-10">
        <div className="flex w-[80%]">
          <div className="hidden md:block w-[50%]"> </div>
        </div>
        <img
          className="absolute bottom-0 z-10"
          src="/assets/white_bottom.png"
        />
      </section>
      <section className="flex flex-col p-3 md:p-5 md:flex-row md:w-[90%] justify-between">
        <div className="max-w-4xl mx-auto md:p-6 flex flex-col ">
          <div
            className="relative z-10 max-w-7xl flex-col"
          >
            <h1 className="font-plus-jakarta md:text-normal mb-4 tracking-widest">
              {blog.Category.toUpperCase()} | {formatDate(blog.publishedAt)}
            </h1>
            <p className="font-castoro text-4xl md:text-7xl mb-2 text-black">
              {blog.Title}
            </p>
            <div className="flex flex-row space-x-4 items-center mt-2 md:mt-5">
              {/* Like / Dislike */}
              <div className="flex flex-row space-x-6 items-center mb-8">
                <div className="flex flex-row items-start space-x-2 ">
                  <p className=" h-full font-mono text-2xl font-medium">
                    {likesCount}
                  </p>
                  <img
                    src={
                      liked
                        ? "/assets/icons/like_filled.png"
                        : "/assets/icons/like_outline.png"
                    }
                    className="w-7 h-7 cursor-pointer"
                    onClick={handleLike}
                  />
                </div>
                <div className="flex flex-row items-start space-x-2">
                  <p className=" h-full font-mono text-2xl font-medium">
                    {dislikesCount}
                  </p>
                  <img
                    src={
                      disliked
                        ? "/assets/icons/dislike_filled.png"
                        : "/assets/icons/dislike_outline.png"
                    }
                    className="w-7 h-7 cursor-pointer"
                    onClick={handleDislike}
                  />
                </div>
                <div className=" border-l-2 border-black pl-4 flex flex-row items-start space-x-2">
                  <img
                    src={"/assets/icons/comment_outline.png"}
                    className="w-7 h-7 cursor-pointer"
                    onClick={() => {
                      document
                        .getElementById("comments")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <img
            src={
              blog.CoverImage?.url
                ? `http://localhost:1337${blog.CoverImage.url}`
                : "/assets/happy_women.jpg"
            }
            alt={blog.Title}
            className="w-full rounded-lg mb-6"
          />
          <div className="pb-5">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
              >
                {blog.Content || ""}
              </ReactMarkdown>
            </div>
            <div className="w-full flex justify-end mt-10">
              <ShareButtons documentId={blog.documentId} />
            </div>
            <div id="comments" className="mt-20 scroll-mt-16 ">
              <h1 className=" text-2xl md:text-4xl font-serif text-black mt-2 md:mt-5 py-5 border-t-2 border-b border-gray-300">
                Comments
              </h1>
              <div className="space-y-4 border-b-2 border-gray-300 p-4">
                
                {comments.length === 0 && <p className="text-lg">No comments yet.</p>}
                {comments.map((c) => (
                  <div key={c.id} className="p-3 border border-gray-400 rounded-lg bg-gray-50">
                    <p className="text-sm text-gray-500 font-medium tracking-widest">{c.Name.charAt(0).toUpperCase() + c.Name.slice(1)}</p>
                    <p className="ml-2 mt-1 text-2xl">{c.Text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10">
              <h1 className="text-2xl md:text-4xl font-serif text-black mt-2 md:mt-5 py-5 ">Leave a Comment</h1>
              <form
                onSubmit={handleCommentSubmit}
                className="space-y-4 pt-4"
              >
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  className="w-full border p-2 rounded-full border-gray-400 focus:border-gray-300"
                  value={newComment.name}
                  onChange={(e) =>
                    setNewComment({ ...newComment, name: e.target.value })
                  }
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email *"
                  className="w-full border p-2 rounded-full border-gray-400"
                  value={newComment.email}
                  onChange={(e) =>
                    setNewComment({ ...newComment, email: e.target.value })
                  }
                />
                <textarea
                  placeholder="Write a comment... *"
                  className="w-full border p-2 rounded-2xl border-gray-400"
                  rows="4"
                  required
                  value={newComment.text}
                  onChange={(e) =>
                    setNewComment({ ...newComment, text: e.target.value })
                  }
                ></textarea>
                <button
                  type="submit"
                  className="bg-[#4FA2B8] text-white px-4 py-2 rounded-full cursor-pointer hover:bg-[#F7931E] transition-colors duration-200"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-10 md:w-[25%]">
          <h1 className="text-3xl text-black font-castoro p-3">
            Popular Posts
          </h1>
          <div>
            {blogs.map((item) => (
              <div
                className="flex flex-row border-b-1 border-gray-300"
                key={item.documentId}
              >
                <img
                  className="w-[100px] aspect-square object-cover rounded-2xl m-3 mb-5"
                  src={
                    item.CoverImage?.url
                      ? `http://localhost:1337${item.CoverImage.url}`
                      : "/assets/happy_women.jpg"
                  }
                  alt={item.Title}
                />
                <div className="flex flex-col justify-center">
                  <p className="text-gray-700">
                    {formatDate(item.publishedAt?.split("T")[0])}
                  </p>
                  <h2
                    className="font-castoro text-2xl text-black hover:text-[#F7931E] cursor-pointer"
                    onClick={() => navigate(`/blog/${item.documentId}`)}
                  >
                    {item.Title.charAt(0).toUpperCase() + item.Title.slice(1)}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
