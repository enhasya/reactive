import React from "react";

const {
  default: LearnMore,
} = require("../../shared/icons/file-05-white.svg");
const {
  default: YourData,
} = require("../../shared/icons/shield-check-white.svg");

const Reactive = () => {
  return (
    <div className="bg-transparent lg:bg-black/5 backdrop-blur-lg flex flex-col w-full items-start justify-between lg:w-[360px] h-auto lg:h-[560px] p-0 lg:p-8 ring-0 lg:ring-1 lg:ring-black/10 rounded-none lg:rounded-l-lg">
      <div className="flex flex-col w-full h-auto gap-0 items-start">
        <h1 className="text-blue-600 font-bold text-lg tracking-tight leading-relaxed mt-0">
          REACTIVE: Revolutionizing Social Networking
        </h1>
        <h2 className="text-black/80 font-medium text-xs tracking-tight leading-relaxed mt-4">
          In a world where connectivity is paramount, REACTIVE stands out as a
          revolutionary platform that combines cutting-edge technology with
          intuitive design to create a vibrant and engaging social ecosystem.
        </h2>
      </div>
      <div className="flex flex-row w-full h-auto gap-4 items-center mt-4 lg:mt-0">
        <button className="bg-black/95 hover:bg-black/75 transition-all flex flex-row gap-4 w-full items-center justify-center p-4 rounded-lg ring-1 ring-black/10 hover:ring-black/20 mt-0">
          <img src={LearnMore} width="14" height="14" alt="LearnMore" />
          <p className="text-white font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
            Learn More
          </p>
        </button>
        <button className="bg-black/95 hover:bg-black/75 transition-all flex flex-row gap-4 w-full items-center justify-center p-4 rounded-lg ring-1 ring-black/10 hover:ring-black/20 mt-0">
          <img
            src={YourData}
            width="14"
            height="14"
            alt="YourData"
          />
          <p className="text-white font-bold text-xs text-start tracking-tight leading-relaxed mt-0">
            Your Data
          </p>
        </button>
      </div>
    </div>
  );
};

export default Reactive;
