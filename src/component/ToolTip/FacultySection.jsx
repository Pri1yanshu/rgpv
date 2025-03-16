// import { motion } from "framer-motion";
// import { useState } from "react";

// const facultyMembers = [
//   { name: "Dr. Alice Johnson", title: "Professor of Computer Science", image: "https://source.unsplash.com/200x200/?woman,professor" },
//   { name: "Dr. Robert Smith", title: "Associate Professor of Mathematics", image: "https://source.unsplash.com/200x200/?man,professor" },
//   { name: "Dr. Emily Davis", title: "Head of Physics Department", image: "https://source.unsplash.com/200x200/?woman,scientist" },
//   { name: "Dr. James Brown", title: "Senior Lecturer in Chemistry", image: "https://source.unsplash.com/200x200/?man,scientist" },
//   { name: "Dr. Sophia Miller", title: "Professor of English Literature", image: "https://source.unsplash.com/200x200/?woman,teacher" },
//   { name: "Dr. Daniel Wilson", title: "Dean of Engineering", image: "https://source.unsplash.com/200x200/?man,engineer" },
// ];

// export default function FacultySection() {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <div className="p-10 bg-gray-100 min-h-screen flex flex-col items-center">
//       <h1 className="text-4xl font-bold text-gray-800 mb-10">Meet Our Faculty</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {facultyMembers.map((faculty, index) => (
//           <div
//             key={index}
//             className="relative flex flex-col items-center"
//             onMouseEnter={() => setHovered(index)}
//             onMouseLeave={() => setHovered(null)}
//           >
//             <img
//               src={faculty.image}
//               alt={faculty.name}
//               className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-300 cursor-pointer"
//             />
//             {hovered === index && (
//               <motion.div
//                 className="absolute bottom-20 bg-white p-4 rounded-lg shadow-lg text-center border border-gray-300"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 10 }}
//               >
//                 <h2 className="text-lg font-semibold text-gray-700">{faculty.name}</h2>
//                 <p className="text-gray-500 text-sm">{faculty.title}</p>
//               </motion.div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import { motion } from "framer-motion";
import { useState } from "react";

const facultyMembers = [
  { name: "Dr. Sanjay Silakari", title: "Professor of Computer Science", image: "https://www.uitrgpv.ac.in/AboutDepartment/FacultyImages/sanjay%20silakari2_260414044124.JPG" },
  { name: "Dr. Piyush Shukla", title: "Associate Professor of Mathematics", image: "https://www.uitrgpv.ac.in/AboutDepartment/FacultyImages/ps3_170323030023.jpg" },
  { name: "Dr. Rajiv panday", title: "Head of Physics Department", image: "https://www.uitrgpv.ac.in/AboutDepartment/FacultyImages/RP_170323025758.jpg" },
  { name: "Dr. Shikha Agrawal", title: "Senior Lecturer in Chemistry", image: "https://www.uitrgpv.ac.in/AboutDepartment/FacultyImages/sikhamam_230221115648.jpg" },
  { name: "Dr.Manish Ahirwar", title: "Professor of English Literature", image: "https://www.uitrgpv.ac.in/AboutDepartment/FacultyImages/MA_080321113310.jpg" },
  { name: "Prof. Uday Chourasia", title: "Dean of Engineering", image: "https://www.uitrgpv.ac.in/AboutDepartment/FacultyImages/uday12_290414010850.jpg" },
];

export default function FacultySection() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="p-10 bg-gray-100 lg:py-40 py-18 flex flex-col justify-center items-center">
      <h1 className="lg:text-5xl text-3xl font-bold text-gray-800 mb-10">Meet Our Faculty</h1>
      <div className="flex flex-wrap justify-center ">
        {facultyMembers.map((faculty, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center ml-[-15px]"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <motion.img
              src={faculty.image}
              alt={faculty.name}
              className="lg:w-28 lg:h-28 h-14 w-14 z-0 hover:z-10 rounded-full object-cover border-4 border-gray-300 cursor-pointer  shadow-lg transition-transform duration-300 hover:scale-105  hover:border-orange-400"
            />
            {hovered === index && (
              <motion.div
                className="absolute -bottom-16  p-1 rounded-lg  text-center "
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <h2 className="text-lg font-semibold text-gray-700 tracking-widest  ">{faculty.name}</h2>
                {/* <p className="text-gray-500 text-sm">{faculty.title}</p> */}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
