import React, { useEffect, useRef } from "react";
import LandingImage from "../assets/landing.jpg";
import IntroImage from "../assets/intro.png";

const Landing = ({ setHomeRef, contactRef }) => {
  const homeRef = useRef(null);

  useEffect(() => {
    setHomeRef(homeRef);
  }, []);

  return (
    <div
      className="bg-fixed bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${LandingImage})` }}
      id="home"
      ref={homeRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="px-10 md:px-0 py-6">
          <div className="grid grid-cols-2 py-32">
            <div className="text-gray-200 col-span-2 md:col-span-1 py-10">
              <h1 className="font-bold text-3xl md:text-5xl wow fadeInUp">
                "Geo Imagination, Diffusion in Motion"
              </h1>
              <p
                className="text-xl md:text-xl text-center md:text-left mt-8 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                GAI Perspective can advise on the most appropriate sources and
                formats of GIS mapping data for a particular project.
              </p>
              <p
                className="text-xl md:text-xl text-center md:text-left my-2 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                The data required for use in a typical GIS mapping data exercise
                may include; base mapping at different scales, aerial imagery,
                overlay data such as postcode boundaries or census data or
                client specific data relevant to the project.
              </p>
              <button
                className=" mt-6 px-8 py-3 text-white bg-green-600 rounded shadow-xl tracking-wider wow fadeInUp"
                data-wow-delay="0.8s"
                onClick={() => {
                  contactRef.current.scrollIntoView();
                }}
              >
                Write Us
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
