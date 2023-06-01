import React from 'react';

// Components
import { Hero, NewsCard } from '../components';

// Assets
import { heroIMG } from '../assets/images';

const Home = () => {
  const news = [
    {
      image: heroIMG,
      category: 'Tech',
      slug: 'Charge two decies at the same time with this woreless charging dock',
      author: 'Blaze',
      time: '5 days ago',
    },
    {
      image: heroIMG,
      category: 'Science',
      slug: 'Charge two decies at the same time with this woreless charging dock',
      author: 'Blaze',
      time: '3 days ago',
    },
    {
      image: heroIMG,
      category: 'Tech',
      slug: 'Charge two decies at the same time with this woreless charging dock',
      author: 'Blaze',
      time: '1 days ago',
    },
    {
      image: heroIMG,
      category: 'Tech',
      slug: 'Charge two decies at the same time with this woreless charging dock',
      author: 'Blaze',
      time: '5 hrs ago',
    },
    {
      image: heroIMG,
      category: 'Sport',
      slug: 'Charge two decies at the same time with this woreless charging dock',
      author: 'Blaze',
      time: '5 mis ago',
    },
    {
      image: heroIMG,
      category: 'Tech',
      slug: 'Charge two decies at the same time with this woreless charging dock',
      author: 'Blaze',
      time: '2 days ago',
    },
    {
      image: heroIMG,
      category: 'Tech',
      slug: 'Charge two decies at the same time with this woreless charging dock',
      author: 'Blaze',
      time: '5 weeks ago',
    },
    {
      image: heroIMG,
      category: 'Tech',
      slug: 'Charge two decies at the same time with this woreless charging dock',
      author: 'Blaze',
      time: '5 months ago',
    },
  ];

  return (
    <>
      <Hero />
      <section className="w-full ">
        <div className="w-full p-6 gap-4 flex flex-col items-center">
          <div className="w-full  flex justify-around mb-6">
            <h2 className=" font-serif font-semibold text-2xl">Latest Post</h2>
            <select id="categories" name="categories" className="px-6 py-2 border border-[#366BD9] rounded-t-lg focus:border-[#366BD9]">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {news.map((newsItem) => (
              <NewsCard
                key={newsItem.time}
                newsItem={newsItem}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-8 w-full justify-center md:justify-end pl-6">
          <button type="button" className="bg-[#366BD9] px-4 py-1 text-white rounded-lg bg-opacity-[70%] hover:bg-[#366BD9]">Prev</button>
          <span>1</span>
          <button type="button" className="bg-[#366BD9] px-4 py-1 text-white rounded-lg bg-opacity-[70%] hover:bg-[#366BD9]">Next</button>
        </div>
      </section>
    </>
  );
};

export default Home;
