import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Componenets
import PopularNewsCard from './PopularNewsCard';

// ACTIONS
import { popularNewsThunk } from '../redux/newsSlice';

// UTILITY FUNCTIONS
import getTimeAgo from './utils';

const Hero = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const popularNews = useSelector((state) => state.news.popularNews);

  useEffect(() => {
    dispatch(popularNewsThunk());
  }, [dispatch]);

  const viewDetails = (title) => {
    const item = popularNews.filter((newsitem) => newsitem.title === title);
    navigate('/details', { state: item[0] });
    // console.log(item);
  };

  // console.log(popularNews.length, 'popular');

  return (

    <section className="grid grid-cols-1 lg:grid-cols-3 w-full p-8 bg-slate-400 gap-4">
      <div className="flex flex-col gap-5 col-span-2 text-white">
        <div className="text-white flex gap-4">
          <span>{popularNews.length && popularNews[0].name}</span>
          <span>{popularNews.length && getTimeAgo(popularNews[0].publishedAt)}</span>
        </div>
        <div className=" w-full">
          <h1 className="font-semibold font-serif text-4xl md:text-7xl w-[95%] md:w-[80%]">
            {popularNews.length > 0 && popularNews[0].title}
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="flex md:flex-col gap-2 border-2 border-l-4 border-[#366BD9] rounded-lg p-3 hover:bg-slate-500">
            <img src={popularNews.length ? popularNews[1].urlToImage : ''} alt="news" className="h-[84px] w-[114px] rounded-lg" />
            <button
              type="button"
              onClick={() => viewDetails(popularNews[1].title)}
              className=" font-mono text-sm hover:underline hover:cursor-pointer"
            >
              {popularNews.length > 0 && popularNews[1].title}
            </button>
          </div>
          <div className="hidden md:flex flex-col gap-2 border-2 border-[#366BD9] rounded-lg p-3 hover:bg-slate-500">
            <img src={popularNews.length ? popularNews[2].urlToImage : ''} alt="news" className="h-[84px] w-[114px] rounded-lg" />
            <button
              type="button"
              onClick={() => viewDetails(popularNews[2].title)}
              className=" font-mono text-sm hover:underline hover:cursor-pointer"
            >
              {popularNews.length > 0 && popularNews[2].title}
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-start flex-col text-white">
        <h2 className="font-serif font-semibold text-2xl mb-4">Popular this week</h2>
        <div className="flex flex-col gap-3">
          {popularNews && popularNews.slice(3).map((newsItem) => (
            <PopularNewsCard
              newsItem={newsItem}
              key={newsItem.publishedAt}
              viewDetails={viewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
