import React from "react";
import { BsEmojiSmile, BsHeadset } from "react-icons/bs";
import { RiBookReadLine } from "react-icons/ri";
import { HiOutlineUsers } from "react-icons/hi";

const Achievements = () => {
  return (
    <div className="max-w-7xl mx-auto pt-16 mt-10 wow fadeInUp">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow-xl border p-8 w-3xl">
          <div className="flex justify-center items-center">
            <div className="w-1/5">
              <BsEmojiSmile className="text-5xl text-blue-600" />
            </div>
            <div className="w-4/5 px-4">
              <div className="text-4xl text-green-900 font-bold">20</div>
              <div className="font-semibold">Happy Clients</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-xl border p-8 w-3xl">
          <div className="flex justify-center items-center">
            <div className="w-1/5">
              <RiBookReadLine className="text-5xl text-orange-500" />
            </div>
            <div className="w-4/5 px-4">
              <div className="text-4xl text-green-900 font-bold">1000</div>
              <div className="font-semibold">Projects</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-xl border p-8 w-3xl">
          <div className="flex justify-center items-center">
            <div className="w-1/5">
              <BsHeadset className="text-5xl text-green-500" />
            </div>
            <div className="w-4/5 px-4">
              <div className="text-4xl text-green-900 font-bold">8105</div>
              <div className="font-semibold">Hours Of Support</div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-xl border p-8 w-3xl">
          <div className="flex justify-center items-center">
            <div className="w-1/5">
              <HiOutlineUsers className="text-5xl text-red-500" />
            </div>
            <div className="w-4/5 px-4">
              <div className="text-4xl text-green-900 font-bold">5000</div>
              <div className="font-semibold">Hard Workers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
