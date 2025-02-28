import React from "react";
// import "./Faculty.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import ProfileCard from "../../component/ProfileCard/ProfileCard.jsx";
import Footer from "../../component/Footer/Footer.jsx";
import ProfessorProfile from "../../component/MoreDetails/ProfessorProfile.jsx";
import { Regular, NonRegular } from '../../Data/FacultyDetails';


/*address,name,designation,experience,mail,phone,post*/
function Faculty() {

  const [faculty, setFaculty] = React.useState(true);
  const [facultyData, setFacultyData] = React.useState();
  return (
    <>

      {
        faculty ? 
        (<div className="container mx-auto p-6">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Our Regular Faculty</h2>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8  p-4">
          {Regular.map((items) => {
            return (
              <ProfileCard
              key={items.name}
                image={items.img}
                name={items.name}
                designation={items.designation}
                experience={items.experience}
                mail={items.contact.email}
                phone={items.contact.phone}
                data={items}
                address={items.address}
                setFaculty={setFaculty}
                setFacultyData={setFacultyData}
              />
            );
          })}
        </div>
        <br/>
        <br/>
        <hr className="text-gray-400 border shadow-lg " />
        <br/>

        <h2 className="text-4xl mt-8 font-extrabold text-center mb-10 text-gray-800">Our Non Regular Regular Faculty</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8  p-4">
          {NonRegular.map((items) => {
            return (
              <ProfileCard
              key={items.name}
                image={items.img}
                name={items.name}
                designation={items.designation}
                experience={items.experience}
                mail={items.contact.email}
                phone={items.contact.phone}
                data={items}
                address={items.address}
                setFaculty={setFaculty}
                setFacultyData={setFacultyData}
              />
            );
          })}
        </div>
      </div>) :
       (<ProfessorProfile 
       data={facultyData}
       setFaculty={setFaculty}
       
       />)
      }
      

  
      <Footer />
    </>
  );
}

export default Faculty;
