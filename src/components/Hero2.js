import React from 'react';

// Assets
// import { heroIMG } from '../assets/images';
import { wave, heroIMG } from '../assets/images';

const Hero = () => (
  <section className="w-full ">
    {/* <div className="w-full grid grid-cols-2 gap-4 bg-[#d8deff] px-4 pt-6 h-[60vh]"> */}
    <div className="w-full flex gap-4 bg-[#d8deff] px-4 pt-6">
      <div className="relative h-fit w-full">
        <img src={heroIMG} alt="hero" />
        <div className="absolute bottom-[8px] left-[0px] bg-opacity-[70%] bg-gray-400 rounded-lg p-2 w-full">
          <span>7 hrs ago</span>
          <h2 className="text-white font-semibold font-mono">
            Be fearless in front of them with your ideas as many times as they’ll let you
          </h2>
        </div>
      </div>
      <div className=" text-white justify-center">
        <div className="hidden lg:block mb-4 relative h-[35%]">
          <img src={heroIMG} alt="hero" className="h-[95%] w-full" />
          <h2 className="absolute bottom-[8px] left-[0px] bg-opacity-[70%] bg-gray-400 rounded-lg p-2 w-full">
            I think it made me think about it more and really
            consider why I was choosing to add this to my routine
          </h2>
        </div>
        <div className="flex flex-col justify-center items-center w-full gap-2 font-sans text-gray-700 font-semibold p-[5%]">
          <h3>
            The increase in overall pollution that the planet has seen
            during the past few years has impacted the planet in such a way that
            it caused a ripple effect to happen in various domains.
            This is exactly why right now is the moment in which all of us must act,
            and this needs to reflect in both our
          </h3>
          <button type="button" className="bg-[#366BD9] px-6 py-2 mt-6 rounded text-white">
            Read more
          </button>
        </div>
      </div>
    </div>
    <img src={wave} alt="wave background" />
  </section>
);

export default Hero;
