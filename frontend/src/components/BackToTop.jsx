import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;
  return (
    <button
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed cursor-pointer bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#4FA2B8] text-white text-[24px] shadow-lg hover:opacity-90"
    >
      ↑
    </button>
  );
}
