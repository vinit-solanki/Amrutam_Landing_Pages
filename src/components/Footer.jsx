import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube, faTwitter, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-[#3A643B2E] py-8 px-4">
      <div className="max-w-6xl p-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl md:text-lg font-bold text-green-800 mb-2">Get in touch</h3>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            support@amrutam.co.in
          </p>
          <p className="text-sm md:text-base text-gray-700 mb-4">
            Amrutam Pharmaceuticals Pvt Ltd.,
            <br />
            Chitragupt Ganj, Nai Sadak, Lashkar,
            <br />
            Gwalior - 474001
          </p>
          <p className="text-sm md:text-base text-gray-700 mb-6">+91 9713171999</p>

          <div className="flex space-x-4">
            {[
              { icon: faFacebook, name: "facebook", link:"https://www.facebook.com/AmrutamOfficial/" },
              { icon: faInstagram, name: "instagram", link: "https://www.instagram.com/amrutamofficial/" },
              { icon: faYoutube, name: "youtube", link: "https://www.youtube.com/c/AmrutamOfficial" },
              { icon: faTwitter, name: "twitter", link: "https://x.com/AmrutamOfficial/" },
              { icon: faLinkedin, name: "linkedin", link: "https://linkedin.com/company/amrutamofficial/?originalSubdomain=in" },
              { icon: faPinterest, name: "pinterest", link: "https://in.pinterest.com/amrutamofficial/" },
            ].map(({ icon, name, link }) => (
              <a
                href= {link}
                key={name}
                className="w-10 h-10 flex justify-center items-center rounded-full bg-green-800 text-white hover:translate-y-[-4px] transition duration-200"
              >
                <FontAwesomeIcon icon={icon} width={"2rem"} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-lg font-bold text-green-800 mb-2">Information</h3>
          <ul className="space-y-2 text-sm md:text-base text-gray-700">
            {[
              "About Us",
              "Terms and Conditions",
              "Privacy Policy",
              "Privacy Policy for Mobile Apps",
              "Shipping and Returns Policy",
              "International Delivery",
              "For Businesses, Hotels and Resorts",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 p-2">
            <h3 className="text-md text-center md:text-lg font-bold text-green-800 mb-2">
              Subscribe to our Newsletter and join Amrutam Family today!
            </h3>
            <form className="p-4 flex justify-center items-center border border-gray-300 rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Your Email Address"
                className="border border-custom-green py-4 px-3 bg-custom-green bg-opacity-10 rounded-l-full text-sm text-black md:text-base outline-none md:lg:p-2 w-full"
              />
              <button
                type="submit"
                className="px-3 py-4 border border-custom-green bg-black text-white rounded-r-full text-sm md:text-base font-semibold hover:bg-gray-800 transition md:lg:p-2"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
