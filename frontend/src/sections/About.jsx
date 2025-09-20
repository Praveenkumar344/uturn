import useOnScreen from "../hooks/useOnScreen";

export default function About() {
  const [ref, visible] = useOnScreen();
  return (
    <section
      id="about"
      ref={ref}
      className="mx-auto max-w-7xl px-5 py-16 md:pt-35 "
    >
      <div className={`reveal ${visible ? "show" : ""}`}>
        <div className="grid gap-10 items-center md:grid-cols-2">
          <div className="relative h-80 overflow-hidden rounded-xl md:h-auto">
            <img
              src="/assets/self.png"
              alt="Therapy"
              className="h-full w-full object-cover"
            />
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 font-semibold text-primary">
              10+ Years Experience
            </span>
          </div>
          <div>
            <p className="uppercase text-primary tracking-widest font-bold text-[#4FA2B8] ml-1 mb-2">
            WHAT WE DO
          </p>
            <h2 className="mt-2 font-serif text-4xl text-dark">
              Psychotherapy
            </h2>
            <p className=" mt-4 font-serif">
              We often tend to people who want to experience more satisfaction, joy, resiliency in their lives. Other times people feel down, unexcited about life, and just want to stop feeling that way.<br/> General areas we address.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                "Trauma",
                "Stress",
                "Anxiety",
                "Relationships",
                "Family Dynamics",
                "Sadness/Depression",
              ].map((x) => (
                <li
                  key={x}
                  className="flex items-center gap-2 rounded-lg bg-light p-3 text-dark"
                >
                  <span className=" font-extrabold  text-amber-500 "> &#10003;</span>
                  {x} 
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
