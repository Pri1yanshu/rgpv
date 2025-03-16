// import React from "react";
// // import "./Slider.css";
// import Carousel from "react-alice-carousel";
// import "react-alice-carousel/lib/alice-carousel.css";
// import gallery1 from "../../assets/gallery1.jpeg";
// import gallery2 from "../../assets/gallery2.jpeg";
// import gallery3 from "../../assets/gallery3.jpeg";
// import gallery4 from "../../assets/gallry4.jpeg";
// import gallery5 from "../../assets/gallery5.jpeg";


// function Slider() {
//   return (
//     <>
//       {" "}
//       <div className="w-full">
//         <Carousel
//           autoPlay={true}
//           disableButtonsControls={true}
//           infinite={true}
//           autoPlayInterval={2000}
//         >
//           <img src={gallery1} alt=" img" />
//           <img
//             src={gallery2}
//             alt=" img"
//           />
//           <img
//           src={gallery3}
//             alt="img"
//           />
//           <img
//             src={gallery4}
//             alt=" img"
//           />
//           <img
//             src={gallery5}
//             alt=" img"
//           />
//         </Carousel>
//       </div>
//     </>
//   );
// }

// export default Slider;



import React from "react";
import Carousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { motion } from "framer-motion";
import gallery1 from "../../assets/gallery1.jpeg";
import gallery2 from "../../assets/gallery2.jpeg";
import gallery3 from "../../assets/gallery3.jpeg";
import gallery4 from "../../assets/gallry4.jpeg";
import gallery5 from "../../assets/gallery5.jpeg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5];

function Slider() {
  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-xl shadow-lg">
      <Carousel
        autoPlay
        autoPlayInterval={3000}
        infinite
        disableButtonsControls
        disableDotsControls
      >
        {images.map((img, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0.5, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8 }}
            className="w-full h-[400px] flex justify-center items-center"
          >
            <img 
              src={img} loading="lazy"  
              alt={`Gallery Image ${index + 1}`} 
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        ))}
      </Carousel>
      
      {/* Overlay Text (Optional) */}
      <div className="absolute inset-0 bg-black/30 flex justify-center items-center text-white text-xl font-semibold">
        <p className="bg-black/50 px-6 py-2 rounded-lg">Explore Our Campus</p>
      </div>
    </div>
  );
}

export default Slider;
