import React from "react";

const Head = () => {
  return (
    <header className="bg-[#184852] text-white py-2 shadow-md relative">
      {/* 🔹 Top Orange Strip */}
      <div className="bg-orange-500 lg:h-[4px] h-[2px] w-full"></div>

      {/* 🔹 Logo & Info Section */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center py-4 px-6 text-center lg:text-left">
        
        {/* 🔹 Logo */}
        <div className="flex-shrink-0">
          <img
            className="h-25 w-25 rounded-md shadow-lg"
            src="https://www.uitrgpv.ac.in/imagesn/rgpv-logo.jpg"
            alt="UIT RGPV Logo"
          />
        </div>

        {/* 🔹 University Details */}
        <div className="ml-6">
          <h1 className="text-3xl font-bold tracking-wide text-center">
           Department of Computer Science &  Engineering 
          </h1>
          <h3 className="text-3xl font-bold tracking-wide text-center">
            Engineering University Institute of Technology 
          </h3>
          <h4 className="text-center text-gray-200 mt-1">
            Rajiv Gandhi Proudyogiki Vishwavidayalaya ,Bhopal
          </h4>
          <h4 className="text-sm font-medium mt-1 text-gray-400 text-center" >
            ( State Technological University of Madhya Pradesh Bhopal (M.P.) )
          </h4>
        </div>
      </div>
      
    </header>
  );
};

export default Head;
