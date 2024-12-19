import React from "react";
import HeroImage1 from "../assets/beachModel2.png";
import HeroImage2 from "../assets/beachModel1.png";
import ProductImage from "../assets/Jar.png";

function QuotesPage() {
  return (
    <div className="w-full min-h-screen bg-custom-lightYellow flex flex-col items-center py-8 px-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-custom-green mb-4">
        What sets Ayurvedic consultations apart?
        <hr className="w-0 md:lg:w-full translate-y-[-6px] border-t-4 border-custom-green opacity-60 mx-auto mb-4" />
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full max-w-7xl">
        <div className="w-full bg-white flex flex-col gap-y-5 justify-center items-center shadow-lg rounded-lg p-6 border-t-4 border-custom-green text-center hover:translate-y-[-4px] duration-300 smooth">
          <h2 className="text-2xl md:lg:text-3xl font-semibold text-custom-green mb-2">
            स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।
          </h2>
          <p className="text-md md:lg:text-lg font-300 text-center text-custom-green">
            [ Meaning: The Goal of Ayurveda is to maintain the health of a healthy
            person and to cure the disease of a diseased person. ]
          </p>
        </div>
        {/* Card 2 - Image */}
        <div className="flex justify-center items-center">
          <img
            src={HeroImage1}
            alt="Ayurvedic Consultation"
            className="rounded-lg w-full md:w-auto h-auto"
          />
        </div>
        {/* Card 3 */}
        <div className="w-full bg-white flex flex-col justify-center items-start shadow-lg rounded-lg p-6 border-t-4 border-custom-green text-center hover:translate-y-[-4px] duration-300 smooth">
          <h2 className="text-2xl md:lg:text-3xl font-semibold text-custom-green mb-2">
            Precise Diagnosis
          </h2>
          <p className="text-md md:lg:text-xl font-300 text-start text-custom-black mt-4 align-center">
            Ayurveda's core principles revolve around Vata, Pitta, and Kapha
            doshas, guiding you with precise diagnosis and treatment.
          </p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-2 w-full max-w-7xl">
        {/* Card 5 - Image */}
        <div className="flex justify-center items-center order-1 md:order-none">
          <img
            src={ProductImage}
            alt="Product"
            className="rounded-lg w-full md:w-auto h-auto"
          />
        </div>
        {/* Card 4 */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-custom-green order-2 md:order-none w-full md:w-auto hover:translate-y-[-4px] duration-300 smooth">
          <h2 className="text-2xl md:lg:text-3xl font-semibold text-custom-green mb-2">
            Zero side-effects
          </h2>
          <p className="text-md md:lg:text-xl font-300 text-custom-black mt-4 align-center">
            Ayurvedic treatments are devoid of chemicals and are based completely
            on natural herbs.
          </p>
        </div>
        {/* Card 7 - Final Image */}
        <div className="flex justify-center items-center order-3 md:order-none">
          <img
            src={HeroImage2}
            alt="Ayurvedic Model"
            className="rounded-lg w-full md:w-auto h-auto"
          />
        </div>
        {/* Card 6 */}
        <div className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-custom-green order-4 md:order-none w-full md:w-auto hover:translate-y-[-4px] duration-300 smooth">
          <h2 className="text-2xl md:lg:text-2xl font-semibold text-custom-green mb-2">
            Individual Treatment
          </h2>
          <p className="text-md md:lg:text-xl font-300 text-custom-black mt-4 align-center">
            All Treatments are personalized based on a person's unique
            constitution and health concerns.
          </p>
        </div>
      </div>
    </div>
  );
}

export default QuotesPage;