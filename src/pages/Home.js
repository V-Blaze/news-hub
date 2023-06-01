import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { Hero, NewsCard } from '../components';

// ACTIONS
import { newsThunk } from '../redux/newsSlice';

const Home = () => {
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.news.loading);
  // const latttestNews = useSelector((state) => state.news);
  const latestNews = useSelector((state) => state.news.latestNews);

  useEffect(() => {
    dispatch(newsThunk());
    // dispatch(popularNewsThunk());
    // console.log(latestNews, loading);
  }, [dispatch]);
  // console.log(latttestNews, 'here1');

  // console.log(loading, popularNews);
  return (
    <>
      <Hero />
      <section className="w-full ">
        <div className="w-full p-6 gap-4 flex flex-col items-center">
          <div className="w-full  flex justify-around mb-6">
            <h2 className=" font-serif font-semibold text-4xl">Latest News</h2>
            <select id="categories" name="categories" className="px-6 py-2 border border-[#366BD9] rounded-t-lg focus:border-[#366BD9]">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* {news.map((newsItem) => (
              <NewsCard
                key={newsItem.time}
                newsItem={newsItem}
              />
            ))} */}
            {latestNews?.articles?.map((newsItem) => (
              <NewsCard
                key={newsItem.publishedAt}
                newsItem={newsItem}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-8 w-full justify-center md:justify-end pr-6">
          <button type="button" className="bg-[#366BD9] px-4 py-1 text-white rounded-lg hover:bg-opacity-[70%]">Prev</button>
          <span>1</span>
          <button type="button" className="bg-[#366BD9] px-4 py-1 text-white rounded-lg hover:bg-opacity-[70%]">Next</button>
        </div>
      </section>
    </>
  );
};

export default Home;
