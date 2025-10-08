import AnimatedArrow from "../components/AnimatedArrow";
import useOnScreen from "../hooks/useOnScreen";
import {useNavigate} from "react-router-dom";

export default function Services() {
  const [ref, visible] = useOnScreen();
  const navigate = useNavigate();

  const items = [
    {
      img: "/assets/happy_family.jpg",
      category: "THERAPY",
      title: "Managing Stress & Anxiety",
      bg: "bg-white",
    },
    {
      img: "/assets/couples_counseling.jpg",
      category: "COUNSELING",
      title: "Couples Counseling",
      bg: "bg-teal-800 text-white",
    },
    {
      img: "/assets/kids_playing.jpg",
      category: "THERAPY",
      title: "Improving Parenting Skills",
      bg: "bg-teal-800 text-white",
    },
    {
      img: "/assets/self_confidence.jpg",
      category: "COUNSELING",
      title: "Building Your Self-Confidence",
      bg: "bg-white",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="w-[100%] md:max-w-7xl   *:pt-25 py-5 px-5 md:m-auto"
    >
      <div className=" w-[100%] md:max-w-7xl md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12  ">
        {/* Left column */}
        <div className="m-auto">
        <div className="max-w-xl  flex flex-col justify-center">
          <p className="uppercase text-primary tracking-widest font-bold text-[#4FA2B8] ml-1 mb-2">
            SERVICES
          </p>
          <h2 className="font-serif text-4xl text-dark mb-4">
            <em>Here to Help You Find a Path Forward</em>
          </h2>
          <p className="font-serif mb-4 max-w-md">
            We believe that effective therapy is:
          </p>
          <ul className="mb-8 space-y-3 max-w-md text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#4FA2B8] mt-1">✔</span> About finding a
              therapist you “click” with.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#4FA2B8] mt-1">✔</span> Tailored to your
              needs as an individual or a couple.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#4FA2B8] mt-1">✔</span> Empowers you with
              science-backed skills and insights.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#4FA2B8] mt-1">✔</span> Translates into
              real-life changes.
            </li>
          </ul>
          <div className="flex justify-center">
            <AnimatedArrow txt_value="Explore Services" href="/services_therapy" />
          </div>
        </div>
        </div>
        {/* Right column (cards grid) */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[500px] mx-auto">
          <div
            className={` h-max rounded-2xl overflow-hidden shadow-lg flex flex-col`}
          >
            <img
              src="assets/happy_family.jpg"
              alt="happy_family"
              className="h-48 w-full object-cover"
            />
            <div className="p-2 flex flex-col flex-grow justify-between">
              <p className="uppercase text-sm tracking-widest font-semibold text-[#ff9f19] py-2 ">
                THERAPY
              </p>
              <h3 className="text-xl font-serif">Couples Therapy</h3>

              <a
                onClick={(e)=>{
                  e.preventDefault();
                  navigate("/Services_Therapy");
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="inline-flex cursor-pointer w-auto max-w-max justify-center items-center text-sm font-semibold mt-2 text-black hover:text-[#F7931E] group"
              >
                <span >Read More</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div
            className={`md:mt-15 h-max bg-[#4FA2B8] text-white rounded-2xl overflow-hidden shadow-lg flex flex-col`}
          >
            <img
              src="assets/self_confidence.jpg"
              alt="happy_family"
              className="h-48 w-full object-cover"
            />
            <div className="p-2 flex flex-col flex-grow justify-between">
              <p className="uppercase text-sm tracking-widest font-semibold py-2 text-[#ff9f19] ">
                COUNSELING
              </p>
              <h3 className="text-xl font-serif text-white">
                Individual Therapy
              </h3>

              <a
                onClick={(e)=>{
                  e.preventDefault();
                  navigate("/Services_Therapy ")
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
                className="inline-flex cursor-pointer w-auto max-w-max justify-center items-center text-sm font-semibold mt-2 text-white hover:text-[#F7931E] group"
              >
                <span>Read More</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
