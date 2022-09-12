import React, { useEffect, useRef } from "react";
import service1 from "../assets/values-1.png";
import service2 from "../assets/values-2.png";
import service3 from "../assets/values-3.png";
import ContactCard from "../assets/Portal/Total_Station.jpg"

const About = ({ setAboutRef }) => {
  const aboutRef = useRef(null);

  useEffect(() => {
    setAboutRef(aboutRef);
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto pt-16" id="about" ref={aboutRef}>
        <h1 className="text-center text-gray-800 tracking-wider uppercase wow fadeInUp">
          About Us
        </h1>
        <h1 className="text-center text-4xl font-bold text-green-900 wow fadeInUp">
          Who We Are?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-8">
          <div className="flex flex-row items-end place-content-end px-5">
            <img
              src={ContactCard}
              className="object-fill h-56 w-80 rounded"
            />
          </div>
          <div className="text-justify md:col-span-2 px-5">
            <h3 class="text-2xl my-2 text-green-600">
              About Geo Arc India Pvt. Ltd.
            </h3>
            GEO ARC INDIA is an IT Enabled Services company with the vision to
            be a successful service enterprise which encourages leadership and
            commands the admiration of our customers and employees. We offer
            various types of roll out services across various technical domains.
            <br />
            The core philosophy at RTNS is to meet customer requirements
            accurately within exacting deadlines. Committed to this belief, we
            offer you the best industry standards and dependable support. Our
            work has been highly appreciated by a number of large and small
            clients, both international and national, in various industries for
            exceptional performance and quality services in the fields of
            Networking, Applications, IT Security, GIS & RS Services, DGPS
            Survey, Customer Service, Data Digitization, Digital Marketing &
            Custom Software.
          </div>
        </div>
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
