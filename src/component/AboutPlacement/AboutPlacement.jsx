// import React from "react";
// // import "./AboutPlacement.css";

// function AboutPlacement() {
//   return (
//     <>
//       <div className="container mx-auto p-4">
//         <h1 className="text-xl font-bold text-center mb-4 ">ABOUT PLACEMENT</h1>

//         <div className="h-0.5 bg-gray-400 rounded-full w-10/12 mx-auto" />

        
//         <div className="text-gray-600 mt-4 leading-relaxed ">
//           <p>
//             The Training & Placement, UIT- RGPV plays a crucial role in locating
//             job opportunities for Under Graduates and Post Graduates students
//             passing out from the UIT-RGPV by keeping in touch with reputed firms
//             and industrial establishments. Basically, it acts as the interface
//             between various companies seeking talented young graduates and
//             postgraduates in various disciplines. Training & Placement Cell,
//             UIT-RGPV also intends to provide students with a platform for using
//             their potential to gain valuable experience by working in the
//             industry, companies, or various emerging startups.
//           </p>
//           <h2 className="mt-4 text-gray-700 text-xl font-semibold text-center">Why @ UIT</h2>
//           <div className="h-0.5 mb-4 mt-2 bg-gray-400 rounded-full w-3/12 mx-auto" />
          
//           <p>
//             UIT-RGPV, Bhopal is a community of teachers, staff & students, who
//             are dedicated to the achievement of a shared vision of excellence.
//             The community believes in renewing and transferring knowledge &
//             skills and the development of positive & purposeful attitudes and
//             values. Being in the campus of the State Technological University,
//             the UIT-RGPV is in a position to offer excellent and high quality
//             academic services to the students. UIT, RGPV is continuously working
//             for the betterment of students and improves itself regularly by
//             keeping in touch with its passed out students and implementing their
//             productive ideas in an innovative way so as to inspire students.
//             Moreover, the Institute has a very planned and scheduled execution
//             to everything. Every move is planned and studied in detail before
//             it's execution and every move contribute towards the betterment of
//             students. Besides this, UIT, RGPV covers subjects from all fields
//             with highly knowledgeable faculty who master the subject. The
//             teaching strategy of professors follows the structured teachings
//             with proper timeline and imparting in-depth knowledge of the field
//             in offline and online mode included. UIT, RGPV believes in
//             excellence and thus provides a path to its students to achieve
//             excellence. UIT, RGPV has some eminent clubs and societies that help
//             students to interact, grow and seek guidance from the seniors and
//             alumni who of the common interest can guide better and provide
//             mentorship. UIT, RGPV ensures the infrastructure you dream of.
//             Everything in the campus is arranged according to students need from
//             well-furnished classrooms and labs to properly maintained and
//             hygienic washrooms and water coolers. The Institute is also
//             facilitated with girls and boy’s hostels separately maintained and
//             looked after by the authorities. The best thing UIT, RGPV offer are
//             good placements from the renowned companies that visit our campus.
//             The Institute has built strong connections with some huge companies
//             which in turn benefits the students connected with the Institute in
//             the form of placements you desire.
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AboutPlacement;

import React from "react";

function AboutPlacement() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">About Placement</h1>
        <div className="h-1 bg-[#184252]/[0.9] rounded-full w-16 mx-auto mb-6"></div>

        {/* Main Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8 max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed">
            The <span className="font-semibold text-[#184252]/[0.9]">Training & Placement</span> cell at UIT-RGPV plays a crucial role in connecting students with job opportunities from top firms and emerging startups. It acts as a bridge between companies looking for young talent and students seeking career-defining roles. The cell provides students a platform to gain valuable industry exposure and hands-on experience.
          </p>

          {/* Divider */}
          <div className="h-0.5 bg-gray-300 rounded-full w-3/4 mx-auto my-6"></div>

          {/* Why @ UIT Section */}
          <h2 className="text-2xl font-semibold text-center text-gray-800">Why @ UIT</h2>
          <div className="h-1 bg-[#184252]/[0.9] rounded-full w-16 mx-auto mt-2 mb-6"></div>

          <p className="text-gray-700 leading-relaxed">
            UIT-RGPV, Bhopal is a thriving community of teachers, students, and alumni dedicated to **academic excellence and professional success**. Being part of the State Technological University, UIT-RGPV offers **high-quality education** with structured learning, mentorship programs, and **robust placement support**.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            The Institute has built strong industry connections, ensuring excellent placement opportunities with renowned companies. With **modern infrastructure, well-furnished classrooms, advanced labs, and well-maintained hostels**, UIT-RGPV provides an environment where students can focus on skill-building and career growth.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPlacement;

