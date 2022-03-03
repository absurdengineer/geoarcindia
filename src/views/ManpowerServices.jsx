import React from "react";
import Intro from "../components/Intro";
import introImage from "../assets/manpower.jpg";
import ManpowerServicesContent from "../components/ManpowerServicesContent";

const ManpowerServices = ({ title }) => {
  return (
    <>
      <Intro heading="Manpower Services" image={introImage} />
      <ManpowerServicesContent />
    </>
  );
};

export default ManpowerServices;
