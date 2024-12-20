import React from "react";
import BeachBg from "../assets/BeachBg.png";
import BeachBgSmall from '../assets/BeachBgSmall.png';

function BookingPage() {
  return (
    <div className="relative w-screen h-auto flex justify-center items-center">
      <img
        src={BeachBg}
        alt="Background"
        className="hidden lg:block w-full h-full object-cover"
      />
      <img
        src={BeachBgSmall}
        alt="Background"
        className="w-full h-full object-cover lg:hidden"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="absolute z-10 text-center px-4">
        <h1 className="text-3xl text-custom-lightYellow leading-relaxed md:text-5xl font-900 mb-6 tracking-wide">
          Ready to restore harmony in your mind, body and spirit?
        </h1>
        <button className="bg-custom-green hover:bg-green-700 text-white py-3 px-6 rounded-lg text-lg font-medium transition">
          Book a consultation
        </button>
      </div>
    </div>
  );
}

export default BookingPage;