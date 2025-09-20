import useOnScreen from "../hooks/useOnScreen";

const team = [
  {
    img: "/assets/members/team-1.jpg",
    name: "Ava Patel",
    role: "Senior Therapist",
  },
  { img: "/assets/members/team-2.jpg", 
    name: "Liam Chen", 
    role: "Sports Physio" },

  { img: "/assets/members/team-3.jpg", 
    name: "Maya Singh", 
    role: "Chiropractor" },
  {
    img: "/assets/members/team-4.jpg",
    name: "Daniel Kim",
    role: "Manual Therapist",
  },
];

export default function Team() {
  const [ref, visible] = useOnScreen();
  return (
    <section id="team" ref={ref} className="py-16 px-10 md:py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className={`reveal ${visible ? "show" : ""}`}>
          <div className="text-center">
             <p className="uppercase text-primary tracking-widest font-bold text-[#4FA2B8] ml-1 mb-2">
           MEET OUR TEAM
          </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <div
                key={m.name}
                className="overflow-hidden rounded-xl shadow-card"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={m.img}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-primary/0 transition hover:bg-primary/30" />
                </div>
                <div className="bg-white p-5 text-primary">
                  <h5 className="text-secondary">{m.name}</h5>
                  <p className="text-slate-600">{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
