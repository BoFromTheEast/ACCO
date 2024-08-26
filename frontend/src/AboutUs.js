import React from "react";

function MainHeader() {
  return <div></div>;
}

function MainPage() {
  return <div className="flex-grow"></div>;
}

function Footer() {
  return (
    <footer className="bg-white-800 text-black p-4 mt-auto text-center ">
      <p>&copy; 2024 ACCO. All rights reserved.</p>
    </footer>
  );
}

function AboutUs() {
  return (
    <div>
      <MainHeader />
      <MainPage />
      <Footer />
    </div>
  );
}

export default AboutUs;
