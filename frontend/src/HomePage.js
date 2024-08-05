import React from "react";

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

// this will be the first body where there will be words
function Body() {
  return (
    <main className="bg-gray-500 p-20 text-white ">
      <h2 className="text-3xl mb-4">Welcome to ACCO</h2>
      <p>This is the main content area. Add your content here.</p>
    </main>
  );
}

//this will be the second body where pictures and such might go on
function Secondbody() {
  return (
    <main className="bg-gray-500 p-20 text-white flex-grow">
      <p>This is the main content area. Add your content here.</p>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto text-center">
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
      <Footer />
    </div>
  );
}

export default HomePage;
