import React from "react";

const Card = ({ image, heading, description, reverse = false }) => {
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg my-20">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {!reverse && (
            <div
              className="relative h-100 w-full flex items-end justify-start text-left bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(
                    to bottom left,
                    rgb(0, 0, 0, 0.4),
                    rgba(0, 136, 41, 0.80)
                  ),url(${image})`,
              }}
            >
              <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
              <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                <a className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">
                  Service
                </a>
                <div className="text-white font-regular flex flex-col justify-start">
                  <span className="text-3xl leading-0 font-semibold">1</span>
                </div>
              </div>
              <main className="p-5 z-10">
                <p className="text-md tracking-tight font-medium leading-7 font-regular text-white ">
                  Geo Arc India
                </p>
              </main>
            </div>
          )}
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{heading}</div>
            <p className="text-gray-700 text-base text-justify">
              {description}
            </p>
          </div>
          {reverse && (
            <div
              className="relative h-100 w-full flex items-end justify-start text-left bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(
                    to bottom left,
                    rgb(0, 0, 0, 0.4),
                    rgba(0, 136, 41, 0.80)
                  ),url(${image})`,
              }}
            >
              <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b from-transparent to-gray-900"></div>
              <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center">
                <a className="text-xs bg-indigo-600 text-white px-5 py-2 uppercase hover:bg-white hover:text-indigo-600 transition ease-in-out duration-500">
                  Politics
                </a>
                <div className="text-white font-regular flex flex-col justify-start">
                  <span className="text-3xl leading-0 font-semibold">1</span>
                </div>
              </div>
              <main className="p-5 z-10">
                <p className="text-md tracking-tight font-medium leading-7 font-regular text-white ">
                  Geo Arc India
                </p>
              </main>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
