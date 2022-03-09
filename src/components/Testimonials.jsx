import React, { useRef, useEffect } from "react";

const Testimonials = ({ setTestimonialsRef }) => {
  const testimonialsRef = useRef(null);

  useEffect(() => {
    setTestimonialsRef(testimonialsRef);
  }, []);

  return (
    <div
      className="max-w-7xl mx-auto pt-16"
      id="testimonials"
      ref={testimonialsRef}
    >
      <div class="mb-8 text-center">
        <h1 className="text-center text-gray-800 tracking-wider uppercase wow fadeInUp">
          Testimonials
        </h1>
        <h1 className="text-center text-4xl font-bold text-green-900 wow fadeInUp">
          What others say about us
        </h1>
      </div>
      <div class="lg:grid lg:grid-cols-3 lg:gap-x-2">
        <div class="p-4 text-gray-800 rounded-lg shadow-md mt-10">
          <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique sapiente iusto esse. "
            </p>
            <div class="flex flex-col items-center justify-center">
              <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-green-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg"
                  alt="img"
                  class="object-cover object-center w-full h-full"
                />
              </div>
              <h5 class="font-bold text-green-600">John Doe</h5>
              <p class="text-sm text-gray-600">CEO / Founder</p>
            </div>
          </div>
        </div>
        <div class="p-4 text-gray-800 rounded-lg shadow-md mt-10">
          <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique sapiente iusto esse. "
            </p>
            <div class="flex flex-col items-center justify-center">
              <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-green-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
                  alt="img"
                  class="object-cover object-center w-full h-full"
                />
              </div>
              <h5 class="font-bold text-green-600">michael james</h5>
              <p class="text-sm text-gray-600">web developer</p>
            </div>
          </div>
        </div>
        <div class="p-4 text-gray-800 rounded-lg shadow-md mt-10">
          <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique sapiente iusto esse. "
            </p>
            <div class="flex flex-col items-center justify-center">
              <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-green-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
                  alt="img"
                  class="object-cover object-center w-full h-full"
                />
              </div>
              <h5 class="font-bold text-green-600">michael james</h5>
              <p class="text-sm text-gray-600">web developer</p>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:grid lg:grid-cols-3 lg:gap-x-2">
        <div class="p-4 text-gray-800 rounded-lg shadow-md mt-10">
          <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique sapiente iusto esse. "
            </p>
            <div class="flex flex-col items-center justify-center">
              <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-green-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg"
                  alt="img"
                  class="object-cover object-center w-full h-full"
                />
              </div>
              <h5 class="font-bold text-green-600">John Doe</h5>
              <p class="text-sm text-gray-600">CEO / Founder</p>
            </div>
          </div>
        </div>
        <div class="p-4 text-gray-800 rounded-lg shadow-md mt-10">
          <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique sapiente iusto esse. "
            </p>
            <div class="flex flex-col items-center justify-center">
              <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-green-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
                  alt="img"
                  class="object-cover object-center w-full h-full"
                />
              </div>
              <h5 class="font-bold text-green-600">michael james</h5>
              <p class="text-sm text-gray-600">web developer</p>
            </div>
          </div>
        </div>
        <div class="p-4 text-gray-800 rounded-lg shadow-md mt-10">
          <div class="mb-2">
            <p class="mb-2 text-center text-gray-600 ">
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique sapiente iusto esse. "
            </p>
            <div class="flex flex-col items-center justify-center">
              <div class="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-green-100 rounded-full">
                <img
                  src="https://cdn.pixabay.com/photo/2021/07/14/17/32/manager-6466713__340.jpg"
                  alt="img"
                  class="object-cover object-center w-full h-full"
                />
              </div>
              <h5 class="font-bold text-green-600">michael james</h5>
              <p class="text-sm text-gray-600">web developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
