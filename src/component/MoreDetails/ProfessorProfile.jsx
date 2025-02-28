// import React from "react";
// import { CgCloseO } from "react-icons/cg";

// import { Regular, NonRegular } from '../../Data/FacultyDetails';

// const ProfessorProfile = ({data, setFaculty})=> {
 
//   return (
//     <div className="">
          
//     <div className="max-w-4xl m-3 relative  mx-auto p-6 bg-white shadow-lg rounded-2xl">
    
//      <CgCloseO
//               style={{ fontSize: "2em" }}
//               className="absolute top-0 right-0 m-4 text-gray-400 hover:text-gray-800 cursor-pointer"
//               onClick={() => {
//                 setFaculty((prev) => !prev)
//             }}

//             />
//       <h2 className="text-2xl mt-7 font-bold text-gray-800 mb-2">{data.name}</h2>
//       <p className="text-lg text-gray-600">{data.designation}</p>
//       <p className="text-sm text-gray-500">{data.department}</p>
//       <p className="text-sm text-gray-500">{data.address}</p>
      
//       {/* Contact Info */}
//       <div className="mt-4">
//         <h3 className="text-lg font-semibold text-gray-700">Contact</h3>
//         <p>Email: <a href={`mailto:${data.contact.email}`} className="text-blue-500">{data.contact.email}</a></p>
//         <p>Phone: {data.contact.phone}</p>
//         <p>Mobile: {data.contact.mobile}</p>
//         {data.contact.website && <p>Website: <a href={data.contact.website} className="text-blue-500" target="_blank" rel="noopener noreferrer">Visit</a></p>}
//       </div>
      
//       Experience
//       <div className="mt-4">
//         <h3 className="text-lg font-semibold text-gray-700">Experience</h3>
//         <p>{data.experience}</p>
//       </div>
      
//       {/* Education */}
//       <div className="mt-4">
//         <h3 className="text-lg font-semibold text-gray-700">Education</h3>
//         <ul className="list-disc list-inside text-gray-600">
//           {data.education_qualification.map((edu, index) => (
//             <li key={index}>{edu.qualification} - {edu.specialization}</li>
//           ))}
//         </ul>
//       </div>
      
//       {/* Memberships */}
//       <div className="mt-4">
//         <h3 className="text-lg font-semibold text-gray-700">Memberships</h3>
//         <ul className="list-disc list-inside text-gray-600">
//           {data.memberships.map((membership, index) => (
//             <li key={index}>{membership}</li>
//           ))}
//         </ul>
//       </div>
      
//       {/* Research Areas */}
//       {/* <div className="mt-4">
//         <h3 className="text-lg font-semibold text-gray-700">Research Areas</h3>
//         <ul className="list-disc list-inside text-gray-600">
//           {data.research_areas.map((area, index) => (
//             <div key={index}>
//               <li >{area.title}</li>
//               <li >{area.journal}</li>
//               <li >{area.year}</li>
//             </div>
            
          
//           ))}
//         </ul>
//       </div> */}
      
//       {/* Publications */}
//       <div className="mt-4">
//         <h3 className="text-lg font-semibold text-gray-700">Publications</h3>
//         <ul className="list-disc list-inside text-gray-600">
//           {data.publications.slice(0, 5).map((pub, index) => (
//             <li key={index} className="mb-2">
//               <span className="font-medium">{pub.title}</span> - {pub.journal}, {pub.year}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ProfessorProfile;



import React from "react";
import { CgCloseO } from "react-icons/cg";

const ProfessorProfile = ({ data, setFaculty }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-3xl w-full relative bg-white shadow-xl rounded-2xl p-6">
        {/* Close Button */}
        <CgCloseO
          className="absolute top-4 right-4 text-gray-500 text-3xl cursor-pointer hover:text-gray-800 transition"
          onClick={() => setFaculty((prev) => !prev)}
        />

        {/* Profile Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-1">{data.name}</h2>
          <p className="text-lg text-gray-600">{data.designation}</p>
          <p className="text-sm text-gray-500">{data.department}</p>
          <p className="text-sm text-gray-500">{data.address}</p>
        </div>

        {/* Contact Info */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Contact</h3>
          <p>Email: <a href={`mailto:${data.contact.email}`} className="text-blue-500 hover:underline">{data.contact.email}</a></p>
          <p>Phone: {data.contact.phone}</p>
          <p>Mobile: {data.contact.mobile}</p>
          {data.contact.website && (
            <p>Website: <a href={data.contact.website} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Visit</a></p>
          )}
        </div>

        {/* Experience */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-xl font-semibold text-gray-700">Experience</h3>
          <p className="text-gray-600">{data.experience}</p>
        </div>

        {/* Education */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-xl font-semibold text-gray-700">Education</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {data.education_qualification.map((edu, index) => (
              <li key={index}>{edu.qualification} - {edu.specialization}</li>
            ))}
          </ul>
        </div>

        {/* Memberships */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-xl font-semibold text-gray-700">Memberships</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {data.memberships.map((membership, index) => (
              <li key={index}>{membership}</li>
            ))}
          </ul>
        </div>

        {/* Publications */}
        <div className="mt-6 border-t pt-4">
          <h3 className="text-xl font-semibold text-gray-700">Publications</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            {data.publications.slice(0, 5).map((pub, index) => (
              <li key={index} className="text-gray-700">
                <span className="font-medium">{pub.title}</span> - {pub.journal}, {pub.year}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfessorProfile;
