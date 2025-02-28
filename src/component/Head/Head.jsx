// import React from "react";
// // import "./Head.css";

// function Head() {
//   return (
//     <>
//       <div className="bg-orange-500 h-[30px] ">
//       </div>
//       <div className="flex flex-col lg:flex-row lg:justify-center items-center">
//       <div className="flex justify-center p-3">
//          <img
//         className="h-[5em] w-[5em]  rounded-l-md" 
//         src="https://www.uitrgpv.ac.in/imagesn/rgpv-logo.jpg" 
//         alt="logo" />
//       </div>
       
//         <div className=" inline-block p-3">
//           <h1 className="font-extrabold text-2xl">University Institute of Technology, RGPV</h1>
//           <h3 className="font-semibold text-sm">Department of Computer Science </h3>
//           <h4 className="font-semibold text-sm">Constituent College of RGPV, NAAC "A" graded Technological University</h4>
//           <h4 className="font-semibold text-sm">Narsingharh By Pass Road Near Gandhi Nagar, Bhopal (M.P) </h4>
//         </div>
//       </div>
      
//     </>
//   );
// }

// export default Head;





















import React from "react";

const Head = () => {
  return (
    <header className="bg-[#184852] text-white py-2 shadow-md">
      {/* 🔹 Top Orange Strip */}
      <div className="bg-orange-500 h-[4px] w-full"></div>

      {/* 🔹 Logo & Info Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center py-4 px-6 text-center lg:text-left">
        
        {/* 🔹 Logo */}
        <div className="flex-shrink-0">
          <img
            className="h-20 w-20 rounded-md shadow-lg"
            src="https://www.uitrgpv.ac.in/imagesn/rgpv-logo.jpg"
            alt="UIT RGPV Logo"
          />
        </div>

        {/* 🔹 University Details */}
        <div className="ml-6">
          <h1 className="text-3xl font-bold tracking-wide">
            University Institute of Technology, RGPV
          </h1>
          <h3 className="text-lg font-semibold mt-1 text-gray-300">
            Department of Computer Science
          </h3>
          <h4 className="text-sm font-medium mt-1 text-gray-400">
            Constituent College of RGPV, NAAC "A" Graded Technological University
          </h4>
          <h4 className="text-sm font-medium text-gray-400">
            Narsingharh Bypass Road, Near Gandhi Nagar, Bhopal (M.P)
          </h4>
        </div>
      </div>
    </header>
  );
};

export default Head;
