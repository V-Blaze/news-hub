import React from 'react';

// ICONS
import {
  AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt,
} from 'react-icons/ai';

// Assets
import { heroIMG } from '../assets/images';

const Details = () => (
  <>
    <section className="w-full p-14 bg-slate-400 ">
      <div className="flex flex-col gap-8 text-white">
        <div className="text-white font-semibold flex gap-4">
          <span>Inovation</span>
          <span>2hrs ago</span>
        </div>
        <div className=" w-full">
          <h1 className="font-semibold font-serif text-3xl md:text-7xl w-[95%] md:w-[80%]">
            Charge Two Devices at the Same Time With This Magnetic Wireless Charging Dock
          </h1>
        </div>
        <div className="flex gap-3 items-center">
          <img src={heroIMG} alt="author" className="h-[48px] w-[48px] rounded-full" />
          <span className="font-mono font-semibold italic text-lg"> Valentine Blaze</span>
        </div>
        <div className="flex gap-7">
          <span>
            <AiOutlineHeart />
            80k
          </span>
          <span>
            <AiOutlineComment />
            237
          </span>
          <span>
            <AiOutlineShareAlt />
            94
          </span>
        </div>
      </div>
    </section>
    <section className="w-full p-14">
      <div className="flex flex-col items-center gap-4">
        <img src={heroIMG} alt="news" className="w-[90%] md:h-[520px] rounded-lg" />
        <h4 className="font-semibold font-mono ">
          In a sign of confidence that the worst of Sri Lanka&apos;s financial crisis is over,
          its central bank surprised markets by
          cutting interest rates for the first time in three years on Thursday,
          signalling a change of course to fuel a rebound in the economy.
        </h4>
        <br />
        <p>
          COLOMBO, June 1 (Reuters) - In a sign of confidence that the worst
          of Sri Lanka&apos;s financial crisis is over, its central bank surprised markets by
          cutting interest rates for the first time in three ye
          Birth rates have declined in most states across the US in recent years,
          while women are having babies at
          an older age, according to new data released by the US Centers for Disease
          Control and Prevent
        </p>
      </div>
      <button
        type="button"
        className="bg-[#366BD9] px-6 py-3 text-white rounded-lg hover:bg-opacity-[80%] mt-9 "
      >
        News Source
      </button>
    </section>
  </>
);

export default Details;
