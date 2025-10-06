import { useEffect, useState } from "react";
import AnimatedArrow from "../components/AnimatedArrow.jsx";
const slides = [
  {
    image: "/assets/happy_women.jpg",
    title: "Best Solution For Painful Life",
    text: "Personalized therapy plans to get you moving again.",
  },
  {
    image: "/assets/happy_family.jpg",
    title: "Recover Strength & Mobility",
    text: "Modern techniques, caring therapists, real results.",
  },
];
export default function Hero() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setI((v) => (v + 1) % slides.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative h-[80vh] md:h-[90vh] overflow-hidden ">
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === idx ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={s.image}
            alt="hero image"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
            <div className="max-w-2xl">
              <h1 className="font-display text-4xl md:text-6xl font-castoro text-white">
                {s.title}
              </h1>
              <p className="text-lg font-plus-jakarta mb-4 tracking-widest text-white/90">
                {s.text}
              </p>
              <div className="mt-6 flex items-center justify-center gap-4">
                <a
                  href="#services"
                  className="rounded-full bg-white px-6 py-3 font-semibold text-primary"
                >
                  Our Services
                </a>
                <AnimatedArrow key={i} txt_value="Book Appointment" href="/appointment" />
              </div>
            </div>
          </div>

          <img
            className="absolute bottom-0 w-full z-20"
            src="/assets/white_bottom.png"
            alt="decorative bottom"
          />
        </div>
      ))}
    </section>
  );
}
