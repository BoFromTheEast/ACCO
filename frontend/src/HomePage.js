import React from "react";
import TestImage from "./test.jpg";

// This is the navagation bar
function Navbar() {
  return (
    <nav className="bg-gray-700 rounded-md text-white p-4 flex items-center">
      <p className="text-2xl mr-4 italic font-bold">
        <a href="/">ACCO</a>
      </p>
      <ul className="flex space-x-4 ml-auto">
        <li>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/aboutUs" className="hover:underline">
            About
          </a>
        </li>
      </ul>
      <ul className="flex space-x-4 ml-6">
        <li>
          <a
            href="/login"
            className="bg-blue-400 rounded-md p-1 text-white hover:underline"
          >
            Login
          </a>
        </li>
        <li>
          <a
            href="/register"
            className="bg-blue-400 rounded-md p-1 text-white hover:underline"
          >
            Register
          </a>
        </li>
      </ul>
    </nav>
  );
}

// This first body is a brief description of what our company is about
function Body() {
  return (
    <main className=" p-20 text-black flex-grow">
      {/* title will be inside of the picture */}
      <div className="relative flex-col justify-start ">
        <h1 className="text-3xl text-black md-4 p-2 ">Welcome to ACCO</h1>
      </div>

      {/* picture */}
      <div className="flex justify-center relative">
        <img
          src={TestImage}
          alt="testing image"
          // className="w-[1000px] h-[600px]"
        />
      </div>

      <div className="flex flex-col justify-center mt-10  ">
        <h1 className="text-3xl underline mb-4 justify-start ">Our Mission</h1>
        <div className="flex justify-center">
          <p>
            {/* At ACCO, we are committed to providing opportunities for growth and
            learning through efficient, collaborative efforts. We believe in the
            strength of ownership, ensuring that each client feels empower in
            their educational journey. With a focus on simplicity and a deep
            sense of sympathy, we strive to make academic success accessible to
            all. */}
            At ACCO, we are dedicated to unlocking your full potential through
            personalized and collaborative support. Our core values of
            commitment, opportunity, ownership, efficiency, collaboration,
            simplicity, and sympathy guide everything we do. We champion the
            strength of ownership, empowering each client to take control of
            their educational journey. With a commitment to simplicity and a
            profound sense of empathy, we make academic success not just a goal,
            but a reality for everyone.
          </p>
        </div>
      </div>
    </main>
  );
}

//this will show the requirement for an international student
function Secondbody() {
  return (
    <main className="bg-blue-300 p-20  flex-grow">
      {/* This body is for English proficiency requirement*/}
      <div>
        <h1 className="flex justify-start text-3xl text-white">
          English proficiency requirement
        </h1>
        <div className="mt-5">
          {/* GPA requirement */}
          <div>
            <h1 className="text-white">GPA Requirement</h1>
            <p className="mt-2">
              Equivalent of a minimum 3.0 high school GPA on 4.0 scale. We
              understands many different evaluation systems are used throughout
              the world, Colleges and University are usually the one to
              determine equivalent GPA.
            </p>
          </div>

          {/* Course Requirement  */}
          <div className="mt-5">
            <h1 className="text-white">Course Requirement</h1>
            <p className="mt-2">
              In addition to the requirement above, students must meet the
              following minimum high school course requirements:
            </p>
            <ul className="mt-2 ml-3">
              <li>4 years of English or your native language</li>
              <li>
                3 years of science (including at least two years of laboratory
                science courses which emphasize elements of biology, chemistry,
                or physics)
              </li>
              <li>3 years of math (including algebra and geometry)</li>
              <li>2 years of social studies</li>
            </ul>
          </div>

          {/* SAT/ACT Score Requirement  */}
          <div className="mt-5">
            <h1 className="text-white">SAT/ACT Score Requirement</h1>
            <p>
              While SAT or ACT scores are not required for admission, students
              who achieve either of the two minimum test scores below are
              automatically considered to have met the 3.00 GPA requirement:
            </p>
            <ul className="mt-2 ml-3">
              <li>
                1200 SAT combined score (Evidence Based Reading and Writing
                score + Math score)
              </li>
              <li>25 ACT composite score</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

function Thirdbody() {
  return <main className="p-20 flex-grow"></main>;
}

function Footer() {
  return (
    <footer className="bg-white-800 text-black p-4 mt-auto text-center ">
      <p>&copy; 2024 ACCO. All rights reserved.</p>
    </footer>
  );
}

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 p-4 relative">
        <Navbar />
      </header>
      <Body />
      <Secondbody />
      <Thirdbody />
      <Footer />
    </div>
  );
}

export default HomePage;
