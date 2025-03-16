// import React from "react";
// // import "./Home.css";
// // import Head from "../../component/Head/Head.js";
// // import Nav from "../../component/nav/Nav.js";
// import Welcome from "../../component/Welcome/Welcome.jsx";
// import Footer from "../../component/Footer/Footer.jsx";
// import Slider from "../../component/Slider/Slider.jsx";
// // import Data from "../../Data/CardData.jsx";
// // import Card from "../../component/Card/Card.jsx";
// import Infastructure from "../../component/Infrastructure/Infrastructure.jsx";
// // import Carousel from "react-multi-carousel";
// // import "react-multi-carousel/lib/styles.css";
// // import Nav from "../../component/Nav/Nav.js";
// import { useEffect } from "react";


// function Home() {

//   return (
//     <>
//       <div className="py-4">
//         <Welcome />

//         <div className="">
//           <h1
//             style={{
//               textAlign: "center",
//               padding: ".5em 0",
//               fontSize: "2.8em",
//               backgroundColor: "#184252",
//               color: "white",
//               fontWeight: "900",
//               letterSpacing: "2px",
//             }}
//           >
//             Gallery
//           </h1>
//           <div className="bg-gray-300 py-2 ">
//             <Slider />
//           </div>
//         </div>
      
//         <Infastructure />
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default Home;












import React from "react";
import { Suspense } from "react";
import Welcome from "../../component/Welcome/Welcome.jsx";
import Footer from "../../component/Footer/Footer.jsx";
import Slider from "../../component/Slider/Slider.jsx";
// import Infrastructure from "../../component/Infrastructure/Infrastructure.jsx";
import { motion } from "framer-motion";
import FacultySection from "../../component/ToolTip/FacultySection.jsx";
import Hod from "../../component/Hod/Hod.jsx";
import Dashboard from "../../component/DashBoard/DashBoard.jsx";
const Infrastructure = React.lazy(() => import('../../component/Infrastructure/Infrastructure.jsx'));
// const Welcome = React.lazy(() => import('../../component/Welcome/Welcome.jsx'));
// import BentoGrid from "../../component/Grid/BentoGrid.jsx";
function Home() {
  return (
    <div className="w-full">
      {/* 🔹 Hero Section */}
      <Welcome />
      

      {/* 🔹 Gallery Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <section className="bg-[#184252] text-white py-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold tracking-widest"
        >
          Gallery
        </motion.h1>
        <div className="bg-gray-100 py-6 rounded-lg shadow-lg mt-6 mx-4 md:mx-16">
          <Slider />
        </div>
      </section>

      </Suspense>

    
        {/* ToolTip is used for faculty   */}
      

      {/* 🔹 Infrastructure Section */}
      <Suspense fallback={<div>Loading...</div>}>
      <Infrastructure />
      </Suspense>
      <Hod/>
      {/* 🔹 Footer Section */}
      <Dashboard/>

      
     <FacultySection/>
     {/* <BentoGrid/> */}

      <Footer />
    </div>
  );
}

export default Home;








