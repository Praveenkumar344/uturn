import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShareButtons from "../../components/ShareButtons";
export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
    const formatDate = (inputDate) => {
      const date = new Date(inputDate);
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options).toUpperCase();
    };
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://strapi-9b98.onrender.com/api/blogs?populate=*");
        const data = await res.json();
        setBlogs(data.data || []);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center">Loading blogs...</p>;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <section className="relative flex items-center justify-center bg-[url('/assets/blog_bg.jpg')] bg-cover w-full text-white py-50 mb-15">
        <div className="flex w-[80%]">
          <div className="relative z-10 max-w-7xl flex-col">
            <h1 className="font-plus-jakarta md:text-normal mb-4 font-semibold tracking-widest">PSYCHOTHERAPISTS ONLINE</h1>
            <p className="font-castoro text-4xl md:text-7xl mb-2">
              Read Our Today's Essential <i>Reads</i>
            </p>
          </div>
          
          <div className="hidden md:block w-[50%]"> </div>
        </div>
        <img className="absolute bottom-0 z-10" src="/assets/white_bottom.png" />
      </section>

      <section className="flex flex-col md:flex-row md:w-[90%] justify-between">
        {/* Blog list */}
        <div className="w-[100%] md:w-[75%] rounded-3xl md:p-5 m-1 md:mx-7">
          {blogs.map((item, idx) => (
            <div
              className={`${
                idx % 2 === 0 ? "flex sm:flex-col md:flex-row" : "flex sm:flex-col md:flex-row-reverse"
              } m-5 border-b-1 border-gray-300 pb-2 md:pb-8 justify-center items-center`}
              key={item.documentId}
            >
              <img
                className="w-[175px] md:w-[50%]  aspect-[4/3] object-cover  rounded-2xl md:m-2"
                src={item.CoverImage?.url ? `https://strapi-9b98.onrender.com${item.CoverImage.url}` : "/assets/happy_women.jpg"}
                alt={item.Title}
              />
              <div className="flex flex-col ml-2 md:m-5 justify-center mr-auto w-full">
                <p className="font-plus-jakarta font-medium  tracking-widest text-sm md:text-[15px] ">
                  {item.Category.toUpperCase()}
                </p>
                <h2
                  className="font-castoro text-2xl md:text-5xl my-1 md:my-5 text-black hover:text-[#F7931E] cursor-pointer"
                  onClick={() => navigate(`/blog/${item.documentId}`)}
                >
                    {item.Title.charAt(0).toUpperCase() + item.Title.slice(1)}
                </h2>
                <p className=" md:text-[18px] tracking-widest text-gray-700">{formatDate(item.publishedAt?.split("T")[0])}</p>
                <ShareButtons documentId={item.documentId} />

              </div>
            </div>  
          ))}
        </div>

        {/* Sidebar */}
        <div className="md:w-[25%]">
          <h1 className="text-3xl text-black font-castoro p-3">Popular Posts</h1>
          <div>
            {blogs.map((item) => (
              <div
                className="flex flex-row border-b-1 border-gray-300"
                key={item.documentId}
              >
                <img
                  className="w-[100px] aspect-square object-cover rounded-2xl m-3 mb-5"
                  src={item.CoverImage?.url ? `https://strapi-9b98.onrender.com${item.CoverImage.url}` : "/assets/happy_women.jpg"}
                  alt={item.Title}
                />
                <div className="flex flex-col justify-center">
                  <p className="text-gray-700">{formatDate(item.publishedAt?.split("T")[0])}</p>
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
