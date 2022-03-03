import React from "react";
import Intro from "../components/Intro";
import introImage from "../assets/manpower.jpg";
import OnlineInvigilationServicesContent from "../components/OnlineInvigilationServicesContent";

const OnlineInvigilationServices = () => {
  return (
    <>
      <Intro heading="Online Invigilation Services" image={introImage} />
      <OnlineInvigilationServicesContent />
    </>
  );
};

export default OnlineInvigilationServices;
