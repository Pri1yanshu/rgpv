


// function App() {
 

//   return (
    
//      <div>
//       <h1>Hello Vite + React!</h1>
//       <Button >Click Me</Button>
//       <h1>hee</h1>
//      </div> 
    
//   )
// }

// export default App

// import './index.css';
// import { Button } from '@mantine/core';

// function App() {
//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-3xl font-bold text-blue-600">Hello Vite + React!</h1>
//       <Button variant="filled" color="blue" className="mt-4">Click Me</Button>
//     </div>
//   );
// }

// export default App;


// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
// import '@mantine/core/styles.css';

// import { MantineProvider } from '@mantine/core';
// import { DoubleNavbar } from './components/Nav/DoubleNavbar.js';
// import { HeaderTabs } from './components/tab/HeaderTabs.js';


// export default function App() {
//   return <MantineProvider>
//   {
//     <>
//       <div className='flex flex-row' >
        
//           <DoubleNavbar/>
//           <HeaderTabs/>
        
        
          

          
//         </div>
//     </>
        
//   }
//   </MantineProvider>;





















// import './App.css'
// import './index.css';
// import { Button } from '@mantine/core';


// // import "./styles.css";
// import Head from "./component/Head/Head.jsx";
// import Nav from "./component/Nav/Nav.jsx";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Home from "./pages/Home/Home.jsx";
// import About from "./pages/About/About.jsx";
// import Department from "./pages/Department/Department.jsx";
// import Student from "./pages/Student/Student.jsx";
// import Faculty from "./pages/Faculty/Faculty.jsx";
// import Placement from "./pages/Placement/Placement.jsx";
// import Contact from "./pages/Contact/Contact.jsx";


// export default function App() {
//   return (
//     <div className="bg-gray-100 ">
//       <BrowserRouter>
          
//           <Head />
//           <Nav />
//           <Routes>
          
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/Department" element={<Department />} />
//           <Route path="/student" element={<Student />} />
//           <Route path="/faculty" element={<Faculty />} />
//           <Route path="/placement" element={<Placement />} />
//           <Route path="/contact" element={<Contact />} />
//           </Routes>
           
    
//       </BrowserRouter>
//     </div>
//   );
// }














import React, { useEffect } from "react";
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

import "./App.css";
import "./index.css";

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
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900 relative">
      <Head />
      <BrowserRouter>
        {/* 🔹 Scroll Restoration */}
        <ScrollToTop />

        {/* 🔹 Header and Navigation */}
        
        <Nav />

        {/* 🔹 Main Content */}
        <main className="container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/department" element={<Department />} />
            <Route path="/student" element={<Student />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/placement" element={<Placement />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;








