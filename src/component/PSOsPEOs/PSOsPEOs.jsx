import React from "react";

const PSOsPEOs = () => {
  return (
    <section className="max-w-7xl mx-auto my-10 p-6 bg-white shadow-lg rounded-xl">
      {/* <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Program Specific Outcomes (PSOs) & Program Educational Objectives (PEOs)
      </h2> */}

      {/* PSOs Section */}
      {/* <div className="mb-8">
        <h3 className="text-2xl font-semibold text-gray-800 border-b-4 border-blue-500 pb-2 mb-4">
          Program Specific Outcomes (PSOs)
        </h3>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-md shadow-sm">
            <strong className="text-blue-700">PSO1 - Professional Skills:</strong>{" "}
            The ability to understand, analyze, and develop computer programs in areas such as 
            algorithms, system software, multimedia, web design, network security, IoT, and networking.
          </li>
          <li className="bg-white p-4 rounded-md shadow-sm">
            <strong className="text-blue-700">PSO2 - Problem-Solving Skills:</strong>{" "}
            Applying standard practices and strategies in software project development 
            using open-ended programming environments to deliver high-quality products.
          </li>
          <li className="bg-white p-4 rounded-md shadow-sm">
            <strong className="text-blue-700">PSO3 - Career & Entrepreneurship:</strong>{" "}
            Employing modern computer languages and platforms to create innovative career 
            paths, become entrepreneurs, and pursue higher studies.
          </li>
        </ul>
      </div> */}

      <div className="mb-12">
        <h3 className="text-3xl font-semibold text-blue-700 text-center border-b-4 border-blue-500 inline-block pb-2">
          Program Specific Outcomes (PSOs)
        </h3>
        <ul className="mt-6 space-y-4">
          <li className="bg-white/25 p-4 rounded-md shadow-md">
            <strong className="text-blue-700">PSO1 - Professional Skills:</strong> 
            Proficiency in designing, developing, and implementing solutions in areas such as algorithms, 
            system software, web development, IoT, and cybersecurity.
          </li>
          <li className="bg-white/25 p-4 rounded-md shadow-md">
            <strong className="text-blue-700">PSO2 - Problem-Solving Abilities:</strong> 
            Application of industry-standard practices and innovative methodologies for software development.
          </li>
          <li className="bg-white/25 p-4 rounded-md shadow-md">
            <strong className="text-blue-700">PSO3 - Career and Entrepreneurship:</strong> 
            Leveraging modern tools and technologies to build innovative solutions, creating entrepreneurial opportunities, and pursuing higher education.
          </li>
        </ul>
      </div>



      {/* PEOs Section */}
      {/* <div>
        <h3 className="text-2xl font-semibold text-gray-800 border-b-4 border-blue-500 pb-2 mb-4">
          Program Educational Objectives (PEOs)
        </h3>
        <ul className="space-y-4">
          <li className="bg-green-50 p-4 rounded-md shadow-sm">
            <strong className="text-green-700">PEO1:</strong>{" "}
            To attain professional competency in the fast-growing area of Computer Science & Engineering.
          </li>
          <li className="bg-green-50 p-4 rounded-md shadow-sm">
            <strong className="text-green-700">PEO2:</strong>{" "}
            To apply knowledge of basic sciences and core engineering to pursue higher education, research, 
            and work in competitive multidisciplinary environments.
          </li>
          <li className="bg-green-50 p-4 rounded-md shadow-sm">
            <strong className="text-green-700">PEO3:</strong>{" "}
            To flourish as socially committed Computer Science graduates with cutting-edge domain knowledge, 
            entrepreneurial skills, research mindset, leadership qualities, and high ethical values.
          </li>
        </ul>
      </div> */}

      <div>
        <h3 className="text-3xl font-semibold text-blue-700 text-center border-b-4 border-blue-500 inline-block pb-2">
          Program Educational Objectives (PEOs)
        </h3>
        <ul className="mt-6 space-y-4">
          <li className="bg-green-50 p-4 rounded-md shadow-md">
            <strong className="text-green-700">PEO1:</strong> 
            To attain professional competency and stay ahead in the ever-evolving field of Computer Science & Engineering.
          </li>
          <li className="bg-green-50 p-4 rounded-md shadow-md">
            <strong className="text-green-700">PEO2:</strong> 
            To apply fundamental and advanced engineering concepts for innovation, research, and multidisciplinary collaboration.
          </li>
          <li className="bg-green-50 p-4 rounded-md shadow-md">
            <strong className="text-green-700">PEO3:</strong> 
            To develop as industry-ready professionals with strong analytical, leadership, and problem-solving abilities while upholding ethical values.
          </li>
        </ul>
      </div>

    </section>
  );
};

export default PSOsPEOs;
