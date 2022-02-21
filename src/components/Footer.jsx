import React from "react";
import footerBg from "../assets/footer-bg.png";
import logo from "../assets/geo-icon.png";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-white pt-2 border-t-2 border-green-700">
        <div
          className="bg-cover bg-no-repeat h-full py-6"
          style={{ background: `url(${footerBg}) ` }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="col-span-2 px-10 md:px-0 wow fadeInUp">
                <span className="font-bold text-gray-700 uppercase mb-2 text-3xl flex items-center">
                  <img src={logo} className="h-14" alt="Logo" /> Geoarc India
                </span>
                <p className="text-justify pr-6">
                  We benefit companies to re-examine their benefit plans, Which
                  makes them more efficient and Which saves there time and money
                  while improving efficiencies.
                </p>
              </div>
              <div className="px-8 md:px-0 wow fadeInUp">
                <p className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                  Useful Links
                </p>
                <div className="text-gray-700 mt-4 md:mt-0 mb-2">
                  <p className="text-sm text-green-800 my-2 cursor-pointer">
                    <i className="fas fa-greater-than mr-1 font-light text-gray-400 font-light text-gray-400     "></i>
                    Home
                  </p>
                  <p className="text-sm text-green-800 my-2 cursor-pointer">
                    <i className="fas fa-greater-than mr-1 font-light text-gray-400 font-light text-gray-400     "></i>
                    About
                  </p>
                  <p className="text-sm text-green-800 my-2 cursor-pointer">
                    <i className="fas fa-greater-than mr-1 font-light text-gray-400 font-light text-gray-400     "></i>
                    Services
                  </p>
                  <p className="text-sm text-green-800 my-2 cursor-pointer">
                    <i className="fas fa-greater-than mr-1 font-light text-gray-400 font-light text-gray-400     "></i>
                    Careers
                  </p>
                  <p className="text-sm text-green-800 my-2 cursor-pointer">
                    <i className="fas fa-greater-than mr-1 font-light text-gray-400 font-light text-gray-400     "></i>
                    Internship
                  </p>
                  <p className="text-sm text-green-800 my-2 cursor-pointer">
                    <i className="fas fa-greater-than mr-1 font-light text-gray-400 font-light text-gray-400     "></i>
                    Community
                  </p>
                  <p className="text-sm text-green-800 my-2 cursor-pointer">
                    <i className="fas fa-greater-than mr-1 font-light text-gray-400 font-light text-gray-400     "></i>
                    Contact
                  </p>
                </div>
              </div>
              <div className="px-8 md:px-0 wow fadeInUp">
                <p className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                  Our Services
                </p>
                <div className="text-gray-700 mt-4 md:mt-0 mb-2">
                  <p className="text-sm text-green-800 my-2 cursor-pointer">
                    <i className="fas fa-greater-than mr-1  font-light text-gray-400 "></i>
                    Invigilation
                  </p>
                  <p className="text-sm text-green-800 my-2 cursor-pointer">
                    <i className="fas fa-greater-than mr-1 font-light text-gray-400  "></i>
                    Web Development
                  </p>
                  <p className="text-sm text-green-800 my-2 cursor-pointer">
                    <i className="fas fa-greater-than mr-1  font-light text-gray-400  "></i>
                    Product Management
                  </p>
                  <p className="text-sm text-green-800 my-2 cursor-pointer">
                    <i className="fas fa-greater-than mr-1   font-light text-gray-400"></i>
                    Marketing
                  </p>
                </div>
              </div>
              <div className="col-span-2 md:col-span-1 text-center md:text-left wow fadeInUp">
                <p className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                  Contact Us
                </p>
                <div className="text-gray-700 mt-4 md:mt-0 mb-2">
                  <p className="text-sm text-black my-2">
                    Ranchi <br />
                    JHARKHAND, JH 831001 <br /> INDIA
                  </p>
                  <p className="text-sm font-bold text-gray-800 mt-5">
                    <i className="fab fa-whatsapp    "></i> Whatsapp :
                  </p>
                  <p className="text-sm text-green-800 my-2 cursor-pointer">
                    <a target="_blank" href="https://wa.me/+917004749343">
                      +91 700 4749 343
                    </a>
                  </p>
                  <p className="text-sm text-green-800 my-2 cursor-pointer">
                    <a target="_blank" href="https://wa.me/+917004749343">
                      +91 700 4749 343
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="border-t-2 border-gray-300 flex flex-col items-center wow fadeInUp">
            <div className="sm:w-2/3 text-center py-6">
              <a
                href="https://www.webformulator.com/"
                target="_blank"
                className="text-sm text-black mb-2 credits text-xl"
              >
                <i className="fas fa-code text-yellow-300   "></i> Developed
                with
                <i className="fas fa-heart text-red-600   "></i> by Md. Dilshad
                Alam
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
