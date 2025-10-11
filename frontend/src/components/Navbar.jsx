import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";
import { scrollToId } from "../hooks/scrollToId.js";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef();
  const toggleButtonRef = useRef();
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
    let lastScrollY = window.scrollY;
    let totalMoved = 0;
    let ticking = false;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 45);

      if (!open) {
        lastScrollY = currentY;
        totalMoved = 0;
        return;
      }

      const diff = Math.abs(currentY - lastScrollY);
      totalMoved += diff;

      if (totalMoved > 100) {
        setOpen(false);
        totalMoved = 0;
      }

      lastScrollY = currentY;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

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
    <>
      {/* Navbar */}
      <header
        className={`sticky top-0 left-0 right-0 z-[100] transition-all duration-300 ease-in-out backdrop-blur bg-white/90 shadow-sm`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:py-0.5">
          <a
            onClick={(e) => {
              setScrolled(false);
              e.preventDefault();
              if (location.pathname !== "/") {
                navigate("/", { state: { scrollTo: "home" } });
              } else {
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
            <nav className="hidden items-center md:flex">
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

          {/* Hamburger Icon */}
          <button
            ref={toggleButtonRef}
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
      </header>

      {/* --- MOBILE SLIDE-IN MENU (FULL SCREEN OVERLAY) --- */}
      <div
        className={`fixed inset-0 z-[99] md:hidden transition-opacity duration-350 ease-in-out ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Grey blurred backdrop (1/4 width on left) */}
        <div
          className={`absolute left-0 top-0 w-1/4 h-full bg-black/30 backdrop-blur-sm transition-opacity duration-300`}
          onClick={() => setOpen(false)}
        ></div>

        {/* Slide-in menu (3/4 width from right) */}
        <div
          ref={menuRef}
          className={`absolute right-0 top-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mx-auto flex flex-col items-center px-4 py-4 pt-20">
            {["home", "services", "about", "blog", "contact"].map((id) => {
              if (id !== "blog") {
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => {
                      setOpen(false);
                      if (location.pathname !== "/") {
                        navigate("/", { state: { scrollTo: id } });
                      } else {
                        scrollToId(id);
                      }
                    }}
                    className="py-3 w-full text-center text-slate-700 hover:text-[#4FA2B8] transition-colors duration-200"
                  >
                    {id[0].toUpperCase() + id.slice(1)}
                  </a>
                );
              } else {
                return (
                  <a
                    key={id}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      navigate("/blog");
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                    className="py-3 w-full text-center text-slate-700 hover:text-[#4FA2B8]"
                  >
                    {id[0].toUpperCase() + id.slice(1)}
                  </a>
                );
              }
            })}
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
              className="mt-4 rounded-full bg-[#4FA2B8] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#F7931E] transition-all duration-300 ease-out"
            >
              Book Appointment
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
