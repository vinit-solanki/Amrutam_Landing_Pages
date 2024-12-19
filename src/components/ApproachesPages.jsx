import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
function ApproachesPages() {
  // Slider settings for react-slick
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div
        className={`dot ${i < 3 ? 'active' : ''}`}
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: i < 3 ? (i === currentSlide ? 'green' : 'lightgray') : 'transparent',
        }}
      />
    ),
    appendDots: (dots) => (
      <div style={{ marginTop: '20px' }}>
        <ul style={{ display: 'flex', justifyContent: 'center' }}> {dots} </ul>
      </div>
    ),
  };

  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div className='w-screen min-h-screen flex flex-col items-center justify-center p-4'>
      <div className='flex flex-col w-full justify-center items-center'>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-custom-green mb-4">
          Our Ayurvedic Approach
          <hr className="w-full translate-y-[-6px] border-t-4 border-custom-green opacity-60 mx-auto mb-3" />
        </h1>
        <p className='px-7 text-xl font-300 text-center text-custom-black max-w-4xl'>
          At Amrutam we follow a unique and personalized approach to healing. Our expert practitioners begin each treatment process by conducting a thorough analysis of the patient’s body type, medical history, and current health conditions.
        </p>
      </div>

      <div className='hidden md:flex max-w-7xl justify-center items-center mt-4 p-3 gap-x-4'>
        <ApproachCard num={1} title={"Make Appointment"} description={"You must make an appointment in advance, to choose the service and date."} />
        <ApproachCard num={2} title={"Consultations"} description={"The next stage involves a thorough consultation with an Ayurveda practitioner."} />
        <ApproachCard num={3} title={"Treatment Planning"} description={"The Ayurvedic practitioner creates a personalized treatment plan for you"} />
        <ApproachCard num={4} title={"Maintenance"} description={"These visits allow for assessment of progress, adjustments to the treatment."} />
      </div>

      {/* Carousel - Visible on small screens */}
      <div className='block md:hidden w-full mt-4 px-4'>
        <Slider {...sliderSettings} afterChange={(current) => setCurrentSlide(current)}>
          <ApproachCard num={1} title={"Make Appointment"} description={"You must make an appointment in advance, to choose the service and date."} />
          <ApproachCard num={2} title={"Consultations"} description={"The next stage involves a thorough consultation with an Ayurveda practitioner."} />
          <ApproachCard num={3} title={"Treatment Planning"} description={"The Ayurvedic practitioner creates a personalized treatment plan for you"} />
          <ApproachCard num={4} title={"Maintenance"} description={"These visits allow for assessment of progress, adjustments to the treatment."} />
        </Slider>
      </div>
    </div>
  );
}

const ApproachCard = ({ num, title, description }) => (
  <div className='flex h-full flex-col justify-evenly items-center py-7 gap-y-5 px-3 bg-custom-lightYellow shadow-xl rounded-lg p-6 border-t-4 border-custom-green w-full md:lg:hover:translate-y-[-5px] duration-200 smooth md:lg:w-[290px] h-[315px]'>
    <div className='p-3 border border-custom-black bg-custom-green bg-opacity-70 font-bold text-xl text-white rounded-full px-5 md:text-3xl'>
      {num}
    </div>
    <div className='text-custom-green font-bold text-center w-full text-lg md:text-xl lg:text-2xl'>
      {title}
    </div>
    <div className='text-gray-700 text-md text-center w-full md:lg:text-lg'>
      {description}
    </div>
  </div>
);

export default ApproachesPages;
