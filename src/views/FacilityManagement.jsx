import React from "react";
import FacilityManagementContent from "../components/FacilityManagementContent";
import Intro from "../components/Intro";
import introImage from "../assets/intro.png";

const FacilityManagement = () => {
  return (
    <>
      <Intro heading="FacilityManagement" image={introImage} />
      <FacilityManagementContent />
    </>
  );
};

export default FacilityManagement;
