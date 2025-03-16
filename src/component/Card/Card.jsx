import React from "react";


function Card({ heading, content, icon }) {
  return (
    <>
      <div className="border-2  border-orange-700 px-1.5  mx-2 h-[18em] flex flex-col justify-center items-center bg-white shadow-md rounded-md">
        <div className="text-orange-700">{icon}</div>
        <h3>{heading}</h3>
        <p>{content}</p>
      </div>
    </>
  );
} 
export default Card;



































