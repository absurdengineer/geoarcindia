import React from "react";
import Card from "./Card";
import image1 from "../assets/Gis-1.jpg";
import image2 from "../assets/gis-2.jpg";
import image3 from "../assets/gis-3.jpg";

const GISContent = () => {
  return (
    <div className=" pt-24 pb-12 text-black">
      <div className="max-w-7xl mx-auto">
        <Card
          image={image1}
          heading="Geomatics Services"
          description="We offer a full spectrum of GIS/RS services and solutions, ranging from Spatial Data Mapping & Analysis to Document management /archiving & Physical Survey. Our Credential encompasses around satisfying esteemed clients with solution varying from Utility/Facility/Social Mapping, Web GIS Based MIS generation Suitable Site Selection, Problem Area Identification to Data Archiving and retrieval.
          "
        />
        <Card
          image={image2}
          reverse={true}
          heading="Data Conversion"
          description="Scanning / Digitizing / Vectorization.
                      Cartographic & Map Layout Generation.
                      E-Book Creation.
                      Data Entry and Tabulation.
                      Image Conversion through OCR.(Optical Character recognition)
          ."
        />
        <Card
          image={image3}
          heading="Data Management"
          description="Geo-database creation & Management.
          Document Management System (DMS).
          Database Update service."
        />
        <p className="text-justify">
         Geo Arc India Pvt. Ltd. can advise on the most appropriate sources and formats of GIS mapping data for a particular project.
         The data required for use in a typical GIS mapping data exercise may include; base mapping at different scales,
          aerial imagery, overlay data such as postcode boundaries or census data or client specific data relevant to the project.
        </p>
      </div>
    </div>
  );
};

export default GISContent;
