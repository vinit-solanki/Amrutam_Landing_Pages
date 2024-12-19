import React from 'react';
import Model1 from '../assets/Model1.png';
import RightFading from '../assets/rightFading.png';
import FadeFromTop from '../assets/FadeFromTop.png';
import ModelSmall from '../assets/Model1Small.png';
import Features from './Features';

function Home() {
  return (
    <div className="relative z-[0] w-screen flex flex-col overflow-x-hidden">
      <div className="w-full h-auto flex relative md:h-screen">
        <img
          src={RightFading}
          alt="Fading Effect"
          className="absolute w-full h-full object-cover"
          style={{ mixBlendMode: 'multiply' }}
        />

        <div className="absolute top-0 left-0 z-10 w-full h-full flex items-center px-6 md:px-16">
          <div className="text-white w-full">
            <h2
              className="text-2xl md:text-3xl font-100 text-gray-200 mb-3"
              style={{ fontFamily: 'Nexa Light, sans-serif' }}
            >
              Namaste, Welcome to Amrutam
            </h2>
            <h1
              className="text-3xl  md:text-5xl font-bold leading-relaxed mb-5"
              style={{ fontFamily: 'Nexa Bold, sans-serif', lineHeight: '1.2' }}
            >
              Step into Holistic Healing with{' '}
              <a href="#" className="underline text-green-100">
                Ayurveda
              </a>
              <br />
              Book Consultation With Certified Experts.
            </h1>
            <p
              className="text-xl text-gray-200 md:text-xl leading-relaxed mb-6"
              style={{ fontFamily: 'Nexa Light, sans-serif' }}
            >
              Dive into the world of ayurveda and experience personalized health
              solutions and <br /> holistic guidance from trusted ayurvedic doctors
              anytime, anywhere.
            </p>
            <button className="bg-custom-green text-white px-6 py-4 rounded-md text-base font-semibold hover:bg-green-700 transition">
              BOOK AN APPOINTMENT
            </button>
          </div>
        </div>

        <div className="w-1/2 bg-custom-red hidden md:block"></div>

        <div className="w-full md:w-1/2">
          <img
            src={Model1}
            alt="Model"
            className="hidden md:block w-full h-full object-cover"
          />
          <img
            src={ModelSmall}
            alt="Model Small"
            className="block md:hidden w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="absolute top-0 w-full h-full pointer-events-none">
        <img
          src={FadeFromTop}
          alt="Fade From Top"
          className="block md:hidden w-full h-full object-cover opacity-50"
          style={{ mixBlendMode: 'screen' }}
        />
      </div>

      {/* Bottom Section */}
      <div className="w-full h-auto bg-custom-lightYellow">
        <Features/>
      </div>
    </div>
  );
}

export default Home;
