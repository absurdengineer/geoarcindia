import React from "react";
import GISContent from "../components/GISContent";
import Intro from "../components/Intro";
import introImage from "../assets/manpower.jpg";

const GIS = () => {
  return (
    <>
      {" "}
      <Intro heading="GIS" image={introImage} />
      <GISContent />
    </>
  );
};

export default GIS;
