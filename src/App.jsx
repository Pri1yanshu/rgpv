
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Head from "./component/Head/Head.jsx";
import Nav from "./component/Nav/Nav.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Department from "./pages/Department/Department.jsx";
import Student from "./pages/Student/Student.jsx";
import Faculty from "./pages/Faculty/Faculty.jsx";
import Placement from "./pages/Placement/Placement.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Notice from "./component/Notice/Notice.jsx";



import "./App.css";
import "./index.css";
import Events from "./pages/Events/Events.jsx";

// 🔹 Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// to scrollto top on refresh
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// // to scroll to top on click
// window.onscroll = function () {
//   window.scrollTo(0, 0);
// };


// //to scroll to top on every click
// window.addEventListener('click', function() {
//   window.scrollTo(0, 0);
// });




const App = () => {

const [showNotice, setNotice] = useState(false)

  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 relative">
      <Head />
      <BrowserRouter>
        {/* 🔹 Scroll Restoration */}
        <ScrollToTop />

        {/* 🔹 Header and Navigation */}
        
        
        <Nav />


        <Notice/>
    

        {/* 🔹 Main Content */}
   
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/department" element={<Department />} />
            <Route path="/student" element={<Student />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;








