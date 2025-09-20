import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Footer() {
  const location = useLocation();

  return (
    <footer className={`bg-dark/95 text-black     w-full ${location.pathname.includes("admin")? " z-[-10] hidden ":""}`}>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 md:grid-cols-4">
        <div>
          <img className="w-auto h-30" src={logo} alt="Logo"/>
          <p className="mt-3  font-medium">
            Center for psychology & conseling
          </p>
          <div className="flex space-x-4 text-2xl text-[#F7931E] mt-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:text-blue-800 transition-colors duration-300" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube className="hover:text-red-600 transition-colors duration-300" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-700 transition-colors duration-300" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-3 font-mono text-[#F7931E]">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["About", "Services", "Features", "Team", "Blog", "Contact"].map(
              (x) => (
                <li key={x}>
                  <a
                    className="hover:text-primary"
                    href={`#${x.toLowerCase()}`}
                  >
                    {x}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div>
          <h4 className=" mb-3 font-mono text-[#F7931E]">Contact</h4>
          <p className="text-sm">A: 714 Woodbine Ave <br/>Toronto ON M4E 2J1</p>
        </div>
        <div>
          <h4 className="mb-3 font-mono text-[#F7931E]">Contact</h4>
          <div className="text-sm">
            <p>Find a location</p>
            <p>+01 234 567 890</p>
            <p>hello@terapia.example</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
