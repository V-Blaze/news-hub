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
  const [newsSource, setNewsSource] = useState([]);

  const itemsPerPage = 10;

  const getNewsSources = () => {
    const uniqueItems = new Set();

    latestNews?.articles?.forEach((item) => {
      if (!uniqueItems.has(item.source.name)) {
        uniqueItems.add(item.source.name);
      }
    });

    const myObject = Array.from(uniqueItems, (item) => ({ [item]: item }));
    setNewsSource(myObject);
  };

  useEffect(() => {
    dispatch(newsThunk());
  }, [dispatch]);

  useEffect(() => {
    setStartIndex((currentPage - 1) * itemsPerPage);
    setEndIndex(startIndex + itemsPerPage);
    if (latestNews?.articles) {
      setDisplayedArticles(latestNews?.articles?.slice(startIndex, endIndex));
      getNewsSources();
    }
  }, [latestNews]);

  const handleNext = () => {
    setDisplayedArticles(latestNews?.articles?.slice((endIndex + 1), ((endIndex + 1) * 2)));
    setCurrentPage(currentPage + 1);
    setStartIndex((endIndex + 1));
    setEndIndex((endIndex + 1) + itemsPerPage);
  };

  const handlePrev = () => {
    setDisplayedArticles(latestNews?.articles?.slice((
      (startIndex - 1) - itemsPerPage), ((endIndex - 1) - itemsPerPage)));
    setCurrentPage(currentPage - 1);
    setStartIndex((startIndex - 1) - itemsPerPage);
    setEndIndex(((endIndex - 1) - itemsPerPage));
  };

  const handleSourceSelect = (e) => {
    const selectedSource = latestNews.articles.filter(
      (news) => news.source.name === e.target.value,
    );
    setDisplayedArticles(selectedSource);
  };

  const viewDetails = (title) => {
    const item = latestNews.articles.filter((newsitem) => newsitem.title === title);
    navigate('/details', { state: item[0] });
  };

  return (
    <>
      <Hero />
      <section className="w-full ">
        <div className="w-full p-6 gap-4 flex flex-col items-center">
          <div className="w-full  flex justify-around mb-6">
            <h2 className=" font-serif font-semibold text-4xl">Latest News</h2>
            <select
              id="categories"
              name="categories"
              className="px-1 border border-[#366BD9] rounded-t-lg focus:border-[#366BD9]"
              onChange={handleSourceSelect}
            >
              {newsSource.map((item) => (
                <option
                  key={Object.values(item)[0]}
                  value={Object.values(item)[0]}
                >
                  {Object.values(item)[0]}
                </option>
              ))}
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
