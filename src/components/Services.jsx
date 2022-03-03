import React, { useEffect, useRef } from "react";
import feature from "../assets/features.png";
import ServiceCard from "./ServiceCard";

const Services = ({ setServicesRef }) => {
  const servicesRef = useRef(null);

  useEffect(() => {
    setServicesRef(servicesRef);
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto pt-16" id="services" ref={servicesRef}>
        <h1 className="text-center text-gray-800 tracking-wider uppercase wow fadeInUp">
          Services
        </h1>
        <h1 className="text-center text-4xl font-bold text-green-900 wow fadeInUp">
          What Can We Provide ?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 py-10">
          <div className="">
            <ServiceCard
              title="Manpower Services"
              description="Able to work on the front end to design beautiful UI/UX for Web Applications/ Websites."
              icon="fa fa-users"
              link="/manpower-services"
            />
          </div>
          <div className="">
            <ServiceCard
              title="Facility Management"
              description="Able to work on the front end to design beautiful UI/UX for Web Applications/ Websites."
              icon="fas fa-building"
              link="/facility-management"
            />
          </div>
          <div className="">
            <ServiceCard
              title="Surveying and Mapping"
              description="Able to work on the front end to design beautiful UI/UX for Web Applications/ Websites."
              icon="fas fa-location-dot"
              link="/surveying-and-mapping"
            />
          </div>
          <div className="">
            <ServiceCard
              title="Online Invigilation Services"
              description="Able to work on the front end to design beautiful UI/UX for Web Applications/ Websites."
              icon="fas fa-graduation-cap"
              link="/online-invigilation-services"
            />
          </div>
          <div className="">
            <ServiceCard
              title="GIS"
              description="Able to work on the front end to design beautiful UI/UX for Web Applications/ Websites."
              icon="fas fa-map-location-dot"
              link="/gis"
            />
          </div>
          <div className="">
            <ServiceCard
              title="Customize Software"
              description="Able to work on the front end to design beautiful UI/UX for Web Applications/ Websites."
              icon="fas fa-desktop"
              link="/customize-software"
            />
          </div>
        </div>

        {/* <div className="px-4 md:px-0 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 py-10">
            <div className="flex col-span-2 md:col-span-1 mt-5">
              <img className="mx-auto wow zoomIn" src={feature} alt="" />
            </div>
            <div className="col-span-2 md:col-span-1 px-0 md:px-10 mt-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <ServiceCard title="E-commerce" />
                <ServiceCard title="Proctoring" />
                <ServiceCard title="Web Desigining" />
                <ServiceCard title="Due digilence" />
                <ServiceCard title="Business Development" />
                <ServiceCard title="On Field Audit" />
                <ServiceCard title="Tele Calling" />
                <ServiceCard title="On field Invigilation" />
                <ServiceCard title="Ed-Tech" />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Services;
