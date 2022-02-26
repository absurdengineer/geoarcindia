import React, { useEffect, useRef } from "react";

const WorkFlow = ({ setWorkflowRef }) => {
  const workflowRef = useRef(null);

  useEffect(() => {
    setWorkflowRef(workflowRef);
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto pt-16" id="workflow" ref={workflowRef}>
        <h1 className="text-center text-4xl mb-10 font-bold text-green-900 wow fadeInUp">
          How Do We Do ?
        </h1>
        <div className="hidden md:block my-4 p-4 wow fadeInUp">
          <div className="flex items-center">
            <div className="flex items-center text-green-900 relative">
              <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-green-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bookmark "
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-green-900">
                <h5 className="font-bold">STEP 1</h5>
                <p className="mt-1 text-gray-800">
                  DISCUSSING THE PROJECT WITH THE CLIENT
                </p>
              </div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-green-900"></div>
            <div className="flex items-center text-green-900 relative">
              <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-green-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bookmark "
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-green-900">
                <h5 className="font-bold">STEP 2</h5>
                <p className="mt-1 text-gray-800">
                  PLANING ACCORDING TO THE REQUIREMENT
                </p>
              </div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-green-900"></div>
            <div className="flex items-center text-green-900 relative">
              <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-green-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bookmark "
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-green-900">
                <h5 className="font-bold">STEP 3</h5>
                <p className="mt-1 text-gray-800">HIRING SAILORS ACCORDINGLY</p>
              </div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-green-900"></div>
            <div className="flex items-center text-green-900 relative">
              <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-green-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bookmark "
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-green-900">
                <h5 className="font-bold">STEP 4</h5>
                <p className="mt-1 text-gray-800">
                  TRAINING AS PER THE TASK
                </p>
              </div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-green-900"></div>
            <div className="flex items-center text-green-900 relative">
              <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-green-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bookmark "
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-green-900">
                <h5 className="font-bold">STEP 5</h5>
                <p className="mt-1 text-gray-800">DEPLOYING THEM TO EXECUTE</p>
              </div>
            </div>
            <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-green-900"></div>
            <div className="flex items-center text-green-900 relative">
              <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-green-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-bookmark "
                >
                  <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-green-900">
                <h5 className="font-bold">STEP 6</h5>
                <p className="mt-1 text-gray-800">DELIVERING QUALITY RESULTS</p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 block md:hidden wow fadeInUp">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex">
              <div className="flex flex-cols items-center justify-center py-4">
                <div className="rounded-full flex bg-green-900 text-white h-14 w-14">
                  <i className="fas fa-bookmark fa-lg m-auto"></i>
                </div>
                <div className="p-4">
                  <h6 className="uppercase">Step - 1</h6>
                  <h6 className="text-gray-500">
                    DISCUSSING THE PROJECT WITH THE CLIENT
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-cols items-center justify-center py-4">
                <div className="rounded-full flex bg-green-900 text-white h-14 w-14">
                  <i className="fas fa-bookmark fa-lg m-auto"></i>
                </div>
                <div className="p-4">
                  <h6 className="uppercase">STEP - 2</h6>
                  <h6 className="text-gray-500">
                    PLANING ACCORDING TO THE REQUIREMENT
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-cols items-center justify-center py-4">
                <div className="rounded-full flex bg-green-900 text-white h-14 w-14">
                  <i className="fas fa-bookmark fa-lg m-auto"></i>
                </div>
                <div className="p-4">
                  <h6 className="uppercase">Step - 3</h6>
                  <h6 className="text-gray-500">HIRING SAILORS ACCORDINGLY</h6>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-cols items-center justify-center py-4">
                <div className="rounded-full flex bg-green-900 text-white h-14 w-14">
                  <i className="fas fa-bookmark fa-lg m-auto"></i>
                </div>
                <div className="p-4">
                  <h6 className="uppercase">Step - 4</h6>
                  <h6 className="text-gray-500">
                    TRAINING AS PER THE TASK
                  </h6>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-cols items-center py-4">
                <div className="rounded-full flex bg-green-900 text-white h-14 w-14">
                  <i className="fas fa-bookmark fa-lg m-auto"></i>
                </div>
                <div className="p-4">
                  <h6 className="uppercase">Step - 5</h6>
                  <h6 className="text-gray-500">DEPLOYING THEM TO EXECUTE</h6>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-cols items-center py-4">
                <div className="rounded-full flex bg-green-900 text-white h-14 w-14">
                  <i className="fas fa-bookmark fa-lg m-auto"></i>
                </div>
                <div className="p-4">
                  <h6 className="uppercase">Step - 6</h6>
                  <h6 className="text-gray-500">DELIVERING QUALITY RESULTS</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkFlow;
