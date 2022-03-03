import React from "react";
import CustomizeSoftwareContent from "../components/CustomizeSoftwareContent";
import Intro from "../components/Intro";
import introImage from "../assets/intro.png";

const CustomizeSoftware = () => {
  return (
    <>
      <Intro heading="Customize Software" image={introImage} />
      <CustomizeSoftwareContent />
    </>
  );
};

export default CustomizeSoftware;
