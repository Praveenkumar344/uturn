import { useEffect, useState } from "react";

const data = [
  {
    name: "Rohan",
    avatar: "/assets/members/team-1.jpg",
    text: "Great care with love and great improvement.",
  },
  {
    name: "Elena",
    avatar: "/assets/members/team-2.jpg", 
    text: "Professional and friendly staff. Highly recommended.",
  },
  {
    name: "Sameera",
    avatar: "/assets/members/team-3.jpg", 
    text: "Personalized plan that actually worked for me.",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % data.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative  py-12  md:py-10"
    >
        <img src="assets/top_testimonial_bg.png"/>
      <div className="absolute inset-0  " />
      <div className="relative  max-w-full pt-10 text-center bg-[#F3F0EE] ">
         <p className="uppercase text-primary tracking-widest font-bold text-[#4FA2B8] ml-1 mb-2">
            WHAT OUR CLIENTS SAY
          </p>
        <h2 className="font-display text-4xl">Real Stories, Real Results</h2>
        <div className="relative mt-8">
          {data.map((t, idx) => (
            <div
              key={t.name}
              className={`absolute inset-0 mx-auto max-w-xl transition-opacity duration-700 ${
                idx === i ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={t.avatar}
                alt=""
                className="mx-auto h-24 w-24 rounded-full border-4  object-cover"
              />
              <p className="mt-6 text-lg leading-relaxed">“{t.text}”</p>
              <p className="mt-2 font-semibold">{t.name}</p>
            </div>
          ))}
          <div className="h-52" /> {/* spacer for absolute items */}
        </div>
      </div>
      <img src="assets/bottom_testimonial_bg.png"/>
    </section>
  );
}
