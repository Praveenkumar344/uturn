// src/Layout.jsx
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Outlet />
      <BackToTop />
      <Footer />
    </>
  );
}
