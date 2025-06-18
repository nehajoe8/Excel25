import React, { useEffect, useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { User } from "lucide-react";
import ShinyText from "../component/ShinyText";
import GooeyNav from "../component/GooeyText";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const items = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Competitions", href: "/competitions" },
  ];

  const activeIndex = items.findIndex(item => item.href === currentPath);

  return (
    <header className="bg-[#131118] text-white border-b border-[#2d2938] overflow-y-hidden px-6 py-4 md:px-10 md:py-5 sticky top-0 z-50 backdrop-blur-md">
      <div className="flex justify-between items-center w-full">
        <Link to="/" className="text-lg font-bold tracking-tight">
          <ShinyText text="SHASTRA" disabled={false} speed={3} className="custom-class" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:block">
          <GooeyNav
            items={items}
            particleCount={15}
            particleDistances={[90, 10]}
            particleR={100}
            initialActiveIndex={activeIndex === -1 ? 0 : activeIndex}
            animationTime={600}
            timeVariance={300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </div>

        {/* Sign In (Desktop) */}
        <Link
          to="/signin"
          className="hidden md:flex items-center gap-2 bg-gradient-to-tr from-[#bba9f2] to-[#e1d8ff] text-[#2e2053] text-sm font-medium px-6 py-2.5 rounded-full shadow-lg hover:shadow-purple-200 hover:scale-[1.03] hover:brightness-80 transition duration-300 ease-in-out"
        >
          <User size={16} />
          sign in
        </Link>

        {/* Hamburger Menu */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="mt-4 md:hidden flex flex-col gap-4 text-sm font-medium bg-[#1a1624]/70 backdrop-blur-xl rounded-xl px-5 py-6 shadow-md">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`transition ${
                currentPath === item.href ? "text-white font-semibold" : "text-[#ccc]"
              }`}
            >
              {item.label}
            </Link>
          ))}

          <Link to="/schedule" className="hover:text-[#ccc] transition">
            Schedule
          </Link>

          <Link
            to="/signin"
            className="flex items-center gap-2 w-fit bg-gradient-to-tr from-[#bba9f2] to-[#e1d8ff] text-[#2e2053] text-sm font-medium px-6 py-2.5 rounded-full shadow-md hover:shadow-purple-200 hover:scale-[1.03] hover:brightness-105 transition duration-300 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            <User size={16} />
            sign in
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
