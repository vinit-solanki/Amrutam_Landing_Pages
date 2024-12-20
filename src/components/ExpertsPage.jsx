import React from "react";
import Slider from "react-slick";
import { Star, ChevronRight, MoveLeft, MoveRight } from "lucide-react";
import ExpertImg from "../assets/Expert.png";
import ScholarHat from "../assets/ScholarHat.png";
import LinkIcon from "../assets/Link.png";

const experts = [
  {
    id: 1,
    name: "Dr. Vaishali Sharma",
    title: "Ayurveda Practitioner (BAMS, MD)",
    experience: "25 years of experience",
    specialization: "Skin Specialist",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Dr. Kavita Mehta",
    title: "Ayurveda Consultant (BAMS, MSc)",
    experience: "20 years of experience",
    specialization: "Digestive Health",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Dr. Sahana Reddy",
    title: "Ayurveda Specialist (BAMS, PhD)",
    experience: "18 years of experience",
    specialization: "Hair and Scalp Care",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Dr. Ravi Kumar",
    title: "Ayurveda Expert (BAMS, MD)",
    experience: "15 years of experience",
    specialization: "Stress Management",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Dr. Sneha Patil",
    title: "Ayurveda Consultant (BAMS)",
    experience: "10 years of experience",
    specialization: "Women's Health",
    rating: 4.9,
  },
];

// Custom Arrow Components
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-[-120px] top-1/2 transform -translate-y-1/2 z-10 w-16 h-16 flex p-4 text-custom-black border border-custom-black flex items-center justify-center rounded-full bg-white shadow-md border hover:bg-gray-100 transition"
    >
      <MoveLeft className="text-gray-800 w-6 h-6" />
    </button>
  );
};

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-[-120px] top-1/2 transform -translate-y-1/2 z-10 w-16 h-16 flex p-4 text-custom-black border border-custom-black flex items-center justify-center rounded-full bg-white shadow-md border hover:bg-gray-100 transition"
    >
      <MoveRight className="text-gray-800 w-6 h-6" />
    </button>
  );
};

function ExpertsPage() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              centerMode: true,
              centerPadding: "40px",
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              centerMode: true,
              centerPadding: "20px",
            },
          },
        ],
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
      };
      

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center p-7">
      <div className="flex flex-col w-full justify-center items-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-custom-green">
          Meet Our Ayurveda Experts
        </h1>
        <div className="hidden md:block w-full">
          <hr className="w-[35%] translate-y-[-6px] border-4 border-custom-green opacity-50 mx-auto mb-3" />
        </div>
      </div>

      {/* Carousel */}
      <div className="w-full max-w-5xl relative">
        <Slider {...settings}>
          {experts.map((expert, index) => (
            <div
              key={expert.id}
              className="flex justify-center gap-y-3 items-center mx-4"
              style={{ margin: '0 10px' }}
            >
              <div className="w-[295px] h-[449px] bg-[#FFF9F0] rounded-3xl pt-10 gap-y-1 flex flex-col items-center justify-center relative">
                <div className="overflow-hidden">
                  <img
                    src={ExpertImg}
                    alt={expert.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="flex justify-center items-center translate-y-[-30px]">
                    <div className="bg-black flex justify-center gap-x-1 items-center text-white rounded-2xl bg-opacity-90 py-1 px-4">
                      {expert.rating}{" "}
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-black mb-1">
                  {expert.name}
                </h3>
                <p className="text-sm text-[#838383] font-semibold mb-2 text-center">
                  {expert.title}
                </p>

                <div className="flex items-center gap-2 text-sm text-gray-900 mb-2">
                  <img src={ScholarHat} alt="" />
                  <span>{expert.experience}</span>
                </div>

                <a
                  href=""
                  className="flex items-center gap-2 text-sm text-gray-600 bg-custom-green bg-opacity-20 rounded-xl py-1 px-3 mb-6"
                >
                  <img src={LinkIcon} alt="" />
                  <span>{expert.specialization}</span>
                </a>

                <button className="mb-2 w-full py-5 bg-custom-green text-white rounded-b-3xl hover:bg-green-700 transition-colors">
                  Book a session
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center items-center mt-10">
        <button className="px-6 py-3 border text-lg md:text-xl border-green-800 text-green-800 rounded-lg hover:bg-green-50 transition-colors flex items-center bg-custom-green bg-opacity-10">
          Find more experts
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default ExpertsPage;
