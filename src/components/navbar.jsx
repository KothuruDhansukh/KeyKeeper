import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-slate-800 w-full">
      <div className="flex justify-between items-center px-4 py-5 h-14 mycontainer">
        <div className="logo font-bold text-white">
          <span className="text-lime-400">&lt; Key</span>
          Keeper
          <span className="text-lime-400">/ &gt;</span>
        </div>

        
        <button
          onClick={toggleMenu}
          className="text-white sm:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>

        
        <ul className="hidden sm:flex gap-4 text-white">
          <li>
            <a className="hover:font-bold" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hover:font-bold" href="#">
              About
            </a>
          </li>
          <li>
            <a className="hover:font-bold" href="#">
              Contact Us
            </a>
          </li>
        </ul>

        <button className="text-white hidden sm:flex justify-around bg-slate-800 hover:bg-black items-center border ring-1 rounded-full p-1">
          <img
            className="invert"
            width={30}
            src="/icons/githublogo.png"
            alt=""
          />
          <p>GitHub</p>
        </button>
      </div>

     
      {menuOpen && (
        <ul className="sm:hidden flex flex-col items-center gap-4 text-white bg-slate-800 py-2">
          <li>
            <a className="hover:font-bold" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hover:font-bold" href="#">
              About
            </a>
          </li>
          <li>
            <a className="hover:font-bold" href="#">
              Contact Us
            </a>
          </li>
          {/* <button className="text-white flex justify-around bg-slate-800 hover:bg-black items-center border ring-1 rounded-full p-1">
            <img
              className="invert"
              width={30}
              src="/icons/githublogo.png"
              alt="GitHub Logo"
            />
           
            <p>GitHub</p>
          </button> */}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
