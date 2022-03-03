import React from "react";
import { useNavigate } from "react-router-dom";

const Intro = ({ image, heading }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className=" py-24 text-white"
        style={{
          backgroundImage: `linear-gradient(
          to bottom left,
          rgb(0, 0, 0),
          rgba(59, 255, 164, 0.80)
        ),url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="ml-0 md:ml-32 sm:ml-32 lg:ml-32 xl:ml-32 text-center md:text-left sm:text-left lg:text-left xl:text-left">
            <h1 className="text-5xl mb-3 wow fadeIn" data-wow-duration="2s">
              {heading}
            </h1>
            <h1 className="wow fadeInLeft" data-wow-duration="2s">
              <span
                className="cursor-pointer hover:opacity-70"
                onClick={() => {
                  navigate("/");
                }}
              >
                <i className="fas fa-home"></i> Home
              </span>
              <span className="mx-2">/</span>
              <span className="cursor-pointer hover:opacity-70 opacity-60">
                {heading}
              </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
