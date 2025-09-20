const posts = [
  {
    img: "/assets/img/blog-1.jpg",
    title: "5 Stretching Tips For Desk Workers",
    date: "Aug 10",
  },
  {
    img: "/assets/img/blog-2.jpg",
    title: "When To Use Heat vs Cold",
    date: "Aug 3",
  },
  {
    img: "/assets/img/blog-3.jpg",
    title: "Recover Faster After Injury",
    date: "Jul 25",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <p className="uppercase text-primary">Our Blog</p>
          <h2 className="mt-2 font-display text-4xl text-dark">
            Latest Articles
          </h2>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="overflow-hidden rounded-xl border"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={p.img}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="border-t bg-light p-5">
                <p className="text-xs font-semibold text-primary">{p.date}</p>
                <h3 className="mt-1 text-lg font-semibold text-dark">
                  {p.title}
                </h3>
                <a
                  href="#contact"
                  className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
