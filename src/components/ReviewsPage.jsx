import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import ReviewPlaceholder from "../assets/ReviewPlaceholder.png";

const reviews = [
  {
    id: 1,
    name: "Sophie Moore",
    img: ReviewPlaceholder,
    location: "Chennai",
    specialist: "Skin",
    dateOfReview: "17/02/24",
    stars: 5,
    title: "One of a kind service",
    review:
      "This is the best Ayurvedic consultation I’ve ever had! Highly recommend it to anyone seeking holistic healing.",
  },
  {
    id: 2,
    name: "Jane Smith",
    img: ReviewPlaceholder,
    location: "Mumbai",
    specialist: "Hair",
    dateOfReview: "17/02/24",
    stars: 4.4,
    title: "One of a kind service",
    review:
      "The treatments were personalized and effective. I noticed great results in no time!",
  },
  {
    id: 3,
    name: "Michael Johnson",
    img: ReviewPlaceholder,
    location: "Chennai",
    specialist: "Skin",
    dateOfReview: "17/02/24",
    stars: 4.5,
    title: "One of a kind service",
    review:
      "A professional and caring team. I feel more balanced and energetic than ever before.",
  },
  {
    id: 4,
    name: "Emily Davis",
    img: ReviewPlaceholder,
    location: "Mumbai",
    specialist: "Hair",
    dateOfReview: "17/02/24",
    stars: 4.7,
    title: "One of a kind service",
    review: "A life-changing experience! Ayurveda really works wonders.",
  },
  {
    id: 5,
    name: "Chris Brown",
    img: ReviewPlaceholder,
    location: "Mumbai",
    specialist: "Gastro",
    dateOfReview: "17/02/24",
    stars: 4.3,
    title: "One of a kind service",
    review: "Excellent consultation with zero side effects. Highly satisfied!",
  },
];

function renderStars(rating) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex text-yellow-300">
      {Array(fullStars)
        .fill()
        .map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
      {halfStar && <FaStarHalfAlt />}
      {Array(emptyStars)
        .fill()
        .map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
    </div>
  );
}

function ReviewsPage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: (i) => (
      <div
        className={`dot ${i < 3 ? "active" : ""}`}
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background:
            i < 3
              ? i === currentSlide
                ? "darkGreen"
                : "lightgray"
              : "transparent",
        }}
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "20px",
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
  };

  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div className="w-screen min-h-screen bg-custom-lightYellow flex flex-col items-center justify-center p-4">
      <div className="flex flex-col w-full justify-center items-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-custom-green">
          Stories from our valued customers!
        </h1>
        <div className="hidden w-full md:block">
          <hr className="w-[60%] translate-y-[-6px] border-4 border-custom-green opacity-60 mx-auto mb-3 md:lg:w-[45%]" />
        </div>
      </div>
      <div className="w-full max-w-7xl">
        <Slider
          {...settings}
          afterChange={(current) => setCurrentSlide(current)}
          className="md:space-x-4 flex justify-center items-center mt-5 px-2"
        >
          {reviews.map((review) => (
            <div key={review.id} className="p-4">
              <div className="bg-white shadow-lg rounded-xl w-[335px] h-[390px] flex flex-col justify-center items-center md:w-[290px] md:h-[300px] lg:w-[388px] lg:h-[300px] mx-auto">
                <div
                  className={`w-full ${
                    review.specialist === "Skin"
                      ? "bg-green-200 bg-opacity-60"
                      : "bg-purple-100"
                  } p-4 rounded-t-lg`}
                >
                  <h3 className="text-sm font-semibold text-purple-600">
                    Consulted for: {review.specialist}
                  </h3>
                </div>
                <div className="p-4 flex-grow">
                  <div className="flex items-start gap-4">
                    <img
                      src={review.img}
                      alt={review.name}
                      className="w-14 h-14 rounded-full border-2"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        {review.name}
                      </h2>
                      <p className="text-sm text-gray-500">{review.location}</p>
                    </div>
                    <p className="ml-auto text-sm text-gray-400">
                      {review.dateOfReview}
                    </p>
                  </div>
                  <div className="mt-2">{renderStars(review.stars)}</div>
                  <h2 className="mt-3 text-lg font-semibold text-gray-800">
                    {review.title}
                  </h2>
                  <p className="mt-1 text-sm text-gray-600">{review.review}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ReviewsPage;
