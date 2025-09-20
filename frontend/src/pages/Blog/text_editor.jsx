import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function BlogDetail() {
  const { id } = useParams(); // documentId from URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(
          `http://localhost:1337/api/blogs/${id}?populate=*`
        );
        const data = await res.json();
        setBlog(data.data || null);
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
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4">{blog.Title}</h1>
      <p className="text-gray-600 mb-4">
        {blog.Category} | {blog.publishedAt?.split("T")[0]}
      </p>
      <img
        src={
          blog.CoverImage?.url
            ? `http://localhost:1337${blog.CoverImage.url}`
            : "/assets/happy_women.jpg"
        }
        alt={blog.Title}
        className="w-full rounded-lg mb-6"
      />
      <div className="prose prose-lg max-w-none">
         <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {blog.Content || ""}
        </ReactMarkdown>
      </div>
    </div>
  );
}
