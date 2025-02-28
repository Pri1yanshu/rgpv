// import React, { useEffect } from "react";
// import Calender from "../../component/Calender/Calender.jsx";
// import Footer from "../../component/Footer/Footer.jsx";
// import Ragging from "../../component/Ragging/Ragging.jsx";
// import axios from "axios";
// import { useState } from "react";

// function Student() {
//   const [students, setStudents] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch("http://localhost:8000/trData/stdList/2017");
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const result = await response.json();
//         console.log(result[1][8]);
//         setStudents(result);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <p className="text-center mt-4">Loading...</p>;
//   if (error) return <p className="text-center text-red-500">Error: {error}</p>;


  
   


//   return (
//     <>
//     <div className="flex flex-col justify-center items-center container p-4">
//         {/* <Calender /> */}
//         <div className="m-6 p-4 ">
//         <h2 className="text-3xl py-4 font-semibold">Academic Calendar</h2>
//         <ol className="border-2 border-gray-300 p-8 flex flex-col justify-center items-center gap-2"> 
//           <li>
//             <a 
//               className="text-blue-400 hover:text-blue-800 text-lg  "
//               target="blank"
//               href="https://www.uitrgpv.ac.in/LastestDownloads/AC/Acad%20Cal%201st%20sem_030823024700.pdf"
//             >
//               Academic Calendar B Tech I Semester 23-24
//             </a>{" "}
//           </li>

//           <li>
//             {" "}
//             <a
//             className="text-blue-400 hover:text-blue-800 text-lg  "
//               target="blank"
//               href="https://www.uitrgpv.ac.in/LastestDownloads/AC/AC%20II_230124010233.pdf"
//             >
//               Academic Calendar B Tech II Semester 23-24
//             </a>{" "}
//           </li>
//           <li>
//             {" "}
//             <a className="text-blue-400 hover:text-blue-800 text-lg  "
//               target="blank"
//               href="https://www.uitrgpv.ac.in/LastestDownloads/AC/R%20Acad%20Cal%20III%20sem_170823121454.pdf"
//             >
//               Academic Calendar B Tech III Semester 23-24
//             </a>{" "}
//           </li>
//           <li>
//             {" "}
//             <a className="text-blue-400 hover:text-blue-800 text-lg  "
//               target="blank"
//               href="https://www.uitrgpv.ac.in/LastestDownloads/AC/AC%20IV_230124010212.pdf"
//             >
//               Academic Calendar B Tech IV Semester 23-24
//             </a>{" "}
//           </li>
//           <li>
//             {" "}
//             <a className="text-blue-400 hover:text-blue-800 text-lg  "
//               target="blank"
//               href="https://www.uitrgpv.ac.in/LastestDownloads/AC/V%20sem_120623050759.pdf"
//             >
//               Academic Calendar B Tech V Semester 23-24
//             </a>{" "}
//           </li>
//           <li>
//             <a className="text-blue-400 hover:text-blue-800 text-lg  "
//               target="blank"
//               href="https://www.uitrgpv.ac.in/LastestDownloads/AC/VI%20sem%20AC_050124015331.pdf"
//             >
//               Academic Calendar B Tech VI Semester 23-24
//             </a>{" "}
//           </li>
//           <li>
//             <a className="text-blue-400 hover:text-blue-800 text-lg  " href="https://www.uitrgpv.ac.in/LastestDownloads/AC/VII%20sem_120623050120.pdf">
//               Academic Calendar B Tech VII Semester 23-24
//             </a>{" "}
//           </li>
//           <li>
//             <a className="text-blue-400 hover:text-blue-800 text-lg  " href="https://www.uitrgpv.ac.in/LastestDownloads/AC/VIII%20sem%20AC_050124015300.pdf">
//               Academic Calendar B Tech VIII Semester 23-24
//             </a>{" "}
//           </li>
//         </ol>
//       </div>


//         {/* <Ragging /> */}

//         <div className="ragging px-4 m-3">
//           <h1 className="text-3xl py-4 font-semibold">ANTI RAGGING</h1>
//           <div className="in-ragging">
//             <div className="div-1 border-2 border-slate-500 px-2 py-3 my-2 text-gray-700 text-base/relaxed ">
//               <h2 className="text-red-600 py-2 font-medium text-2xl">Important Instruction Regarding Ragging</h2>
//               <p>
//                 All the students of UIT-RGPV are hereby again informed that
//                 Ragging is a punishable crime under the act of UGC/AICTE, and
//                 the Institute has zero tolerance policy regarding ragging.
//                 Strict disciplinary actions would be initiated against any
//                 students found indulging in ragging, which may include filing of
//                 police case and rustication from the university/Institute.
//                 Submitting affidavit regarding ragging by parents and students
//                 is mandatory, the format of which is available below.
//               </p>
//               <p className="imp">
//                 Don’t hesitate in giving information about ragging. Your
//                 identity will be strictly kept confidential.
//               </p>
//             </div>
//             <div  className="div-1 border-2 border-slate-500 px-2 py-3 my-7 text-gray-700 text-base/relaxed ">
//               <h2 className="text-red-600 py-2 font-medium text-2xl ">Important Circulars</h2>
//               <ul>
//                 <li>
//                   <a 
//             className="text-blue-400 hover:text-blue-800 text-sm font-mono "

//                     target="blank"
//                     href="https://www.uitrgpv.ac.in/pdf/underform_for_ragging.pdf"
//                   >
//                     Undertaking Regarding Rules and Regulation of institute
//                   </a>
//                 </li>
//                 <li>
//                   <a 
//             className="text-blue-400 hover:text-blue-800 text-sm font-mono  "

//                     target="blank"
//                     href="https://www.uitrgpv.ac.in/pdf/Affidavit%20of%20AICTE%20regarding%20Anti%20Ragging.pdf"
//                   >
//                     Affidavit of AICTE regarding Anti Ragging
//                   </a>
//                 </li>
//                 <li>
//                   <a 
//             className="text-blue-400 hover:text-blue-800 text-sm font-mono "

//                     target="blank"
//                     href="https://www.uitrgpv.ac.in/pdf/AICTE%20Notification%20Regarding%20Antiragging.pdf"
//                   >
//                     AICTE Notification Regarding Antiragging
//                   </a>
//                 </li>
//                 <li>
//                   <a 
//             className="text-blue-400 hover:text-blue-800 text-sm font-mono "

//                     target="blank"
//                     href="https://www.uitrgpv.ac.in/pdf/C01.pdf"
//                   >
//                     Circular 01
//                   </a>
//                 </li>
//                 <li>
//                   <a 
//             className="text-blue-400 hover:text-blue-800 text-sm font-mono "

//                     target="blank"
//                     href="https://www.uitrgpv.ac.in/pdf/C02.pdf"
//                   >
//                     Circular 02
//                   </a>
//                 </li>
//                 <li>
//                   <a 
//             className="text-blue-400 hover:text-blue-800 text-sm font-mono "

//                     target="blank"
//                     href="https://www.uitrgpv.ac.in/pdf/C03.pdf"
//                   >
//                     Circular 03
//                   </a>
//                 </li>
//                 <li>
//                   <a 
//             className="text-blue-400 hover:text-blue-800 text-sm font-mono "

//                     target="blank"
//                     href="https://www.uitrgpv.ac.in/pdf/ragging.pdf"
//                   >
//                     Ragging
//                   </a>
//                 </li>
//                 <li>
//                   <a 
//             className="text-blue-400 hover:text-blue-800 text-sm font-mono "

//                     target="blank"
//                     href="https://www.uitrgpv.ac.in/PDF/InCaseofRagging.pdf"
//                   >
//                     In Case of Ragging
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div  className="border-2 border-slate-400 px-2 py-3 my-7 text-gray-700 text-base/relaxed ">
//               <h2 className="text-red-600 py-2 font-medium text-1xl ">In case of any incidence / information of ragging contact</h2>
//               <table className="w-full my-3 border border-gray-300 shadow-lg">
//                 <tbody className="text-center bg-white border-b border-gray-300">
//                   <tr className="bg-gray-200 text-gray-600 ">
//                     <td className="py-3 px-6 text-left">Prof. S.S Bhadoriya</td>
//                     <td className="py-3 px-6 text-left">Director, UIT-RGPV</td>
//                     <td className="py-3 px-6 text-left">uit_director@rgtu.net</td>
//                   </tr>
//                   <tr className="">
//                     <td className="py-3 px-6 text-left">Dr Anil Goyal</td>
//                     <td className="py-3 px-6 text-left">Proctor</td>
//                     <td className="py-3 px-6 text-left">9425338282</td>
//                   </tr>
//                   <tr className="bg-gray-200 text-gray-600 ">
//                     <td className="py-3 px-6 text-left">Manju Singh</td>
//                     <td className="py-3 px-6 text-left">DSW, RGPV</td>
//                     <td className="py-3 px-6 text-left"> 0755 - 2678870 , dsw@rgtu.net</td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>


//       <div>
//       <h2 className="text-xl font-bold text-center mb-4 ">Student Records</h2>
//       <table className="max-w-full bg-white border border-gray-300 shadow-lg">
//       <thead>
//         <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal ">
//           <th className="py-3 px-6 text-left">Year</th>
//           <th className="py-3 px-6 text-left">Enroll No</th>
//           <th className="py-3 px-6 text-left">CGPA</th>
//           <th className="py-3 px-6 text-left">Result</th>
//         </tr>
//       </thead>
//       <tbody className="text-gray-600 text-sm font-light">
//         {students.map((student, index) => {
//           return (
//             <tr key={index} className="border-b border-gray-300 hover:bg-gray-100">
//               <td className="py-3 px-6 text-left " >{student.year}</td>
//               <td className="py-3 px-6 text-left ">{student.enrollNo}</td>
//               <td className="py-3 px-6 text-left ">{student[8]}</td>
//               <td className="py-3 px-6 text-left ">{student[8] === undefined ? <span className="text-red-600">FAIL</span> : <span className="text-emerald-400">PASS</span>}</td>
//             </tr>
//           )
//         })}

//       </tbody>
//         </table>
//       </div>
      
//     </div>
//     <Footer />
//     </>
//   );
// }

// export default Student;

import React, { useEffect, useState } from "react";

function StudentRecords() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2017"); // Default year
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/trData/stdList/${selectedYear}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setStudents(result);
        setFilteredStudents(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [selectedYear]);

  // Filter students by enrollment number
  useEffect(() => {
    setFilteredStudents(
      students.filter(student => student.enrollNo.includes(searchTerm))
    );
  }, [searchTerm, students]);

  return (
 <div className="container p-6 mx-auto">

 

       {/* Academic Calendar */}
       <div className="bg-white shadow-md rounded-lg p-6 mb-8">
       <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Academic Calendar</h2>
       <div className="border-b-2 border-gray-300 w-16 mx-auto mb-4"></div>
       <ol className="space-y-3 text-center">
         {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
           <li key={sem}>
             <a
               className="text-blue-500 hover:text-blue-700 font-medium transition-all"
               target="_blank"
               rel="noopener noreferrer"
               href={`https://www.uitrgpv.ac.in/LastestDownloads/AC/V${sem}%20sem.pdf`}
             >
               Academic Calendar B Tech {sem} Semester 23-24
             </a>
           </li>
         ))}
       </ol>
     </div>


 {/* Anti Ragging Section */}
 <div className="bg-white shadow-md rounded-lg p-6 mb-8">
 <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Anti Ragging</h2>
 <p className="text-gray-700 text-center mb-4">
   Ragging is a punishable crime, and UIT-RGPV has a strict zero-tolerance policy. Disciplinary action, including legal consequences, will be taken against anyone involved.
 </p>
 <div className="border-b-2 border-gray-300 w-16 mx-auto mb-4"></div>
 <ul className="text-center space-y-3">
   <li>
     <a className="text-blue-500 hover:text-blue-700 transition-all" href="https://www.uitrgpv.ac.in/pdf/ragging.pdf" target="_blank" rel="noopener noreferrer">
       AICTE Notification Regarding Antiragging
     </a>
   </li>
   <li>
     <a className="text-blue-500 hover:text-blue-700 transition-all" href="https://www.uitrgpv.ac.in/PDF/InCaseofRagging.pdf" target="_blank" rel="noopener noreferrer">
       In Case of Ragging
     </a>
   </li>
 </ul>
</div>


    <div className="p-6 bg-gray-100 rounded-lg shadow-lg w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-700">Student Records</h2>
      
      {/* Dropdown for selecting year */}
      <div className="mb-4 flex justify-between items-center">
        <select
          className="px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {[2017, 2018, 2019, 2020, 2021, 2022].map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        
        {/* Search bar */}
        <input
          type="text"
          className="px-4 py-2 border rounded-lg text-gray-700 focus:ring-2 focus:ring-blue-400"
          placeholder="Search Enrollment No..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Student Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
              <th className="py-3 px-6 text-left">Year</th>
              <th className="py-3 px-6 text-left">Enroll No</th>
              <th className="py-3 px-6 text-left">CGPA</th>
              <th className="py-3 px-6 text-left">Result</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student, index) => (
                <tr key={index} className="border-b border-gray-300 hover:bg-gray-100">
                  <td className="py-3 px-6">{student.year}</td>
                  <td className="py-3 px-6">{student.enrollNo}</td>
                  <td className="py-3 px-6">{student[8]}</td>
                  <td className="py-3 px-6">
                    {student[8] === undefined ? (
                      <span className="text-red-600">FAIL</span>
                    ) : (
                      <span className="text-green-500">PASS</span>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default StudentRecords;
