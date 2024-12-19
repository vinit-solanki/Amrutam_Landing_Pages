import React from "react";
import MobileModel from "../assets/MobileModel.png";
import MobileModelSmall from "../assets/MobileModelSmall.png";
import GooglePlay from '../assets/GooglePlayImage.png';
import AppStore from '../assets/AppStoreImage.png';
function MobileAppPage() {
  return (
    <>
      {/* For Small Screen */}
      <div className="block w-screen min-h-screen bg-custom-lightYellow flex flex-col py-7 gap-y-5 justify-center items-center md:lg:hidden">
        <div className="w-full p-2 px-5 pr-8 flex flex-col justify-between items-center text-center">
          <h2 className="w-full text-center text-4xl mb-3 text-custom-green font-900">
            Amrutam Home App
          </h2>
          <p className="text-md text-custom-black text-center text-center">
            The Amrutam Home App is your one-stop app for all things Ayurveda!
            Apart from mimicking the significant characteristics of our website,
            this app offers a wide range of additional features.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center relative p-4">
          <img src={MobileModelSmall} alt="Get The App" />
        </div>
        <div className="w-full gap-y-6 px-4 flex flex-col justify-between items-center relative p-1 text-center ">
          <p className="text-lg text-black text-center">
          Get A Diet & Lifestyle Consultation With Ayurvedic <br /> Experts Across The Globe
          </p>
          <h1 className="text-4xl text-black font-bold">Get The App Now</h1>
          {/* <div className="flex flex-col justify-between items-center gap-y-4"></div> */}
          <img src={GooglePlay} alt="" />
          <img src={AppStore} alt="" />
        </div>
      </div>

      {/* For Large Screen */}
      <div className="hidden md:flex w-screen min-h-screen bg-custom-lightYellow justify-center items-center">
        <div className="flex w-full max-w-screen-xl">
          <div className="w-1/2 flex flex-col justify-center items-start px-10">
            <div className="w-full text-start">
              <h1 className="text-3xl lg:text-5xl text-custom-green font-bold mb-4">
                Amrutam Home App
              </h1>
              <p className="text-md text-custom-black mb-5">
                The Amrutam Home App is your one-stop app for all things Ayurveda!
                Apart from mimicking the significant characteristics of our website,
                this app offers a wide range of additional features.
              </p>
              <p className="text-xl lg:text-2xl font-semibold text-black mb-8">
                Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe
              </p>
              <h2 className="text-4xl font-semibold">Get the App Now</h2>
            </div>
            <div className="flex gap-x-4 mt-5">
              <img src={GooglePlay} alt="Download from Google Play" />
              <img src={AppStore} alt="Download from App Store" />
            </div>
          </div>
          {/* Image Section */}
          <div className="w-1/2 flex justify-center items-center">
            <img
              src={MobileModel}
              alt="Mobile Model"
              className="max-w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileAppPage;