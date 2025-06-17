import React, { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { User } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#131118] text-white border-b border-[#2d2938] px-6 py-4 md:px-10 md:py-5 sticky top-0 z-50 backdrop-blur-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="size-5 text-[#5619e5]">
            <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.475 21.6262C...Z" />
            </svg>
          </div>
          <Link to={'/'} className="text-lg font-bold tracking-tight">Excel 2025</Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-[#ccc] transition">Home</Link>
          <Link to="/events" className="hover:text-[#ccc] transition">Events</Link>
          <Link to="/competitions" className="hover:text-[#ccc] transition">Competitions</Link>
          <Link to="/schedule" className="hover:text-[#ccc] transition">Schedule</Link>
        </nav>
        <Link to={'/signin'} className="hidden md:flex items-center gap-2 bg-gradient-to-tr from-[#bba9f2] to-[#e1d8ff] text-[#2e2053] text-sm font-medium px-6 py-2.5 rounded-full shadow-lg hover:shadow-purple-200 hover:scale-[1.03] hover:brightness-80 transition duration-300 ease-in-out">
          <User size={16} />
          sign in
        </Link>
      {/* Mobile Nav */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>


      {isOpen && (
        <div className="mt-4 md:hidden flex flex-col gap-4 text-sm font-medium bg-[#1a1624]/70 backdrop-blur-xl rounded-xl px-5 py-6 shadow-md">
          <Link to="/" className="hover:text-[#ccc] transition">Home</Link>
          <Link to="/events" className="hover:text-[#ccc] transition">Events</Link>
          <Link to="/competitions" className="hover:text-[#ccc] transition">Competitions</Link>
          <Link to="/schedule" className="hover:text-[#ccc] transition">Schedule</Link>
          <button className="flex items-center gap-2 w-fit bg-gradient-to-tr from-[#bba9f2] to-[#e1d8ff] text-[#2e2053] text-sm font-medium px-6 py-2.5 rounded-full shadow-md hover:shadow-purple-200 hover:scale-[1.03] hover:brightness-105 transition duration-300 ease-in-out">
            <User size={16} />
            sign in
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
