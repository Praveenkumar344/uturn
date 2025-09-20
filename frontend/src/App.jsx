// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Services_Therapy from "./pages/services/Services_Therapy";
import Blog from "./pages/Blog/Blog";
import NotFound from "./pages/NotFound";
import BlogDetail from "./pages/Blog/BlogDetail";
import Editor from "./pages/Blog/text_editor";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services_therapy" element={<Services_Therapy />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetail />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="editor" element={<Editor />} />
          <Route path="*" element={<NotFound />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Home from "./pages/Home";
// import Appointment from "./pages/Appointment";
// import Services_Therapy from "./pages/services/Services_Therapy";
// import Blog from "./pages/Blog/Blog";
// import NotFound from "./pages/NotFound";
// import BackToTop from "./components/BackToTop";
// import BlogDetail from "./pages/Blog/BlogDetail";
// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/services_therapy" element={<Services_Therapy />} />
//         <Route path="/blog" element={<Blog />} />
//         <Route path="/appointment" element={<Appointment />} />

//         <Route path="/blog/:id" element={<BlogDetail />} />
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <BackToTop />
//       <Footer />
//     </Router>
//   );
// }
