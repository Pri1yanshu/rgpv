// import React from "react"

// function Notice() {
//   return (
//     <div className="w-full h-screen backdrop-blur-lg flex justify-center items-center absolute insert-0 z-60">
//         <div>
//             <button>
//                 X
//             </button>
//             <ol>
//                 <li>Lorem ipsum dolor sit amet.</li>
//                 <li>Lorem ipsum dolor sit amet consectetur.</li>
//                 <li>Lorem ipsum dolor sit amet consectetur.</li>
//             </ol>
//         </div>
     
//     </div>
//   );
// }

// export default Notice;


import { useState } from "react";
import { XCircle, Info } from "lucide-react";

const Notice = ({ message }) => {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-80  bg-opacity-50 backdrop-blur-[3px]">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full relative animate-fadeIn">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
        >
          <XCircle className="w-6 h-6" />
        </button>
           
        <div className="flex flex-col items-center gap-3">
          <div className="flex item-center justify-center">
             <Info className="w-8 h-8 text-blue-600" /> 

           <h2 className="text-lg font-semibold text-blue-800"> Notice</h2> </div>
<div className=" flex justify-center items-center w-full my-2 text-lg tracking-tight">
     <ul>
      
          <li>NOTICE 1.</li>
          <li>NOTICE 2.</li>
          <li>NOTICE 3.</li>
          <li>NOTICE 4.</li>
     
          
</ul>
</div>

       
        </div>
        <p className="mt-3 text-gray-700">{message}</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notice;

