// import React from "react";
// // import "./Welcome.css";
// import backgroundImage from "../../assets/mainCs.jpeg"

// function Welcome() {
//   return (
//     <>
//       <div className="">
//         <div className="py-6 min-h-full md:h-[25em] bg-cover  bg-center   bg-no-repeat flex justify-center items-center flex-col"
//         style={{ backgroundImage: `url(${backgroundImage})` 
//       }}>
//       <div className="bg-[#184253]/30 z-30 p-3 rounded-lg text-white">
//         <p className="text-4xl  font-medium"> Welcome</p>
//           <p className="text-2xl font-light"> to</p>
          
//           <h2 className="text-2xl font-medium">Department of Computer Science and Engineering</h2>
      
//       </div>
        


          
//         </div>
//         <div className="section flex-div">
//           <div className="py-6 px-8 text-slate-800 font-medium tracking-wide text-base/loose  text-justify">
//             <p className="text-[1.1em] ">
//               UIT-RGPV, Bhopal is a community of teachers, staff & students, who
//               are dedicated to the achievement of a shared vision of excellence.
//               The community believes in renewing and transferring knowledge &
//               skills and the development of positive & purposeful attitudes and
//               values. Being in the campus of the State Technological University,
//               the UIT-RGPV is in a position to offer excellent and high quality
//               academic services to the students.
//             </p>
//             <br/>
//             <p className="text-[1.1em]">
//               The Institution is situated in Bhopal, a city well known for its
//               natural beauty & lakes. The city is well connected to the other
//               parts of the country, by air, rail, and road. The large number of
//               industries situated in and around Bhopal, provide excellent
//               training opportunities to the students and staff.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Welcome;



//Modern UI


import React from "react";
import { motion } from "framer-motion";
import backgroundImage from "../../assets/mainCs.jpeg";

function Welcome() {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Background with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-75"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center text-white p-8 bg-black/40 rounded-xl shadow-lg backdrop-blur-md max-w-2xl"
      >
        <h1 className="text-5xl font-extrabold tracking-wide drop-shadow-lg">
          Welcome
        </h1>
        <p className="text-xl font-light mt-2">to</p>
        <h2 className="text-3xl font-semibold mt-2">
          Department of Computer Science & Engineering
        </h2>
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        className="relative z-10 mt-10 bg-white/80 text-gray-900 p-6 rounded-lg shadow-lg max-w-3xl"
      >
        <p className="text-lg text-justify leading-relaxed">
          UIT-RGPV, Bhopal is a community of dedicated teachers, staff, and
          students striving for excellence. The institution fosters knowledge
          transfer, skill development, and innovation while being situated in
          the heart of Bhopal, a city known for its scenic beauty and thriving
          industries.
        </p>
        <br />
        <p className="text-lg text-justify leading-relaxed">
          With state-of-the-art facilities and industry connections, we provide
          our students with the best learning and research opportunities,
          preparing them for a successful career in the ever-evolving tech
          landscape.
        </p>
      </motion.div>

      {/* Decorative Dots */}
      {/* <div className="absolute bottom-10 flex gap-4 z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-4 h-4 bg-white rounded-full shadow-lg"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-4 h-4 bg-white rounded-full shadow-lg"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="w-4 h-4 bg-white rounded-full shadow-lg"
        ></motion.div>
      </div> */}
    </div>
  );
}

export default Welcome;





















// import React from "react";
// import backgroundImage from "../../assets/mainCs.jpeg";
// import { motion } from "framer-motion";

// function Welcome() {
//   return (
//     <div className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center brightness-75"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       ></div>

//       {/* Overlay Content */}
//       <motion.div 
//         initial={{ opacity: 0, y: 50 }} 
//         animate={{ opacity: 1, y: 0 }} 
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="relative z-10 text-center text-white p-6 bg-black/40 rounded-xl shadow-lg backdrop-blur-md"
//       >
//         <h1 className="text-5xl font-bold tracking-wide">Welcome</h1>
//         <p className="text-xl font-light mt-2">to</p>
//         <h2 className="text-3xl font-semibold mt-2">Department of Computer Science and Engineering</h2>
//       </motion.div>

//       {/* Decorative Elements */}
//       <div className="absolute bottom-10 flex gap-4 z-10">
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.5 }}
//           className="w-4 h-4 bg-white rounded-full shadow-lg"
//         ></motion.div>
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.7 }}
//           className="w-4 h-4 bg-white rounded-full shadow-lg"
//         ></motion.div>
//         <motion.div 
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6, delay: 0.9 }}
//           className="w-4 h-4 bg-white rounded-full shadow-lg"
//         ></motion.div>
//       </div>
//     </div>
//   );
// }

// export default Welcome;

