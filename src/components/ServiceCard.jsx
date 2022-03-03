import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ icon, title, description, link }) => {
  const navigate = useNavigate();

  return (
    <div
      class="bg-green-800 text-center pt-5 pb-10 m-4 opacity-80 hover:opacity-100 text-white wow fadeIn"
      data-wow-duration="2s"
      style={{ visibility: "visible", animationDuration: "2s" }}
    >
      <i class={`${icon} text-gray-300 text-7xl pt-2`}></i> <br />
      <h1 class="tracking-widest my-2 uppercase">{title}</h1>
      <hr style={{ width: "20%", margin: "auto" }} />
      <p class="text-justify px-10 md:px-16 lg:px-16 xl:px-16 mt-5">
        {description}
      </p>
      <button
        onClick={() => {
          navigate(link);
        }}
        className="mt-3 bg-transparent hover:bg-gray-100 text-white hover:text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow"
      >
        Read More
      </button>
    </div>
  );
};

export default ServiceCard;
