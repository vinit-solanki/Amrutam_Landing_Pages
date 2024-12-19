import React, { useState, useRef, useEffect } from 'react';
import HeadingImg from '../assets/Heading.png';
import '../App.css';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="absolute z-[1000] w-screen px-6 bg-custom-lightYellow p-3 justify-between items-center pt-4 md:flex-row justify-between bg-opacity-90 hover:bg-opacity-100">
      {/* Navbar Content */}
      <div ref={menuRef} className="w-full md:w-auto h-full flex flex-col md:flex-row justify-between items-center">

        {/* Logo */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <img 
            src={HeadingImg} 
            alt="AMRUTAM" 
            width={259} 
            height={49} 
            style={{ fontFamily: 'Nexa Bold, sans-serif' }} 
          />

          {/* Hamburger Icon for Small Screens */}
          <div className="md:hidden flex justify-end w-full pr-4">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-custom-green focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Desktop Menu (visible only on medium and large screens) */}
        <div className="hidden md:flex flex-row justify-evenly items-center gap-x-6 text-lg font-semibold m-3 md:m-0">
          <a className="nav-item text-custom-black cursor-pointer whitespace-nowrap">Home</a>
          <a className="nav-item text-custom-green cursor-pointer whitespace-nowrap">Find Doctors</a>
          <a className="nav-item text-custom-black cursor-pointer whitespace-nowrap">About Us</a>
        </div>

        {/* Desktop Login & Sign-up Buttons */}
        <div className="hidden md:flex w-full md:w-auto justify-center gap-x-6 items-center font-semibold whitespace-nowrap">
          <button className="rounded-lg bg-none border-custom-green border-2 border-opacity-40 p-2 px-7 text-custom-green hover:bg-custom-green transition duration-250 hover:text-white">
            Login
          </button>
          <button className="rounded-lg bg-custom-green border-custom-black border-2 border-opacity-40 p-2 px-7 text-white hover:bg-opacity-0 transition duration-250 hover:text-custom-green">
            Sign-up
          </button>
        </div>
      </div>

      {/* Mobile Menu (Full-screen overlay) */}
      <div 
        className={`p-4 md:hidden w-full bg-custom-lightYellow fixed top-0 left-0 transition-all ${isMenuOpen ? 'opacity-100 z-[1001]' : 'opacity-0 z-[-1]'} flex flex-col items-center justify-center`}>
        <nav className="text-custom-black cursor-pointer whitespace-nowrap py-4">Home</nav>
        <nav className="text-custom-green cursor-pointer whitespace-nowrap py-4">Find Doctors</nav>
        <nav className="text-custom-black cursor-pointer whitespace-nowrap py-4">About Us</nav>
        <div className="flex flex-col items-center gap-y-4">
          <button className="rounded-lg bg-none border-custom-green border-2 border-opacity-40 p-2 px-7 text-custom-green hover:bg-custom-green transition duration-250 hover:text-white">
            Login
          </button>
          <button className="rounded-lg bg-custom-green border-custom-black border-2 border-opacity-40 p-2 px-7 text-white hover:bg-opacity-0 transition duration-250 hover:text-custom-green">
            Sign-up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
