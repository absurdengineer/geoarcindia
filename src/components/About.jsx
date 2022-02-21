import React from "react";
import service1 from "../assets/values-1.png";
import service2 from "../assets/values-2.png";
import service3 from "../assets/values-3.png";

const About = ({ setAbout }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-16">
        <h1 className="text-center text-gray-800 tracking-wider uppercase wow fadeInUp">
          About Us
        </h1>
        <h1 className="text-center text-4xl font-bold text-green-900 wow fadeInUp">
          Key to our success
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group bg-white rounded border shadow-xl p-10 max-w-lg hover:shadow-2xl my-8 wow fadeInUp">
            <div className="flex flex-col items-center space-y-4">
              <img
                src={service1}
                className="transition transform duration-1000 group-hover:scale-95 z-0"
                alt=""
              />
              <h1 className="font-bold text-2xl text-green-900 text-center uppercase">
                Virtuous Work
              </h1>
              <p className="text-gray-700 text-center">
                We provide quality work at good price. Our client should satisfy
                with our work.
              </p>
            </div>
          </div>
          <div className="group bg-white rounded border shadow-xl p-10 max-w-lg hover:shadow-2xl my-8 wow fadeInUp">
            <div className="flex flex-col items-center space-y-4">
              <img
                src={service2}
                className="transition transform duration-1000 group-hover:scale-95 z-0"
                alt=""
              />
              <h1 className="font-bold text-2xl text-green-900 text-center uppercase">
                CLIENT'S
              </h1>
              <p className="text-gray-700 text-center">
                We maintain a good, positive and long-term relation with
                client's.
              </p>
            </div>
          </div>
          <div className="group bg-white rounded border shadow-xl p-10 max-w-lg hover:shadow-2xl my-8 wow fadeInUp">
            <div className="flex flex-col items-center space-y-4">
              <img
                src={service3}
                className="transition transform duration-1000 group-hover:scale-95 z-0"
                alt=""
              />
              <h1 className="font-bold text-2xl text-green-900 text-center uppercase">
                DEDICATED WORK FORCE
              </h1>
              <p className="text-gray-700 text-center">
                Our Work-Force do not miss any crucial details of your business
                needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
