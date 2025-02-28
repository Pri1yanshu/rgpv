// import React from "react";
// import AnimatedTooltip from "../ui/AnimatedToolTip";

// const facultyData = [
//   {
//     id: 1,
//     name: "Dr. John Doe",
//     designation: "Professor",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
//   {
//     id: 2,
//     name: "Dr. Jane Smith",
//     designation: "Associate Professor",
//     image: "https://randomuser.me/api/portraits/women/2.jpg",
//   },
//   {
//     id: 3,
//     name: "Dr. Robert Brown",
//     designation: "Professor",
//     image: "https://randomuser.me/api/portraits/men/3.jpg",
//   },
  
// ];

// const FacultySection = () => {
//   return (
//     <div className="py-10 min-h-screen bg-[#184258] flex flex-col justify-center items-center ">
//       <h2 className="text-center text-3xl font-bold text-blue-600 mb-6">
//         Meet Our Faculty
//       </h2>
//       <div className="flex flex-row items-center justify-center mb-10 ">
//         <AnimatedTooltip items={facultyData} />
//       </div>
      
//     </div>
//   );
// };

// export default FacultySection;


// import React from "react";
// import AnimatedTooltip from "../ui/AnimatedToolTip";

// const facultyData = [
//   {
//     id: 1,
//     name: "Dr. John Doe",
//     designation: "Professor",
//     image: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
//   {
//     id: 2,
//     name: "Dr. Jane Smith",
//     designation: "Associate Professor",
//     image: "https://randomuser.me/api/portraits/women/2.jpg",
//   },
//   {
//     id: 3,
//     name: "Dr. Robert Brown",
//     designation: "Professor",
//     image: "https://randomuser.me/api/portraits/men/3.jpg",
//   },
// ];

// const FacultySection = () => {
//   return (
//     <div className="py-16 min-h-screen bg-gradient-to-r from-[#1e3c72] to-[#2a5298] flex flex-col justify-center items-center">
//       {/* Title */}
//       <h2 className="text-center text-4xl font-extrabold text-white mb-8 tracking-wide">
//         Meet Our Faculty
//       </h2>

//       {/* Faculty Members */}
//       <div className="flex flex-wrap justify-center gap-8">
//         {facultyData.map((faculty) => (
//           <div
//             key={faculty.id}
//             className="relative group overflow-hidden rounded-xl shadow-lg bg-white bg-opacity-10 backdrop-blur-lg p-4 transition-all duration-500 transform hover:scale-105"
//           >
//             {/* Faculty Image */}
//             <img
//               src={faculty.image}
//               alt={faculty.name}
//               className="w-28 h-28 object-cover rounded-full border-4 border-white mx-auto transition-transform duration-500 group-hover:scale-110"
//             />

//             {/* Faculty Details */}
//             <div className="text-center mt-4">
//               <h3 className="text-lg font-semibold text-white">{faculty.name}</h3>
//               <p className="text-sm text-gray-300">{faculty.designation}</p>
//             </div>

//             {/* Hover Tooltip */}
//             <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//               <AnimatedTooltip items={[faculty]} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FacultySection;





















import React from "react";
import AnimatedTooltip from "../ui/AnimatedToolTip";

const facultyData = [
  {
    id: 1,
    name: "Dr. John Doe",
    designation: "Professor",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    designation: "Associate Professor",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Dr. Robert Brown",
    designation: "Professor",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const FacultySection = () => {
  return (
    <div className="py-16 min-h-screen bg-gradient-to-r from-[#1e3c72] to-[#2a5298] flex flex-col justify-center items-center">
      {/* Title */}
      <h2 className="text-center text-4xl font-extrabold text-white mb-10 tracking-wide">
        Meet Our Faculty
      </h2>

      {/* Faculty Members with Tooltips */}
      <div className="flex space-x-6">
        <AnimatedTooltip items={facultyData} />
      </div>
    </div>
  );
};

export default FacultySection;

