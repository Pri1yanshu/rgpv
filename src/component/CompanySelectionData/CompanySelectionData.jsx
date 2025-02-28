import React, { useState } from "react";

const companyDataByYear = {
  "2023": [
    { "s_no": 1, "name": "Infosys Hackwithinfy", "selected_students": 1 },
    { "s_no": 2, "name": "Bajaj Finserv Health", "selected_students": 14 },
    { "s_no": 3, "name": "Persistent Martian Internship", "selected_students": 21 },
    { "s_no": 4, "name": "Argusoft India Pvt. Ltd.", "selected_students": 7 },
    { "s_no": 5, "name": "TCS (Tata Consultancy Services)", "selected_students": 144 },
    { "s_no": 6, "name": "Ksolves India", "selected_students": 1 },
    { "s_no": 7, "name": "Global Quest Technologies", "selected_students": 20 },
    { "s_no": 8, "name": "OnGraph Ltd.", "selected_students": 3 },
    { "s_no": 9, "name": "Rapidops Pvt. Ltd.", "selected_students": 7 },
    { "s_no": 10, "name": "Kiya AI Ltd.", "selected_students": 2 },
    { "s_no": 11, "name": "Trianz Ltd.", "selected_students": 1 },
    { "s_no": 12, "name": "Mastek", "selected_students": 3 },
    { "s_no": 13, "name": "Dolat Capitals", "selected_students": 1 },
    { "s_no": 14, "name": "Capgemini", "selected_students": 54 },
    { "s_no": 15, "name": "IBM (Diversity)", "selected_students": 1 },
    { "s_no": 16, "name": "HSBC Technologies", "selected_students": 3 },
    { "s_no": 17, "name": "Zycus", "selected_students": 3 },
    { "s_no": 18, "name": "Opensense Lab", "selected_students": 14 },
    { "s_no": 19, "name": "Vodafone IDEA Ltd.", "selected_students": 18 },
    { "s_no": 20, "name": "TDP VISTA", "selected_students": 3 },
    { "s_no": 21, "name": "Cognizant", "selected_students": 77 },
    { "s_no": 22, "name": "Hexaware Technologies", "selected_students": 22 },
    { "s_no": 23, "name": "Persistent Main Drive", "selected_students": 1 },
    { "s_no": 24, "name": "Wonder Botz", "selected_students": 1 },
    { "s_no": 25, "name": "Dylog Supplies Ltd.", "selected_students": 5 },
    { "s_no": 26, "name": "Incture Technologies Ltd.", "selected_students": 5 },
    { "s_no": 27, "name": "Amazon", "selected_students": 1 },
    { "s_no": 28, "name": "MK Enterprises Ltd.", "selected_students": 1 },
    { "s_no": 29, "name": "HDB Financial Ltd.", "selected_students": 1 },
    { "s_no": 30, "name": "IBM NQT (Kodnack)", "selected_students": 3 },
    { "s_no": 31, "name": "Fiserv", "selected_students": 5 },
    { "s_no": 32, "name": "VE (Volvo Eicher)", "selected_students": 7 },
    { "s_no": 33, "name": "HCL Technologies", "selected_students": 19 },
    { "s_no": 34, "name": "Deloitte Pvt. Ltd.", "selected_students": 7 },
    { "s_no": 35, "name": "Schaeffler India Ltd.", "selected_students": 1 },
    { "s_no": 36, "name": "UpROAR Learning Ltd.", "selected_students": 2 },
    { "s_no": 37, "name": "Jubilant Food works", "selected_students": 3 },
    { "s_no": 38, "name": "SRS Infraway Pvt Ltd", "selected_students": 4 },
    { "s_no": 39, "name": "RTL Technologies", "selected_students": 7 },
    { "s_no": 40, "name": "Service Ninjas Pvt ltd", "selected_students": 2 },
    { "s_no": 41, "name": "Startologic Technologies", "selected_students": 1 },
    { "s_no": 42, "name": "Codequotient Pvt. Ltd.", "selected_students": 3 },
    { "s_no": 43, "name": "Re Sustainability Pvt. Ltd.", "selected_students": 1 },
    { "s_no": 44, "name": "Intellipaat Software Solutions", "selected_students": 9 },
    { "s_no": 45, "name": "Maventic Innovation Solutions Ltd.", "selected_students": 4 },
    { "s_no": 46, "name": "PlantSpark", "selected_students": 3 },
    { "s_no": 47, "name": "ETA Engineering Ltd.", "selected_students": 1 },
    { "s_no": 48, "name": "Assistant Professor, Alamari Ratnamala Institute, Thane", "selected_students": 1 },
    { "s_no": 49, "name": "Maso Automotive Pvt. Ltd.", "selected_students": 1 },
    { "s_no": 50, "name": "Royal Infraconstruction Ltd", "selected_students": 3 },
    { "s_no": 51, "name": "BYJU'S Ltd.", "selected_students": 8 }
  ],
  "2024": [
    { "s_no": 1, "name": "Persistent (Martian)", "selected_students": 4 },
    { "s_no": 2, "name": "EQ Technologies Ltd.", "selected_students": 1 },
    { "s_no": 3, "name": "Tejas Network Ltd.", "selected_students": 1 },
    { "s_no": 4, "name": "Zycus Ltd.", "selected_students": 1 },
    { "s_no": 5, "name": "Appointy Ltd.", "selected_students": 11 },
    { "s_no": 6, "name": "CRM Recruit", "selected_students": 1 },
    { "s_no": 7, "name": "Hike Education Ltd.", "selected_students": 18 },
    { "s_no": 8, "name": "SABRES Group Ltd.", "selected_students": 10 },
    { "s_no": 9, "name": "Rapidops", "selected_students": 9 },
    { "s_no": 10, "name": "Jaro Education Ltd.", "selected_students": 4 },
    { "s_no": 11, "name": "Google Inc.", "selected_students": 1 },
    { "s_no": 12, "name": "PlantSpark Ltd.", "selected_students": 6 },
    { "s_no": 13, "name": "QualityKiosk Technologies Pvt. Ltd", "selected_students": 6 },
    { "s_no": 14, "name": "Schaeffler India Ltd.", "selected_students": 1 },
    { "s_no": 15, "name": "Sobha Developers Ltd.", "selected_students": 2 },
    { "s_no": 16, "name": "TDPVista", "selected_students": 10 },
    { "s_no": 17, "name": "Greenko Group Ltd.", "selected_students": 2 },
    { "s_no": 18, "name": "ARTECH INFOSYSTEMS", "selected_students": 2 },
    { "s_no": 19, "name": "Tata Consultancy Services (TCS)", "selected_students": 100 },
    { "s_no": 20, "name": "Volvo Eicher", "selected_students": 6 },
    { "s_no": 21, "name": "Navitasys India Private Limited", "selected_students": 4 },
    { "s_no": 22, "name": "Rane NSK Steering Systems Pvt Ltd.", "selected_students": 17 },
    { "s_no": 23, "name": "Megha Engineering Ltd.", "selected_students": 2 },
    { "s_no": 24, "name": "Inox Air Products Ltd.", "selected_students": 10 },
    { "s_no": 25, "name": "Tudip Technologies Ltd.", "selected_students": 4 },
    { "s_no": 26, "name": "Hexaware Technologies Ltd.", "selected_students": 6 },
    { "s_no": 27, "name": "Pieinfocomm Ltd.", "selected_students": 8 },
    { "s_no": 28, "name": "Adixoo Brand Ltd.", "selected_students": 2 },
    { "s_no": 29, "name": "Yhills Ltd.", "selected_students": 6 },
    { "s_no": 30, "name": "Capgemini Ltd.", "selected_students": 17 },
    { "s_no": 31, "name": "Bugsmirror Research Pvt. Ltd", "selected_students": 1 },
    { "s_no": 32, "name": "Volvo Eicher Ltd. (For B.Tech)", "selected_students": 9 },
    { "s_no": 33, "name": "Synnova Gears & Transmission Pvt. Ltd.", "selected_students": 6 },
    { "s_no": 34, "name": "Triosoft Technologies Ltd.", "selected_students": 2 },
    { "s_no": 35, "name": "Cognizant.", "selected_students": 15 },
    { "s_no": 36, "name": "Corizo Edutech Ltd.", "selected_students": 4 },
    { "s_no": 37, "name": "Edustation Ltd.", "selected_students": 31 },
    { "s_no": 38, "name": "Bajaj Finserv Health Ltd", "selected_students": 1 },
    { "s_no": 39, "name": "GoMaxoo Digital Ltd.", "selected_students": 1 },
    { "s_no": 40, "name": "Apex Labs Ltd.", "selected_students": 1 },
    { "s_no": 41, "name": "Kodnest", "selected_students": 1 }
  ],
  "2022": [
    { "s_no": 1, "name": "Infosys Hackwithinfy", "selected_students": 1 },
    { "s_no": 2, "name": "Bajaj Finserv Health", "selected_students": 14 },
    { "s_no": 3, "name": "Persistent Martian Internship", "selected_students": 21 },
    { "s_no": 4, "name": "Argusoft India Pvt. Ltd.", "selected_students": 7 },
    { "s_no": 5, "name": "TCS (Tata Consultancy Services)", "selected_students": 144 },
    { "s_no": 6, "name": "Ksolves India", "selected_students": 1 },
    { "s_no": 7, "name": "Global Quest Technologies", "selected_students": 20 },
    { "s_no": 8, "name": "OnGraph Ltd.", "selected_students": 3 },
    { "s_no": 9, "name": "Rapidops Pvt. Ltd.", "selected_students": 7 },
    { "s_no": 10, "name": "Kiya AI Ltd.", "selected_students": 2 },
    { "s_no": 11, "name": "Trianz Ltd.", "selected_students": 1 },
    { "s_no": 12, "name": "Mastek", "selected_students": 3 },
    { "s_no": 13, "name": "Dolat Capitals", "selected_students": 1 },
    { "s_no": 14, "name": "Capgemini", "selected_students": 54 },
    { "s_no": 15, "name": "IBM (Diversity)", "selected_students": 1 },
    { "s_no": 16, "name": "HSBC Technologies", "selected_students": 3 },
    { "s_no": 17, "name": "Zycus", "selected_students": 3 },
    { "s_no": 18, "name": "Opensense Lab", "selected_students": 14 },
    { "s_no": 19, "name": "Vodafone IDEA Ltd.", "selected_students": 18 },
    { "s_no": 20, "name": "TDP VISTA", "selected_students": 3 },
    { "s_no": 21, "name": "Cognizant", "selected_students": 77 },
    { "s_no": 22, "name": "Hexaware Technologies", "selected_students": 22 },
    { "s_no": 23, "name": "Persistent Main Drive", "selected_students": 1 },
    { "s_no": 24, "name": "Wonder Botz", "selected_students": 1 },
    { "s_no": 25, "name": "Dylog Supplies Ltd.", "selected_students": 5 },
    { "s_no": 26, "name": "Incture Technologies Ltd.", "selected_students": 5 },
    { "s_no": 27, "name": "Amazon", "selected_students": 1 },
    { "s_no": 28, "name": "MK Enterprises Ltd.", "selected_students": 1 },
    { "s_no": 29, "name": "HDB Financial Ltd.", "selected_students": 1 },
    { "s_no": 30, "name": "IBM NQT (Kodnack)", "selected_students": 3 },
    { "s_no": 31, "name": "Fiserv", "selected_students": 5 },
    { "s_no": 32, "name": "VE (Volvo Eicher)", "selected_students": 7 },
    { "s_no": 33, "name": "HCL Technologies", "selected_students": 19 },
    { "s_no": 34, "name": "Deloitte Pvt. Ltd.", "selected_students": 7 },
    { "s_no": 35, "name": "Schaeffler India Ltd.", "selected_students": 1 },
    { "s_no": 36, "name": "UpROAR Learning Ltd.", "selected_students": 2 },
    { "s_no": 37, "name": "Jubilant Food works", "selected_students": 3 },
    { "s_no": 38, "name": "SRS Infraway Pvt Ltd", "selected_students": 4 },
    { "s_no": 39, "name": "RTL Technologies", "selected_students": 7 },
    { "s_no": 40, "name": "Service Ninjas Pvt ltd", "selected_students": 2 }
  ],
  "2021": [
    { "s_no": 1, "name": "Infosys Hackwithinfy", "selected_students": 5 },
    { "s_no": 2, "name": "TCS Codevita", "selected_students": 7 },
    { "s_no": 3, "name": "HCL Technologies", "selected_students": 3 },
    { "s_no": 4, "name": "Persistent Systems", "selected_students": 29 },
    { "s_no": 5, "name": "BYJUS", "selected_students": 6 },
    { "s_no": 6, "name": "Hexaware", "selected_students": 11 },
    { "s_no": 7, "name": "TCS (DIGITAL)", "selected_students": 24 },
    { "s_no": 8, "name": "Zycus", "selected_students": 2 },
    { "s_no": 9, "name": "Pieinfocomm Pvt. Ltd. (Pool Campus)", "selected_students": 10 },
    { "s_no": 10, "name": "Pieinfocomm Pvt. Ltd.", "selected_students": 4 },
    { "s_no": 11, "name": "TCS Ninja", "selected_students": 86 },
    { "s_no": 12, "name": "Whitehat Jr.", "selected_students": 7 },
    { "s_no": 13, "name": "ISC Software", "selected_students": 3 },
    { "s_no": 14, "name": "Jaro Education", "selected_students": 5 },
    { "s_no": 15, "name": "Impetus", "selected_students": 8 },
    { "s_no": 16, "name": "XL Dynamics India Pvt. Ltd", "selected_students": 1 },
    { "s_no": 17, "name": "JAVA R&D", "selected_students": 1 },
    { "s_no": 18, "name": "Reliance JIO", "selected_students": 0 },
    { "s_no": 19, "name": "Wipro Elite Talent", "selected_students": 10 },
    { "s_no": 20, "name": "HSBC Technology", "selected_students": 1 },
    { "s_no": 21, "name": "Infosys", "selected_students": 31 },
    { "s_no": 22, "name": "Nagarro", "selected_students": 2 },
    { "s_no": 23, "name": "Nagarro", "selected_students": 2 },
    { "s_no": 24, "name": "Tudip Technologies", "selected_students": 7 },
    { "s_no": 25, "name": "V2Solutions", "selected_students": 8 },
    { "s_no": 26, "name": "OT Solutions", "selected_students": 3 },
    { "s_no": 27, "name": "Hanu Software", "selected_students": 1 },
    { "s_no": 28, "name": "MagicEdTech", "selected_students": 2 },
    { "s_no": 29, "name": "Wileymthree", "selected_students": 4 },
    { "s_no": 30, "name": "Accenture", "selected_students": 8 },
    { "s_no": 31, "name": "AMD PVT.LTD.", "selected_students": 1 },
    { "s_no": 32, "name": "Blink Room Hospitality", "selected_students": 1 },
    { "s_no": 33, "name": "DXC Technology", "selected_students": 2 },
    { "s_no": 34, "name": "Innoeye Technologies", "selected_students": 1 },
    { "s_no": 35, "name": "Runnel.ai", "selected_students": 1 },
    { "s_no": 36, "name": "Stockarea", "selected_students": 1 },
    { "s_no": 37, "name": "EBIW", "selected_students": 1 },
    { "s_no": 38, "name": "Appointy", "selected_students": 3 },
    { "s_no": 39, "name": "IBM (GBS)", "selected_students": 1 },
    { "s_no": 40, "name": "Edupolis Technologies", "selected_students": 1 },
    { "s_no": 41, "name": "Yardi Software", "selected_students": 1 },
    { "s_no": 42, "name": "Cavisson Systems", "selected_students": 1 },
    { "s_no": 43, "name": "Artech Infosystem", "selected_students": 2 },
    { "s_no": 44, "name": "KPMG Global Services", "selected_students": 1 },
    { "s_no": 45, "name": "Quess Corp Ltd.", "selected_students": 1 },
    { "s_no": 46, "name": "CISCO", "selected_students": 1 },
    { "s_no": 47, "name": "Intellect Design Through Kodnest", "selected_students": 1 }
  ],
  "2020": [
    { "s_no": 1, "name": "TCS Digital", "selected_students": 6 },
    { "s_no": 2, "name": "Persistent", "selected_students": 12 },
    { "s_no": 3, "name": "InfoObject", "selected_students": 3 },
    { "s_no": 4, "name": "Zycus", "selected_students": 2 },
    { "s_no": 5, "name": "TCS (NINJA HIRING)", "selected_students": 93 },
    { "s_no": 6, "name": "Jaro Education", "selected_students": 4 },
    { "s_no": 7, "name": "Zensar", "selected_students": 4 },
    { "s_no": 8, "name": "Infosys Infy TQ & Hackwithinfy", "selected_students": 5 },
    { "s_no": 9, "name": "Yash Technologies", "selected_students": 16 },
    { "s_no": 10, "name": "Rapidops", "selected_students": 2 },
    { "s_no": 11, "name": "Tudip Technologies", "selected_students": 4 },
    { "s_no": 12, "name": "Cognizant", "selected_students": 45 },
    { "s_no": 13, "name": "EY GDS", "selected_students": 2 },
    { "s_no": 14, "name": "IBM India", "selected_students": 5 },
    { "s_no": 15, "name": "Gboxz", "selected_students": 0 },
    { "s_no": 16, "name": "BestPeers", "selected_students": 2 },
    { "s_no": 17, "name": "Infosys Ltd.", "selected_students": 53 },
    { "s_no": 18, "name": "Amazon", "selected_students": 3 },
    { "s_no": 19, "name": "HCL Technologies", "selected_students": 0 },
    { "s_no": 20, "name": "CRONJIT", "selected_students": 0 },
    { "s_no": 21, "name": "Adani Energy Business", "selected_students": 5 }
  ],
  "2019": [
    { "s_no": 1, "name": "TCS Digital", "selected_students": 7 },
    { "s_no": 2, "name": "Persistent System", "selected_students": 24 },
    { "s_no": 3, "name": "TCS Ninja Hiring", "selected_students": 95 },
    { "s_no": 4, "name": "Value Labs", "selected_students": 3 },
    { "s_no": 5, "name": "Adani Power", "selected_students": 0 },
    { "s_no": 6, "name": "Amazon", "selected_students": 3 },
    { "s_no": 7, "name": "Infosys Ltd.", "selected_students": 63 },
    { "s_no": 8, "name": "Caparo Engineering India Ltd", "selected_students": 2 },
    { "s_no": 9, "name": "Cognizant", "selected_students": 20 },
    { "s_no": 10, "name": "Bharat Oman Refineries Limited (BORL)", "selected_students": 0 },
    { "s_no": 11, "name": "OpenText", "selected_students": 0 },
    { "s_no": 12, "name": "ZYCUS", "selected_students": 0 }
  ],
  "2018": [
    { "s_no": 1, "name": "Zycus Infotech", "selected_students": 0 },
    { "s_no": 2, "name": "TCS", "selected_students": 220 },
    { "s_no": 3, "name": "Xoriant Solution", "selected_students": 0 },
    { "s_no": 4, "name": "Tata AIG", "selected_students": 1 },
    { "s_no": 5, "name": "Wipro", "selected_students": 0 },
    { "s_no": 6, "name": "Synopsys", "selected_students": 0 },
    { "s_no": 7, "name": "Persistent", "selected_students": 3 },
    { "s_no": 8, "name": "Matrix Consec", "selected_students": 0 },
    { "s_no": 9, "name": "Dias park", "selected_students": 0 },
    { "s_no": 10, "name": "Turbine Triveni", "selected_students": 0 },
    { "s_no": 11, "name": "ADB", "selected_students": 0 }
  ]
};

const CompanyTable = () => {
const [selectedYear, setSelectedYear] = useState("2024");

return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
    <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Company Selections</h2>
    <div className="mb-4">
        <label className="font-medium text-gray-700">Select Year:</label>
        <select 
            className="ml-2 p-2 border rounded-lg" 
            value={selectedYear} 
            onChange={(e) => setSelectedYear(e.target.value)}
        >
            {Object.keys(companyDataByYear).map((year) => (
            <option key={year} value={year}>{year}</option>
            ))}
        </select>
        </div>
        <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
            <tr className="bg-gray-800 text-white">
                <th className="py-2 px-4 text-left">S.No</th>
                <th className="py-2 px-4 text-left">Company Name</th>
                <th className="py-2 px-4 text-left">Selected Students</th>
            </tr>
            </thead>
            <tbody>
            {companyDataByYear[selectedYear].map((company) => (
                <tr key={company.s_no} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-2 px-4">{company.s_no}</td>
                <td className="py-2 px-4 text-left font-medium">{company.name}</td>
                <td className="py-2 px-4 text-center">{company.selected_students}</td>
                </tr>
            ))}
            </tbody>
            <tfoot>
                

                {/* <td colSpan="3" className="text-center text-gray-500 text-sm p-2">
                Total Companies: {companyDataByYear[selectedYear].length}
                </td> */}

                <td colSpan="3" className="text-center  font-bold text-gray-700 text-lg p-2">
                Total Students : {companyDataByYear[selectedYear].reduce((acc, curr) => acc + curr.selected_students, 0)}
                </td>
            </tfoot>
        </table>
        </div>
    </div>
    </div>
);
};

export default CompanyTable;


