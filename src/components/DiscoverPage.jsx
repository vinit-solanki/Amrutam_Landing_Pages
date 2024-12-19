import React from "react";
import YogaModel from "../assets/yogaModel.png";
import PreventionIcon from "../assets/PreventionIcon.png";
import RemediesIcon from "../assets/RemediesIcon.png";
import ConnectionIcon from "../assets/ConnectionIcon.png";
import ImmunityIcon from "../assets/ImmunityIcon.png";
import HealingIcon from "../assets/HealingIcon.png";
import WellnessIcon from "../assets/WellnessIcon.png";

function DiscoverPage() {
  return (
    <div className="w-screen p-4 min-h-screen mt-4 flex flex-col justify-center items-center px-4 md:px-0">
      {/* Header Section */}
      <div className="text-center mb-8 p-3">
        <h1 className="text-custom-green text-4xl md:text-5xl font-bold">
          Discover Ayurveda's Magic With Us
        <hr className="w-0 md:w-full translate-y-[-6px] border-t-4 border-custom-green opacity-60 mb-4" />
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony and vitality. It's like a journey to better health using
          ancient wisdom, a totally effective approach for a better life.
        </p>
      </div>

      {/* For Larger Screen */}
      <div className="hidden md:lg:flex flex-col p-5 md:flex-row justify-center items-center gap-8 w-full">
        {/* Left Feature Cards */}
        <div className="flex flex-col gap-12">
          <FeatureCardLeft
            img={WellnessIcon}
            title="Personalized Wellness"
            description="Get treatments made just for you based on your individual doshas (body type)."
          />
          <div className="pr-10">
            <FeatureCardLeft
              img={PreventionIcon}
              title="Focus on Prevention"
              description="Stop problems even before they start."
            />
          </div>
          <FeatureCardLeft
            img={RemediesIcon}
            title="Natural Remedies"
            description="Using herbs and natural therapies for healing."
          />
        </div>

        <div className="flex justify-center items-center">
          <img
            src={YogaModel}
            alt="Yoga Model"
            className="w-[300px] md:w-[400px] lg:w-[450px] object-contain"
          />
        </div>

        {/* Right Feature Cards */}
        <div className="flex flex-col gap-12">
          <FeatureCardRight
            img={ConnectionIcon}
            title="Mind-Body Connection"
            description="Keep your mind and body in sync for a happy life."
          />
          <div className="pl-10">
            <FeatureCardRight
              img={ImmunityIcon}
              title="Boosting Immunity"
              description="Stay strong and healthy for life, not just for today."
            />
          </div>
          <FeatureCardRight
            img={HealingIcon}
            title="Holistic Healing"
            description="Fix the root problem for long-lasting health."
          />
        </div>
      </div>

      {/* For Small Screen */}
      <div className="w-screen p-5 h-full flex flex-col justify-center items-center md:lg:hidden">
        <div className="w-full flex justify-center items-center">
          <img
            src={YogaModel}
            alt="Yoga Model"
            className="w-[300px] object-contain"
          />
        </div>
        <div className="w-full h-full gap-4 grid grid-cols-2">
          <FeatureCard
            img={WellnessIcon}
            title="Personalized Wellness"
            description=" treatments made just for you based on your individual doshas, 
(body type)"
          />
            <FeatureCard
              img={PreventionIcon}
              title="Focus on Prevention"
              description="Stop problems even before they start."
            />
            <FeatureCard
              img={ConnectionIcon}
              title="Mind-Body Connection"
              description="Keep your mind and body in sync for a happy life."
            />
            <FeatureCard
              img={HealingIcon}
              title="Holistic Healing"
              description="Fix the root problem for long-lasting health."
            />
          <FeatureCard
            img={RemediesIcon}
            title="Natural Remedies"
            description="Using herbs and natural therapies for healing."
          />
          <FeatureCard
            img={ImmunityIcon}
            title="Boosting Immunity"
            description="Stay strong and healthy for life, not just for today."
          />
        </div>
      </div>
    </div>
  );
}

const FeatureCardLeft = ({ img, title, description }) => (
  <div className="w-full flex gap-4 justify-end items-center hover:translate-y-[-4px] duration-200 smooth">
    <div className="text-right max-w-[280px]">
      <h2 className="text-custom-green font-bold text-lg md:text-xl">
        {title}
      </h2>
      <p className="text-gray-500 text-sm md:text-base">{description}</p>
    </div>
    <img src={img} alt={title} className="w-16 h-16 md:w-20 md:h-20" />
  </div>
);

const FeatureCardRight = ({ img, title, description }) => (
  <div className="flex gap-4 justify-start items-center hover:translate-y-[-4px] duration-200 smooth">
    <img src={img} alt={title} className="w-16 h-16 md:w-20 md:h-20" />
    <div className="text-left max-w-[280px]">
      <h2 className="text-custom-green font-bold text-lg md:text-xl">
        {title}
      </h2>
      <p className="text-gray-500 text-sm md:text-base">{description}</p>
    </div>
  </div>
);

const FeatureCard = ({ img, title, description }) => (
  <div className="flex w-full h-full flex-col justify-around items-center text-center border-2 rounded-xl shadow-md p-6 gap-y-5 hover:translate-y-[-4px] duration-200 smooth">
    <div className="flex flex-col justify-center items-center gap-y-4">
    <img src={img} alt={title} className="w-16 h-16 md:w-20 md:h-20" />
    <h2 className="text-black font-semibold text-lg md:text-xl">{title}</h2>
    </div>
    <p className="text-gray-600 text-center text-md md:text-base">{description}</p>
  </div>
);

export default DiscoverPage;
