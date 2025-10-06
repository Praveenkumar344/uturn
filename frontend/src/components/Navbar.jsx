import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { scrollToId } from "../hooks/scrollToId.js";
import { useNavigate, useLocation, useParams } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let closeTimeout;
  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 45);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const LinkItem = ({ href, children }) => {
    const ref = href.replace("#", "");
    return (
      <a
        onClick={(e) => {
          e.preventDefault();
          if (location.pathname !== "/") {
            navigate("/", { state: { scrollTo: ref } });
          } else {
            scrollToId(ref);
          }
        }}
        href={href}
        className={`px-2 py-2 text-sm font-semibold text-slate-700 hover:text-[#4FA2B8]`}
      >
        {children}
      </a>
    );
  };

  return (
    <header
      className={` sticky top-0 left-0 right-0 z-100 transition-all duration-300 ease-in-out backdrop-blur bg-white/90 shadow-sm`}
    >
      <div className="mx-auto flex  max-w-7xl items-center justify-between px-4 py-2 md:py-0.5">
        <a
          onClick={(e) => {
            setScrolled(false);
            e.preventDefault();
            if (location.pathname !== "/") {
              navigate("/", { state: { scrollTo: "home" } });
            }else{
            scrollToId("home");
          }
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            className="h-13 w-auto ml-5 mr-5 md:h-15"
            src={logo}
            alt="uturn_logo"
          />
        </a>
        <div className="flex">
          <nav className="hidden items-center  md:flex">
            <LinkItem href="#home">Home</LinkItem>
            <div
              className="relative px-2 py-2 ml-1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`text-sm font-semibold flex items-center h-auto gap-1 cursor-pointer text-slate-700
                hover:text-[#4FA2B8] transition-colors duration-200`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/services_therapy");
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                Services
              </button>
            </div>

            <LinkItem href="#about">About</LinkItem>
            <button
              className={`text-sm font-semibold flex items-center h-auto px-2 py-2 cursor-pointer text-slate-700 hover:text-[#4FA2B8] transition-colors duration-200`}
              onClick={(e) => {
                e.preventDefault();
                navigate("/blog");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Blogs
            </button>
            <LinkItem href="#contact">Contact</LinkItem>
          </nav>
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate("/appointment");
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="hidden rounded-full cursor-pointer bg-primary px-4 py-2.5 ml-2 text-sm font-semibold text-[#ffffff] bg-[#4FA2B8] hover:bg-[#F7931E] transition-all duration-300 ease-out md:inline-block"
          >
            Book Appointment
          </a>
        </div>
        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* mobile view */}
      {open && (
        <div className="md:hidden border-t bg-white transition-all duration-400 ease-in-out">
          <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-2">
            {["home", "services", "about", "blog", "contact"].map(
              (id) => {
                if (id !== "blog") {
                  return (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={() => {
                        setOpen(false);
                        if (location.pathname !== "/") {
                          // Navigate to "/" and pass scroll target in state
                          navigate("/", { state: { scrollTo: id } });
                        }
                      }}
                      className="py-2 text-slate-700 hover:text-primary"
                    >
                      {id[0].toUpperCase() + id.slice(1)}
                    </a>
                  );
                } else {
                  return (
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        setOpen(false);
                        navigate("/blog");
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      {id[0].toUpperCase() + id.slice(1)}
                    </a>
                  );
                }
              }
            )}
            <a
              onClick={(e) => {
                setOpen(false);
                e.preventDefault();
                navigate("/appointment");
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              className="mt-2 rounded-full m-auto bg-primary px-4 py-2.5 text-sm font-semibold text-[#ffffff] bg-[#4FA2B8]"
            >
              Book Appointment
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

