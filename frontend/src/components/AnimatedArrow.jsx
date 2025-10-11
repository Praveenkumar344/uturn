import { useNavigate, useLocation } from "react-router-dom";

const AnimatedArrow = ({  txt_value = "Get Started", href = "#" }) => {
  const navigate = useNavigate();
  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        navigate(href);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className={`group inline-flex items-center justify-center cursor-pointer px-5 py-3 ml-2 z-10 bg-[#4FA2B8] hover:bg-amber-500 text-white text-base font-semibold rounded-full transition duration-300 overflow-hidden`}
    >
      {txt_value}
      <span className="ml-2 relative flex items-center">
        <span className="inline-block transition-transform duration-300 group-hover:translate-x-4">
          <svg
            className="w-7 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l5 5m0 0l-5 5m5-5H0"
            />
          </svg>
        </span>

        <span className="absolute ml-2 w-6 h-6 rounded-full border-2 border-white opacity-100 group-hover:opacity-100 transition duration-300"></span>
      </span>
    </a>
  );
};

export default AnimatedArrow;
