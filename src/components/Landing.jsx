import React from "react";
import LandingImage from "../assets/landing.png";
import IntroImage from "../assets/intro.png";

const Landing = () => {
  return (
    <div
      className="bg-fixed bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${LandingImage})` }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="px-10 md:px-0 py-6">
          <div className="grid grid-cols-2 py-32">
            <div className="col-span-2 md:col-span-1 py-10">
              <h1 className="text-gray-800 font-bold text-3xl md:text-5xl wow fadeInUp">
                Deploy is what we do...
              </h1>
              <p
                className="text-xl md:text-2xl text-center md:text-left mt-8 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                We support companies to refocus their resources on their core
                business.
              </p>
              <p
                className="text-xl md:text-2xl text-center md:text-left my-2 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                We benefit companies to re-examine their benefit plans, Which
                makes them more efficient and Which saves there time and money
                while improving efficiencies.
              </p>
              <button
                className=" mt-6 px-8 py-3 text-white bg-blue-600 rounded shadow-xl tracking-wider wow fadeInUp"
                data-wow-delay="0.8s"
              >
                Connect with us
                <i className="fas fa-arrow-right ml-2"></i>
              </button>
            </div>
            <div className="flex col-span-2 md:col-span-1">
              <img className="mx-auto wow zoomIn" src={IntroImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
