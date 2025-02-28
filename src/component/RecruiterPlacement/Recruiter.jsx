import React from "react";
// import "./Recruiter.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cognizant from "../../assets/cognizant.jpeg"
import tcs from "../../assets/TCS.jpeg"
import infosys from "../../assets/infosys.jpeg"
import tejas from "../../assets/tejas.jpeg"
import Rapidops from "../../assets/Rapidops.jpeg"


function RecruiterPlacement() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-xl font-bold mb-4 text-center">MAJOR RECRUITERS</h1>
        <div className="bg-white border my-auto  border-gray-300 shadow-lg">
          <Carousel
            className=""
            responsive={{
              desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
              },
            }}
            autoPlay={true}
            infinite={true}
            autoPlaySpeed={1500}
            showDots={false}
            arrows={false}
            draggable={true}
            containerClass="flex justify-center items-center"
          >
         
            <img
              className="h-80 w-80 my-auto"
              src={cognizant}
              alt="logo"
            />
            <img
            className="h-80 w-80 my-auto"
              src={tcs}
            />
            <img
            className="h-80 w-80"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/IBM_logo_in.jpg/640px-IBM_logo_in.jpg"
              alt="logo"
            />
            <img
            className="h-80 w-80"
              src={tejas}
              alt="logo"
            />
            <img
            className="h-80 w-80"
              src={infosys}
              alt="logo"
            />
            <img
            className="h-80 w-80"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Bajaj_Finserv_Logo.svg/640px-Bajaj_Finserv_Logo.svg.png"
              alt="logo"
            />
            <img
            className="h-80 w-80"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Hindustan_Computers_logo.svg/640px-Hindustan_Computers_logo.svg.png"
              alt="logo"
            />
            <img 
            className="h-80 w-80"
              src={Rapidops}
              alt="logo"
            />
            <img
            className="h-80 w-80"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Deloitte-logo-black.svg/640px-Deloitte-logo-black.svg.png"
              alt="logo"
            />
            <img
            className="h-80 w-80"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Tech_Mahindra_New_Logo.svg/640px-Tech_Mahindra_New_Logo.svg.png"
              alt="logo"
            />
            <img
            className="h-80 w-80"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Capgemini_201x_logo.svg/640px-Capgemini_201x_logo.svg.png"
              alt="logo"
            />
          </Carousel>
        </div>
      </div>
    </>
  );
}
export default RecruiterPlacement;
