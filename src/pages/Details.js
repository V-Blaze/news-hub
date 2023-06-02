import React from 'react';
import { useLocation } from 'react-router-dom';

// ICONS
import {
  AiOutlineHeart, AiOutlineComment, AiOutlineShareAlt,
} from 'react-icons/ai';

// Assets
import { heroIMG } from '../assets/images';

// UTILITY FUNCTIONS
import getTimeAgo, { openInNewTab } from '../components/utils';

const Details = () => {
  const location = useLocation();

  const {
    author, title, content, url, urlToImage, publishedAt, description, source,
  } = location.state;

  return (
    <>
      <section className="w-full p-14 bg-slate-400 ">
        <div className="flex flex-col gap-8 text-white">
          <div className="text-white font-semibold flex gap-4">
            <span>{source.name}</span>
            <span>{getTimeAgo(publishedAt)}</span>
          </div>
          <div className=" w-full">
            <h1 className="font-semibold font-serif text-3xl md:text-7xl w-[95%] md:w-[80%]">
              {title}
            </h1>
          </div>
          <div className="flex gap-3 items-center">
            <img src={heroIMG} alt="author" className="h-[48px] w-[48px] rounded-full" />
            <span className="font-mono font-semibold italic text-lg">{author}</span>
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
          <img src={urlToImage !== null ? urlToImage : heroIMG} alt="news" className="w-[90%] md:h-[520px] rounded-lg" />
          <h4 className="font-semibold font-mono ">
            {content}
          </h4>
          <br />
          <p>
            {description}
          </p>
        </div>
        <button
          type="button"
          className="bg-[#366BD9] px-6 py-3 text-white rounded-lg hover:bg-opacity-[80%] mt-9 "
          onClick={() => openInNewTab(url)}
        >
          News Source
        </button>
      </section>
    </>
  );
};

export default Details;
