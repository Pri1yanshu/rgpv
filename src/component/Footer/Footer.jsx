import React from "react";
// import "./Footer.css";
import { IoCall } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { IoMdCalculator } from "react-icons/io";

function Footer() { 
  return (
    <>
      <div className="bg-[#184252] text-white p-4">
        <hr />
        <div className="">
          <h1 className="text-2xl font-medium py-2">Get in Touch With Us</h1>
          <div className="">
            <p className="flex items-center justify-center  my-2 gap-x-2">
              <IoMailSharp /> uit_director@rgtu.net
            </p>
            <p className="flex items-center justify-center my-2 gap-x-2">
              <IoCall /> +(91)-(755)-2678812
            </p>
            <p className="flex items-center justify-center my-2 gap-x-2">
              <IoMdCalculator /> +(91)-(755)-2678819
            </p>
            <p className="flex items-center justify-center  my-2 gap-x-2">
              <IoLocation /> Narsingharh By pass Road, Near Gandhi Nagar, Bhopal
              M.P
            </p>
          </div>
        </div>
        <hr />
        <div className="text-slate-400 font-mono text-center py-2">
          <p>© 2024 UIT-RGPV . All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
