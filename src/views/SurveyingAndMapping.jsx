import React from "react";
import Intro from "../components/Intro";
import introImage from "../assets/intro.png";
import SurveyingAndMappingContent from "../components/SurveyingAndMappingContent";

const SurveyingAndMapping = () => {
  return (
    <>
      <Intro heading="Surveying And Mapping" image={introImage} />
      <SurveyingAndMappingContent />
    </>
  );
};

export default SurveyingAndMapping;
