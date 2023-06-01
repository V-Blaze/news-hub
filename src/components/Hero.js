import React from 'react';

// Componenets
import PopularNewsCard from './PopularNewsCard';

// Assets
import { heroIMG } from '../assets/images';

const Hero = () => {
  const PopularNews = [
    {
      category: 'Science',
      time: '2 Hours Ago',
      slug: '7 Ways You Can Reduce Climate Change',
      image: heroIMG,
    },
    {
      category: 'Inovation',
      time: '4 Hours Ago',
      slug: '7 Ways You Can Reduce Climate Change',
      image: heroIMG,
    },
    {
      category: 'Tech',
      time: '1 Hours Ago',
      slug: '7 Ways You Can Reduce Climate Change',
      image: heroIMG,
    },
    {
      category: 'Science',
      time: '1 Mins Ago',
      slug: '7 Ways You Can Reduce Climate Change',
      image: heroIMG,
    },
    {
      category: 'Science',
      time: '6 Mins Ago',
      slug: '7 Ways You Can Reduce Climate Change',
      image: heroIMG,
    },
  ];

  return (

    <section className="grid grid-cols-1 lg:grid-cols-3 w-full p-8 bg-slate-400 gap-4">
      <div className="flex flex-col gap-5 col-span-2 text-white">
        <div className="text-white flex gap-4">
          <span>Inovation</span>
          <span>2hrs ago</span>
        </div>
        <div className=" w-full">
          <h1 className="font-semibold font-serif text-7xl w-[95%] md:w-[80%]">
            Charge Two Devices at the Same Time With This Magnetic Wireless Charging Dock
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex flex-col gap-2 border-2 border-l-4 border-[#366BD9] rounded-lg p-3 hover:bg-slate-500">
            <img src={heroIMG} alt="news" className="h-[84px] w-[114px] rounded-lg" />
            <p className=" font-mono text-sm hover:underline hover:cursor-pointer">
              Charge Two Devices at the Same Time With This Magnetic Wireless Charging Dock
            </p>
          </div>
          <div className="hidden md:flex flex-col gap-2 border-2 border-[#366BD9] rounded-lg p-3 hover:bg-slate-500">
            <img src={heroIMG} alt="news" className="h-[84px] w-[114px] rounded-lg" />
            <p className=" font-mono">
              Charge Two Devices at the Same Time With This Magnetic Wireless Charging Dock
            </p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-start flex-col text-white">
        <h2 className="font-serif font-semibold text-2xl mb-4">Popular this week</h2>
        <div className="flex flex-col gap-3">
          {PopularNews.map((newsItem) => (
            <PopularNewsCard
              newsItem={newsItem}
              key={newsItem.time}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
