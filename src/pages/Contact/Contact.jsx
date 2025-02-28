import React from "react";
import { IoCall } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import Footer from "../../component/Footer/Footer.jsx";

function Contact() {
  return (
    <>
      <div className="container mx-auto p-4 ">
      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Your Email <span className="text-red-500">*</span></label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Message <span className="text-red-500">*</span></label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none resize-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-600 text-white font-semibold py-2 rounded-lg hover:bg-gray-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
         <h1 className="text-xl mt-10 font-bold mb-4 text-center">CONTACT US</h1>
        <div className=" bg-white p-4 rounded-lg shadow-">
        
          <div className="address ">
            <h2 className="mb-2 flex items-center flex-col justify-center">
              <a 
               className="flex items-center gap-x-2 hover:text-blue-500 text-gray-600 leading-normal text-lg"
                href="https://www.google.com/maps/place/University+Institute+of+Technology+RGPV/@23.3101737,77.3594687,17z/data=!4m6!3m5!1s0x397c663a2f02fc89:0x12a6b478bbd192f1!8m2!3d23.3101737!4d77.3616574!16s%2Fg%2F112yfdnfk?entry=ttu"
                target="blank"
              >
                <IoLocationSharp /> Our Address
              </a>
            </h2>
            <p className="text-gray-500 mb-4">
              University Institute of Technology, RGPV Bhopal <br />
              Airport Bypass Road, Gandhi Nagar,
              <br />
              Bhopal - 462 036 (M.P.) India
            </p>
          </div>
          <div className="h-0.5 bg-gray-200 rounded-full w-10/12 mx-auto" />
          <div className="link flex-div">
            <div className="email my-4">
              <h2 className="mb-2 flex items-center flex-col justify-center">
                <a 
                className="flex items-center gap-x-2 hover:text-blue-500 text-gray-600 leading-normal text-lg"
                href="mailto:uit_director@rgtu.net" target="blank">
                  <IoMail />
                  Email{" "}
                </a>
              </h2>
              <p  className="text-gray-500 mb-4">uit_director@rgtu.net</p>
            </div>
            <div className="h-0.5 bg-gray-200 rounded-full w-10/12 mx-auto" />
            <div className="phone my-4">
              <h2 className="mb-2 flex items-center flex-col justify-center">
                <a 
                className="flex items-center gap-x-2 hover:text-blue-500 text-gray-600 leading-normal text-lg"
                href="tel:+91-(0755)-2678812" target="blank">
                  <IoCall />
                  Phone{" "}
                </a>
              </h2>
              <p  className="text-gray-500 mb-4">+91-(0755)-2678812</p>
            </div>
          </div>
        </div>

    
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;


// import React from "react";
// import { IoCall, IoMail, IoLocationSharp } from "react-icons/io5";
// import Footer from "../../component/Footer/Footer.jsx";

// function Contact() {
//   return (
//     <>
//       <div className="container mx-auto px-6 py-12">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h1>

//         {/* Contact Form */}
//         <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-4">Send Us a Message</h2>
//           <form className="space-y-4">
//             <div>
//               <label className="block text-gray-600 font-medium mb-1">Your Email <span className="text-red-500">*</span></label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 font-medium mb-1">Message <span className="text-red-500">*</span></label>
//               <textarea
//                 rows="5"
//                 placeholder="Write your message here..."
//                 className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none resize-none"
//                 required
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-gray-600 text-white font-semibold py-2 rounded-lg hover:bg-gray-700 transition duration-300"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Contact Details */}
//         <div className="mt-12 text-center">
//           <h2 className="text-2xl font-semibold text-gray-700 mb-4">Our Contact Details</h2>
//           <div className="flex flex-col md:flex-row items-center justify-center gap-8 bg-gray-100 p-6 rounded-lg shadow-md">
//             {/* Address */}
//             <div className="text-gray-700 text-lg">
//               <a
//                 href="https://www.google.com/maps/place/University+Institute+of+Technology+RGPV/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 hover:text-blue-500 transition duration-300"
//               >
//                 <IoLocationSharp className="text-2xl text-blue-600" />
//                 <span>University Institute of Technology, RGPV, Bhopal, India</span>
//               </a>
//             </div>

//             {/* Email */}
//             <div className="text-gray-700 text-lg">
//               <a
//                 href="mailto:uit_director@rgtu.net"
//                 className="flex items-center gap-2 hover:text-blue-500 transition duration-300"
//               >
//                 <IoMail className="text-2xl text-blue-600" />
//                 <span>uit_director@rgtu.net</span>
//               </a>
//             </div>

//             {/* Phone */}
//             <div className="text-gray-700 text-lg">
//               <a
//                 href="tel:+91-(0755)-2678812"
//                 className="flex items-center gap-2 hover:text-blue-500 transition duration-300"
//               >
//                 <IoCall className="text-2xl text-blue-600" />
//                 <span>+91-(0755)-2678812</span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

// export default Contact;

