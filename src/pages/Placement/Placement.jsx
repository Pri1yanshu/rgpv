import React from "react";
// import "./Placement.css";
import AboutPlacement from "../../component/AboutPlacement/AboutPlacement.jsx";
import RecruiterPlacement from "../../component/RecruiterPlacement/Recruiter.jsx";
import Footer from "../../component/Footer/Footer.jsx";
import CompanyTable from "../../component/CompanySelectionData/CompanySelectionData.jsx";
function Placement() {
  return (
    <>
      <div className="main-placements">
        <AboutPlacement />
        <hr className="w-10/12 mx-auto text-gray-400 "/>

        {/* <RecruiterPlacement /> */}
        <CompanyTable/>
        <hr className="w-10/12 mx-auto text-gray-400 "/>
        <div className="container mx-auto p-4">
          <h1 className="text-xl font-bold mb-4 text-center">Mentor List of Training and Placement Cell</h1>
        <div className="table-responsive overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-lg ">
            <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <td className="py-3 px-6 text-left">S.No.</td>
              <td className="py-3 px-6 text-left">Name</td>
              <td className="py-3 px-6 text-left"> Department</td>
            </thead>
            <tbody className="text-gray-600 ">
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">1</td>
                <td className="py-3 px-6 text-left">Dr Shikha Agrawal</td>
                <td className="py-3 px-6 text-left">
                  Director , Training & Placement Associate Professor, CSE
                  Department
                </td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">2</td>
                <td className="py-3 px-6 text-left">Prof. Rajeev Pandey</td>
                <td className="py-3 px-6 text-left"> Associate Professor , CSE Department</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left">3</td>
                <td className="py-3 px-6 text-left">Mr Santosh K Yadav</td>
                <td className="py-3 px-6 text-left">Supporting Staff, Training & Placement</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Placement;
