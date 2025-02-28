import React from "react";

const VisionMission = () => {
  return (
    <section className="max-w-6xl mx-auto my-10 p-8 bg-white shadow-lg rounded-xl">
      
      {/* Vision Section */}
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-blue-700">Our Vision</h2>
        <div className=" w-20 h-1 bg-blue-500 mx-auto my-4"></div>
        <p className="mt-6 text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto">
          To nurture and enlighten the budding talents into socially committed & dexterous Computer Science & Engineering 
          professionals, possessing a robust foundation and adaptable attitude for rapid technological advancements in the 
          field along with sustainable ethical values, to meet global challenges.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-blue-700 text-center">Our Mission</h3>
        <div className="w-20 h-1 bg-blue-500 mx-auto my-4"></div>
        <ul className="mt-6 space-y-4 text-gray-700 text-lg">
          <li className="bg-orange-50 p-4 rounded-md shadow-md  border-orange-600">
            <strong className="text-blue-700">1.</strong> To persistently endeavor for the consistent development of students by providing them a robust foundation in knowledge.
          </li>
          <li className="bg-orange-50 p-4 rounded-md shadow-md  border-orange-600">
            <strong className="text-blue-700">2.</strong> To continuously strive for the overall development of students by educating them in cutting-edge technology.
          </li>
          <li className="bg-orange-50 p-4 rounded-md shadow-md  border-orange-600">
            <strong className="text-blue-700">3.</strong> To curate a conducive environment for exploring, analyzing, and applying knowledge to improve technical & interpersonal skills.
          </li>
          <li className="bg-orange-50 p-4 rounded-md shadow-md  border-orange-600">
            <strong className="text-blue-700">4.</strong> To inculcate ethics, environmental awareness, and societal commitment for a sustainable global society.
          </li>
          <li className="bg-orange-50 p-4 rounded-md shadow-md  border-orange-600">
            <strong className="text-blue-700">5.</strong> To provide an exposure of innovative research culture in the demanding arena of Computer Science & Engineering.
          </li>
        </ul>
      </div>

    </section>
  );
};

export default VisionMission;
