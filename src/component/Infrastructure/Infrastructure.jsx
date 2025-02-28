// import React from "react";
// // import "./Infastructure.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import Data from "../../Data/CardData.jsx";
// import Card from "../Card/Card.jsx";
// import Infra from "../../assets/Infra1.jpeg"

// function Infrastructure() {
//   const responsive = {
//     superLargeDesktop: {
//       // the naming can be any, depends on you.
//       breakpoint: { max: 4000, min: 3000 },
//       items: 5,
//     },
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//     },
//     mobile: {
//       breakpoint: { max: 560, min: 0 },
//       items: 1,
//     },
//   };
//   return (
//     <>
//       <div className="">
        
//         <div className="bg-[#184852]  relative">
//           <div className=  " h-[50vh] p-3 flex flex-col justify-center items-center"
//         style ={{backgroundImage: `url(${Infra})`,
//         backgroundSize: "cover",
//         }}>
//         <div className="bg-[#184253]/40 z-30 p-3 rounded-lg text-white">
//           <h4 className="text-4xl font-semibold"
//           >Infrastructure and Facilities</h4>
//           <p className="font-medium py-3 ">
//             The Training & Placement Office, UIT Bhopal facilitates the process
//             of placement of students passing out from the Institute besides
//             collaborating with leading organizations and institutes in setting
//             up of internship and training program of students.
//           </p>
//         </div>
          
//         </div>
//         </div>

//         <div className=" p-3 py-10">
//           <Carousel
//             responsive={responsive}
//             autoPlay={true}
//             infinite={true}
//             autoPlaySpeed={1500}
//             showDots={true}
//             arrows={false}
//             containerClass="carousel-infra"
//           >
//             {Data.map((item) => {
//               return (
//                 <Card
//                   heading={item.heading}
//                   content={item.content}
//                   icon={item.icon}
//                 />
//               );
//             })}
//           </Carousel>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Infrastructure;


//MODERN UI 



import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import Data from "../../Data/CardData.jsx";
import Card from "../Card/Card.jsx";
import Infra from "../../assets/Infra1.jpeg";

function Infrastructure() {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
    mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
  };

  return (
    <div className="w-full">
      {/* 🔹 Hero Section */}
      <div className="relative h-[55vh] flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: `url(${Infra})` }}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white max-w-2xl p-6 bg-black/50 rounded-xl shadow-lg"
        >
          <h2 className="text-4xl font-semibold">Infrastructure & Facilities</h2>
          <p className="mt-3 text-lg font-light">
            The Training & Placement Office, UIT Bhopal facilitates the process of placement of students passing out from the Institute, besides collaborating with leading organizations and institutes in setting up internship and training programs.
          </p>
        </motion.div>
      </div>

      {/* 🔹 Infrastructure Cards Carousel */}
      <div className="py-12 px-6">
        <Carousel
          responsive={responsive}
          autoPlay
          infinite
          autoPlaySpeed={2500}
          arrows={false}
          containerClass="carousel-container"
          renderDotsOutside={true}
        >
          {Data.map((item, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Card heading={item.heading} content={item.content} icon={item.icon} />
            </motion.div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Infrastructure;

