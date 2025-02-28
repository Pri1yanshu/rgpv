import React from "react";
// import "./Calender.css";

function Calender() {
  return (
    <>
      <div className="m-6 p-4 ">
        <h2 className="text-3xl py-4 font-semibold">Academic Calendar</h2>
        <ol className="border-2 border-gray-300 p-8 flex flex-col justify-center items-center gap-2"> 
          <li>
            <a 
              className="text-blue-400 hover:text-blue-800 text-lg  "
              target="blank"
              href="https://www.uitrgpv.ac.in/LastestDownloads/AC/Acad%20Cal%201st%20sem_030823024700.pdf"
            >
              Academic Calendar B Tech I Semester 23-24
            </a>{" "}
          </li>

          <li>
            {" "}
            <a
            className="text-blue-400 hover:text-blue-800 text-lg  "
              target="blank"
              href="https://www.uitrgpv.ac.in/LastestDownloads/AC/AC%20II_230124010233.pdf"
            >
              Academic Calendar B Tech II Semester 23-24
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className="text-blue-400 hover:text-blue-800 text-lg  "
              target="blank"
              href="https://www.uitrgpv.ac.in/LastestDownloads/AC/R%20Acad%20Cal%20III%20sem_170823121454.pdf"
            >
              Academic Calendar B Tech III Semester 23-24
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className="text-blue-400 hover:text-blue-800 text-lg  "
              target="blank"
              href="https://www.uitrgpv.ac.in/LastestDownloads/AC/AC%20IV_230124010212.pdf"
            >
              Academic Calendar B Tech IV Semester 23-24
            </a>{" "}
          </li>
          <li>
            {" "}
            <a className="text-blue-400 hover:text-blue-800 text-lg  "
              target="blank"
              href="https://www.uitrgpv.ac.in/LastestDownloads/AC/V%20sem_120623050759.pdf"
            >
              Academic Calendar B Tech V Semester 23-24
            </a>{" "}
          </li>
          <li>
            <a className="text-blue-400 hover:text-blue-800 text-lg  "
              target="blank"
              href="https://www.uitrgpv.ac.in/LastestDownloads/AC/VI%20sem%20AC_050124015331.pdf"
            >
              Academic Calendar B Tech VI Semester 23-24
            </a>{" "}
          </li>
          <li>
            <a className="text-blue-400 hover:text-blue-800 text-lg  " href="https://www.uitrgpv.ac.in/LastestDownloads/AC/VII%20sem_120623050120.pdf">
              Academic Calendar B Tech VII Semester 23-24
            </a>{" "}
          </li>
          <li>
            <a className="text-blue-400 hover:text-blue-800 text-lg  " href="https://www.uitrgpv.ac.in/LastestDownloads/AC/VIII%20sem%20AC_050124015300.pdf">
              Academic Calendar B Tech VIII Semester 23-24
            </a>{" "}
          </li>
        </ol>
      </div>
    </>
  );
}

export default Calender;
