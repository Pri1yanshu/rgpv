// import React from "react";
// // import "./ProfileCard.css";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaEnvelope } from "react-icons/fa";

// function ProfileCard({
//   address,
//   image,
//   name,
//   designation,
//   experience,
//   mail,
//   phone,
//   data,
//   setFaculty,
//   setFacultyData,
// })

// {
//   return (
   
//     <>
//       <div className=" bg-white relative shadow-lg rounded-xl p-6 text-center transform transition duration-500 hover:scale-105 hover:shadow-xl border border-gray-200">
//             <img 
//               src={image} 
//               alt={name} 
//               className="w-32 h-32 mx-auto rounded-full border-4 border-gray-300 shadow-lg" 
//             />
//             <h3 className="text-2xl font-bold mt-4 text-gray-900">{name}</h3>
//             <p className="text-indigo-600 text-sm font-medium">{designation}</p>
//             {/* <p className="text-gray-500 mt-1 text-sm">{post}</p> */}
//             <p className="text-gray-600 mt-2 text-base">Experience: {experience}</p>
//             <p className="text-gray-600 text-sm">📍 {address}</p>
//             <p className="text-gray-600 text-sm">📧 <a href={`mailto:${mail}`} className="text-blue-500 hover:underline">{mail}</a></p>
//             <p className="text-gray-600 text-sm">📞 <a href={`tel:${phone}`} className="text-blue-500 hover:underline">{phone}</a></p>
//            <br/>
//            <br/>
           
//             <div className="mt-4 mb-4 absolute w-full mx-auto py-1 text-white left-0 bottom-0 ">
//               <button 
//               onClick={() => setFaculty((prev) =>{ !prev; setFacultyData(data);})}
//               className=" bg-gray-300 w-fit   text-gray-600 px-6 py-2 rounded-full shadow-md hover:bg-gray-800 hover:text-gray-100 transition duration-300">
//               More Details
//               </button>
//             </div>
//           </div>

//     </>
//   );
// }
// export default ProfileCard;


import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ProfileCard({ address, image, name, designation, experience, mail, phone, data, setFaculty, setFacultyData }) {
  return (
    <div className="relative bg-white shadow-xl rounded-xl p-6 text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl border border-gray-200 overflow-hidden">
      <div className="flex flex-col items-center">
        <img src={image} alt={name} className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-lg" />
        <h3 className="text-2xl font-bold mt-4 text-gray-900">{name}</h3>
        <p className="text-indigo-600 text-sm font-medium">{designation}</p>
        <p className="text-gray-600 mt-2 text-base font-semibold">Experience: {experience}</p>
      </div>

      <div className="mt-4 text-gray-700 text-sm space-y-2">
        <p className="flex items-center justify-center gap-2"><FaMapMarkerAlt className="text-gray-500" /> {address}</p>
        <p className="flex items-center justify-center gap-2"><FaEnvelope className="text-blue-500" /> <a href={`mailto:${mail}`} className="hover:underline">{mail}</a></p>
        <p className="flex items-center justify-center gap-2"><FaPhoneAlt className="text-green-500" /> <a href={`tel:${phone}`} className="hover:underline">{phone}</a></p>
      </div>

      <div className="mt-6">
        <button 
          onClick={() => setFaculty((prev) => { !prev; setFacultyData(data); })} 
          className=" bg-gray-800 text-white px-6 py-2 rounded-full shadow-md hover:bg-gray-900 transition duration-300">
          More Details
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
