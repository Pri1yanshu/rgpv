import React from 'react'
import { Regular, NonRegular } from '../../Data/FacultyDetails';

const MoreDetails = () => {
 
  return (
    <div className='container mx-auto p-6'>

   
    <div className="max-w-5xl mx-auto  p-8 bg-white shadow-xl rounded-lg mt-10 flex flex-col md:flex-row items-center gap-8">
      {/* Profile Image Section */}
      <div className="w-48 h-48 flex-shrink-0">
        <img
          src="https://via.placeholder.com/150"
          alt="Dr. Piyush Kumar Shukla"
          className="w-full h-full object-cover rounded-full border-4 border-blue-500"
        />
      </div>

      {/* Profile Information Section */}
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Dr. Piyush Kumar Shukla</h1>
        <p className="text-lg text-gray-700 font-semibold">Associate Professor</p>
        <p className="text-md text-gray-500">Department of Computer Science & Engineering</p>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-700">Contact</h3>
          <p><span className="font-semibold">Address:</span> Room No.302, Academic Block-X</p>
          <p><span className="font-semibold">Website:</span> <a href="https://drpiyushkumarshukla.in" className="text-blue-500">drpiyushkumarshukla.in</a></p>
          <p><span className="font-semibold">Email:</span> piyush@rgpv.ac.in</p>
          <p><span className="font-semibold">Phone:</span> 07552678876</p>
          <p><span className="font-semibold">Mobile:</span> 09425378576</p>
        </div>
      </div>
    </div>

    <div className="max-w-5xl mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold underline underline-offset-6  text-gray-800 mb-4">Professional Details</h3>
      
      <div className="grid mt-8 gap-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-700">Experience</h4>
          <p>{
            Regular[0].name
          }</p>
        </div>
        
<hr className='text-gray-300 border w-[70%] mx-auto shadow-lg'/>

        <div>
          <h4 className="text-lg font-semibold text-gray-700">Education & Qualification</h4>
          <ul className=" ml-6 text-gray-600">
            <li><span className="font-semibold">PhD:</span> Computer Science</li>
            <li><span className="font-semibold">M.Tech:</span> Computer Science & Engineering</li>
          </ul>
        </div>
      </div>
<br/>
<hr className='text-gray-300 border w-[70%] mx-auto shadow-lg'/>
<br/>
      <div className=" flex flex-col items-center justify-center leading-relaxed">
        <h4 className="text-lg font-semibold  text-gray-700">Memberships</h4>
        <div className='flex flex-wrap justify-center items-center '>

        <ul className="list-disc w-[70%] text-left  ml-6 text-gray-600">
          <li>Life Member - Indian Society of Technical Education (ISTE)</li>
          <li>Senior Member - IEEE</li>
          <li>Branch Counselor - IEEE Student Branch UIT-RGPV, Bhopal</li>
          <li>Association for Computing Machinery (ACM)</li>
          <li>Life Member - IAENG (International Association of Engineers)</li>
          <li>Life Member - IACSIT (International Association of Computer Science and Information Technology)</li>
          <li>SPOC - NPTEL-SWAYAM Chapter UIT-RGPV, Bhopal</li>
        </ul>
        </div>
      </div>
    </div>

    <div className="max-w-5xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Research Areas</h3>
      <p className="text-gray-600">White Box Cryptography, Information Security, Cyber Security, Blockchain, Machine Learning, IoT, Image Processing, Medical Imaging, FANET</p>
    </div>

    <div className="max-w-5xl mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recent Publications</h3>
      <div className=" flex flex-col items-center justify-center leading-relaxed">

      <ul className="list-disc w-[70%] text-left  ml-6 text-gray-600">
        <li>Optimizing cloud resource utilization in the digital economy (SCIE-Q1, 2024)</li>
        <li>Fusion-driven deep feature network for enhanced object detection (SCIE-Q1, 2024)</li>
        <li>Exploring Blockchain Technology in an IoT-Enabled Environment (IEEE Access SCIE-Q1, 2024)</li>
        <li>A systematic review on blockchain-based access control in cloud (Journal of Cloud Computing SCIE-Q1, 2024)</li>
        <li>Robust blockchain-based watermarking using edge detection (Multimedia Tools & Applications SCIE-Q1, 2024)</li>
      </ul>
      </div>
    </div>
    </div>
  );
}

export default MoreDetails