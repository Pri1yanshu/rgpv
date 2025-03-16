// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">
//       {/* Gallery Section */}
//       <div className="col-span-1 md:col-span-2">
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">Gallery</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           <img
//             src="https://www.uitrgpv.ac.in/imagesN/gallery_img.jpg"
//             alt="Gallery Image 1"
//             className="w-full h-40 object-cover rounded-lg shadow-md"
//           />
//           <img
//             src="https://www.uitrgpv.ac.in/imagesN/event_img.jpg"
//             alt="Gallery Image 2"
//             className="w-full h-40 object-cover rounded-lg shadow-md"
//           />
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUpKQQ4CDSfRB6fvJ6AVWEW-8jD4nm3QCXQ&s"
//             alt="Gallery Image 3"
//             className="w-full h-40 object-cover rounded-lg shadow-md"
//           />
//         </div>
//       </div>
      
//       {/* News Section */}
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">News</h2>
//         <ul className="space-y-2 text-gray-600">
//           <li>📢 Notice for B.Tech VI & VIII Sem students</li>
//           <li>⚠️ UFM Notice Dec 2024 Examination</li>
//           <li>📄 Educational Verification</li>
//         </ul>
//       </div>
      
//       {/* Miscellaneous Section */}
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">Miscellaneous</h2>
//         <ul className="list-disc pl-5 text-gray-600 space-y-2">
//           <li>Placement record 2019-22</li>
//           <li>Abstract of UIT-RGPV Budget</li>
//           <li>Hostel Information</li>
//           <li>Empanelment of Adjunct Faculty</li>
//         </ul>
//       </div>
      
//       {/* Event Section */}
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">Viksit Bharat@2047</h2>
//         <ul className="list-disc pl-5 text-gray-600 space-y-2">
//           <li>Background of Viksit Bharat@2047</li>
//           <li>Click here for information</li>
//           <li>Submit your idea on Viksit Bharat@2047</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// import React from "react";

// const Dashboard = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-100 min-h-screen">
//       {/* Gallery Section */}
//       <div className="col-span-1 md:col-span-2">
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">Gallery</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           {[1, 2, 3, 4, 5, 6].map((num) => (
//             <div key={num} className="relative group overflow-hidden rounded-lg shadow-lg">
//               <img
//                 src={`/images/gallery${num}.jpg`}
//                 alt={`Gallery Image ${num}`}
//                 className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
//               />
//               <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-white font-semibold">Gallery {num}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* News Section */}
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">News</h2>
//         <ul className="space-y-2 text-gray-600">
//           <li>📢 Notice for B.Tech VI & VIII Sem students</li>
//           <li>⚠️ UFM Notice Dec 2024 Examination</li>
//           <li>📄 Educational Verification</li>
//         </ul>
//       </div>
      
//       {/* Miscellaneous Section */}
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">Miscellaneous</h2>
//         <ul className="list-disc pl-5 text-gray-600 space-y-2">
//           <li>Placement record 2019-22</li>
//           <li>Abstract of UIT-RGPV Budget</li>
//           <li>Hostel Information</li>
//           <li>Empanelment of Adjunct Faculty</li>
//         </ul>
//       </div>
      
//       {/* Event Section */}
//       <div className="bg-white p-6 rounded-lg shadow-lg">
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">Viksit Bharat@2047</h2>
//         <ul className="list-disc pl-5 text-gray-600 space-y-2">
//           <li>Background of Viksit Bharat@2047</li>
//           <li>Click here for information</li>
//           <li>Submit your idea on Viksit Bharat@2047</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
import React from "react";

const galleryItems = [
  { id: 1, image: "https://www.uitrgpv.ac.in/imagesN/gallery_img.jpg", text: "Innovation & Tech" },
  { id: 2, image: "https://www.uitrgpv.ac.in/imagesN/event_img.jpg", text: "Programming Culture" },
  { id: 3, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqRoYO6oyjx2jiqsWO_21XzCO0lCVumCXblw&s", text: "Tech Conferences" },
  { id: 4, image: "https://www.uitrgpv.ac.in/imagesN/gallery_img3.jpg", text: "Collaborative Learning" },
  { id: 5, image: "data:image/jpeg;base64,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", text: "Artificial Intelligence" },
  { id: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcq3d2ENsiOc7BAcsYrEuwiqShewm3N5F4LA&s", text: "Campus Life" },
];

const Dashboard = () => {
  return (
    <div className="py-16 px-1 bg-gradient-to-br from-[#144252] via-[#76c9d6] to-[#144249] text-white">
      <h2 className="text-center text-4xl font-extrabold tracking-wide mb-12">
        Explore Our Gallery
      </h2>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.text}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-white text-lg font-semibold">{item.text}</p>
            </div>

            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gradient-to-r from-pink-500 to-blue-500 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;