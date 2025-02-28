// import React from "react";
// // import "./Department.css";
// import Footer from "../../component/Footer/Footer.jsx";

// function Department() {
//   return (
//     <>
//       <div className="main-department px-4 py-7">
//         <div className="cource ">
//           <h1 className="text-3xl font-bold my-4">COURSE OFFERED</h1>
//         <div className="flex flex-col justify-center items-center  my-8">
//             <table  className="min-w-full bg-white border border-gray-300 shadow-lg">
//               <thead >
//                 <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
//                   <th className="py-3 px-6 text-left">Cource</th>
//                   <th className="py-3 px-6 text-left">Branch</th>
//                 </tr>
//               </thead>
//             <tbody className="text-gray-600 text-sm font-light">
//               <tr className="border-b border-gray-300 hover:bg-gray-100">
//                 <td className="py-3 px-6 text-left">B.Tech</td>
//                 <td className="py-3 px-6 text-left">Computer Science & Engineering</td>
//               </tr>
//               <tr className="border-b border-gray-300 hover:bg-gray-100">
//                 <td className="py-3 px-6 text-left">M.E.</td>
//                 <td className="py-3 px-6 text-left">Computer Science & Engineering</td>
//               </tr>
//             </tbody>
//           </table>
//           </div>
//         </div>

//         <div className="facilities ">
//           <h1 className="text-2xl font-semibold pb-7 mt-4 text-gray-800">DEPARTMENTAL FACILITY</h1>
//           <div className="in-facilities text-gray-700 leading-normal ">
//             <h3>Well Equipped Computer Lab</h3>
//             <p>
//               All labs are furnished with Computers of latest configuration
//               connected with LAN and high speed internet facilities. PCs are
//               having C++ compiler, Java compiler and other simulation packages.
//             </p>
//           </div>
//           <div>
//         <div className="h-0.5 bg-gray-400 my-8 mx-auto w-10/12"/>

//             <h3 className="text-2xl font-semibold pb-7  text-gray-800">Departmental Library</h3>
//             <p>
//               Department maintains its own library holding large collection of
//               reference book on various topics of computer science &
//               engineering. It aims to equip teaching staff and students with
//               latest editions of books and journals.
//             </p>
//           </div>
            
            
          
//         </div>
//         <div className="h-0.5 bg-gray-400 my-8 mx-auto w-10/12"/>

//         <div className="Research">
//           <h1 className="text-2xl font-semibold pb-7  text-gray-800">DEPARTMENTAL RESEARCH</h1>

//           <div className="in-research">
//             <div>
//               <h3>
//                 Lab : Analysis and Design of Distributed Intrusion Detection
//                 System using Soft Computing Mobile Agents
//               </h3>
//               <ul>
//                 <li>
//                   Research Faculties: Dr. Sanjay Silakari & Prof. Shikha Agarwal{" "}
//                 </li>
//                 <li>Research Status: On going</li>
//                 <li>Research Cost: 2 lakh 85 Thousand</li>
//                 <li>
//                   Research Agency: Madhya Pradesh Council of Science &
//                   Technology, Bhopal
//                 </li>
//               </ul>
//             </div>
            
//             <br/>
//             <div>
//               <h3>
//                 Lab : Delay Tolerant Networks Application in Underdeveloped
//                 Region
//               </h3>
//               <ul>
//                 <li>
//                   Research Faculties: Dr Sanjay Silakari & Dr. Piyush K Shukla{" "}
//                 </li>
//                 <li>Research Status: Submitted</li>
//                 <li>Research Cost: 18 lakh 0 Thousand</li>
//                 <li>Research Agency: AICTE</li>
//               </ul>
//             </div>
//             <br/>
            
            
//             <div>
//               <h3>Lab : Swarm Intelligence in Bioinformatics</h3>
//               <ul>
//                 <li>
//                   Research Faculties: Dr. Sanjay Silakari & Prof. Shikha Agarwal{" "}
//                 </li>
//                 <li>Research Status: Submitted</li>
//                 <li>Research Cost: 17 lakh 0 Thousand</li>
//                 <li>Research Agency: AICTE</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Department;


import React from "react";
import Footer from "../../component/Footer/Footer.jsx";

const Department = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Department of Computer Science & Engineering</h1>
        <p className="text-lg mt-3">Innovating the Future with Technology and Research</p>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Courses Offered */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Courses Offered</h2>
          <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Course</th>
                <th className="py-3 px-6 text-left">Branch</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              <tr className="border-b border-gray-300 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">B.Tech</td>
                <td className="py-3 px-6 text-left">Computer Science & Engineering</td>
              </tr>
              <tr className="border-b border-gray-300 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">M.E.</td>
                <td className="py-3 px-6 text-left">Computer Science & Engineering</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Facilities */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Departmental Facilities</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">Well-Equipped Computer Lab</h3>
            <p className="text-gray-600 mt-2">
              All labs are furnished with high-configuration computers, LAN connectivity, and high-speed internet.
              Equipped with C++, Java compilers, and various simulation packages.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-xl font-semibold text-gray-700">Departmental Library</h3>
            <p className="text-gray-600 mt-2">
              Our department library holds an extensive collection of reference books, journals, and research materials
              to support students and faculty.
            </p>
          </div>
        </section>

        {/* Research Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Departmental Research</h2>
          <div className="space-y-6">
            {[
              {
                title: "Analysis and Design of Distributed Intrusion Detection System",
                faculties: "Dr. Sanjay Silakari & Prof. Shikha Agarwal",
                status: "Ongoing",
                cost: "₹2.85 Lakhs",
                agency: "Madhya Pradesh Council of Science & Technology, Bhopal",
              },
              {
                title: "Delay Tolerant Networks Application in Underdeveloped Regions",
                faculties: "Dr. Sanjay Silakari & Dr. Piyush K Shukla",
                status: "Submitted",
                cost: "₹18 Lakhs",
                agency: "AICTE",
              },
              {
                title: "Swarm Intelligence in Bioinformatics",
                faculties: "Dr. Sanjay Silakari & Prof. Shikha Agarwal",
                status: "Submitted",
                cost: "₹17 Lakhs",
                agency: "AICTE",
              },
            ].map((research, index) => (
              <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-700">{research.title}</h3>
                <ul className="text-gray-600 mt-2 space-y-1">
                  <li><strong>Research Faculties:</strong> {research.faculties}</li>
                  <li><strong>Research Status:</strong> {research.status}</li>
                  <li><strong>Research Cost:</strong> {research.cost}</li>
                  <li><strong>Research Agency:</strong> {research.agency}</li>
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Department;

