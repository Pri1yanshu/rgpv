import React, { act, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { CgCloseO } from "react-icons/cg";
import { useRef } from "react";


function Nav() {
  let [toggle, setToggle] = useState(true);
  let [show, setShow] = useState("hide-nav");
  let [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);




  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
        setToggle(true);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
    <div className="sticky top-0 z-50">
      <div className="flex justify-between bg-[#184852] text-white p-4 relative  ">
        

        
        <div className="top-0 right-0 lg:hidden">
          {toggle ? (
            <CgMenuRightAlt
              style={{ fontSize: "2em" }}
              onClick={() => {
                setToggle(!toggle);
                // setShow("nav");
                setIsOpen(!isOpen);
              }}
            />
          ) : (
            <CgCloseO
              style={{ fontSize: "2em" }}
              onClick={() => {
                setToggle(!toggle);
                // setShow("hide-nav");
                setIsOpen(!isOpen);
              }}
            />
          )}
        </div>
        <div 
        ref={menuRef}
        onClick={(e) => {
          setToggle(true);
          setIsOpen(false);
        }}
        className={`w-full flex flex-col gap-y-2 items-center justify-center  flex-grow lg:flex lg:items-center lg:justify-around  lg:flex-row
      lg:w-auto ${isOpen ? "block" : "hidden"}`}>
          <NavLink className={({ isActive }) =>
            isActive || location.pathname === "/"
              ? " text-lg px-3 py-2 rounded-md transition-all bg-white text-[#184852] font-bold"
              : "text-lg px-3 py-2 rounded-md transition-all hover:bg-white/20"
          }
          exact to="/">
            Home
          </NavLink>
          <NavLink className={({ isActive }) =>
            isActive
              ? " text-lg px-3 py-2 rounded-md transition-all bg-white text-[#184852] font-bold"
              : "text-lg px-3 py-2 rounded-md transition-all hover:bg-white/20"
          }
          exact to="/about">
            {" "}
            About Us
          </NavLink>
          <NavLink 
          className={({ isActive }) =>
            isActive 
              ? " text-lg px-3 py-2 rounded-md transition-all bg-white text-[#184852] font-bold"
              : "text-lg px-3 py-2 rounded-md transition-all hover:bg-white/20"
          }
          exact to="/Department">
            Department Profile{" "}
          </NavLink>
          <NavLink 
          className={({ isActive }) =>
            isActive
              ? " text-lg px-3 py-2 rounded-md transition-all bg-white text-[#184852] font-bold"
              : "text-lg px-3 py-2 rounded-md transition-all hover:bg-white/20"
          }
          exact to="/student">
            Student
          </NavLink>
          <NavLink 
          className={({ isActive }) =>
            isActive 
              ? " text-lg px-3 py-2 rounded-md transition-all bg-white text-[#184852] font-bold"
              : "text-lg px-3 py-2 rounded-md transition-all hover:bg-white/20"
          }
          exact to="/faculty">
            Faculty
          </NavLink>
          <NavLink 
          className={({ isActive }) =>
            isActive
              ? " text-lg px-3 py-2 rounded-md transition-all bg-white text-[#184852] font-bold"
              : "text-lg px-3 py-2 rounded-md transition-all hover:bg-white/20"
          }
          exact to="/placement">
            Placement
          </NavLink>
          <NavLink 
          className={({ isActive }) =>
            isActive 
              ? " text-lg px-3 py-2 rounded-md transition-all bg-white text-[#184852] font-bold"
              : "text-lg px-3 py-2 rounded-md transition-all hover:bg-white/20"
          }
          exact to="/contact">
            Contact Us
          </NavLink>
        </div>
      </div>
      </div>
    </>
//     <>
//  <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`} >
//         <div className="text-sm lg:flex-grow">
//           <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
//             First Link
//           </a>
//           <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
//             Second Link
//           </a>
//           <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
//             Third Link
//           </a>
//           <a href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
//             Fourth Link
//           </a>
//         </div>
//         <div>
//           <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
//             Click Me
//           </button>
//         </div>
// </div> 

//     </>
  );
}

export default Nav;



//MODERN NAVBAR





// import React, { useState, useEffect, useRef } from "react";
// import { NavLink } from "react-router-dom";
// import { CgMenuRightAlt, CgClose } from "react-icons/cg";

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef(null);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   return (
//     <nav className="bg-[#184852] text-white shadow-md sticky top-0  w-[76rem] z-50">
//       <div className="container mx-auto flex justify-between flex-shrink items-center px-6 py-4">
//         {/* 🔹 Logo */}
//         <NavLink to="/" className="text-2xl font-bold tracking-wide">
//           UIT-RGPV
//         </NavLink>

//         {/* 🔹 Desktop Nav */}
//         <div className="gap-x-6 hidden lg:flex">
//           {[
//             { name: "Home", path: "/" },
//             { name: "About Us", path: "/about" },
//             { name: "Department", path: "/Department" },
//             { name: "Student", path: "/student" },
//             { name: "Faculty", path: "/faculty" },
//             { name: "Placement", path: "/placement" },
//             { name: "Contact Us", path: "/contact" },
//           ].map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) =>
//                 `text-lg px-3 py-2 rounded-md transition-all ${
//                   isActive ? "bg-white text-[#184852] font-bold" : "hover:bg-white/20"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </div>

//         {/* 🔹 Mobile Menu Button */}
//         <button
//           className="lg:hidden text-3xl"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? <CgClose /> : <CgMenuRightAlt />}
//         </button>
//       </div>

//       {/* 🔹 Mobile Menu */}
//       <div
//         ref={menuRef}
//         className={`lg:hidden fixed top-16 right-0 w-64 bg-[#184852] text-white shadow-lg transition-transform transform ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         }`}
//       >
//         <div className="flex flex-col p-6 space-y-4">
//           {[
//             { name: "Home", path: "/" },
//             { name: "About Us", path: "/about" },
//             { name: "Department", path: "/Department" },
//             { name: "Student", path: "/student" },
//             { name: "Faculty", path: "/faculty" },
//             { name: "Placement", path: "/placement" },
//             { name: "Contact Us", path: "/contact" },
//           ].map((item) => (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) =>
//                 `block py-2 px-4 rounded-md transition-all ${
//                   isActive ? "bg-white text-[#184852] font-bold" : "hover:bg-white/20"
//                 }`
//               }
//               onClick={() => setIsOpen(false)}
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Nav;
