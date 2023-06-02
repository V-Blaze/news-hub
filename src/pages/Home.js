import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Components
import { Hero, NewsCard } from '../components';

// ACTIONS
import { newsThunk } from '../redux/newsSlice';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const loading = useSelector((state) => state.news.loading);
  const latestNews = useSelector((state) => state.news.latestNews);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(0);
  const [displayedArticles, setDisplayedArticles] = useState([]);

  const itemsPerPage = 10;

  useEffect(() => {
    dispatch(newsThunk());
  }, [dispatch]);

  useEffect(() => {
    setStartIndex((currentPage - 1) * itemsPerPage);
    setEndIndex(startIndex + itemsPerPage);
    if (latestNews?.articles) {
      setDisplayedArticles(latestNews?.articles?.slice(startIndex, endIndex));
    }
  }, [latestNews]);

  const handleNext = () => {
    setDisplayedArticles(latestNews?.articles?.slice((endIndex + 1), ((endIndex + 1) * 2)));
    setCurrentPage(currentPage + 1);
    setStartIndex((endIndex + 1));
    setEndIndex((endIndex + 1) + itemsPerPage);
    console.log(endIndex, latestNews.articles.length);
  };

  const handlePrev = () => {
    setDisplayedArticles(latestNews?.articles?.slice((
      (startIndex - 1) - itemsPerPage), ((endIndex - 1) - itemsPerPage)));
    setCurrentPage(currentPage - 1);
    setStartIndex((startIndex - 1) - itemsPerPage);
    setEndIndex(((endIndex - 1) - itemsPerPage));
    console.log(endIndex, latestNews.articles.length);
  };

  const viewDetails = (title) => {
    const item = latestNews.articles.filter((newsitem) => newsitem.title === title);
    navigate('/details', { state: item[0] });
    // console.log(item);
  };

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
            {displayedArticles.map((newsItem) => (
              <NewsCard
                key={newsItem.publishedAt}
                newsItem={newsItem}
                viewDetails={viewDetails}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-8 w-full justify-center md:justify-end pr-6">
          <button
            type="button"
            className="bg-[#366BD9] px-4 py-1 text-white rounded-lg hover:bg-opacity-[70%]"
            onClick={() => handlePrev()}
            disabled={startIndex <= 0}
          >
            Prev
          </button>
          <span>{currentPage}</span>
          <button
            type="button"
            className="bg-[#366BD9] px-4 py-1 text-white rounded-lg hover:bg-opacity-[70%]"
            onClick={() => handleNext()}
            disabled={endIndex >= latestNews?.articles?.length}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
