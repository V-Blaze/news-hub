import React from 'react';
import PropTypes from 'prop-types';

// UTILITY FUNCTIONS
import getTimeAgo from './utils';

// Assets
import { heroIMG } from '../assets/images';

const PopularNewsCard = ({ newsItem }) => {
  const {
    source, publishedAt, title, urlToImage,
  } = newsItem;
  return (
    <div className="grid grid-cols-3 gap-3 hover:bg-slate-500 rounded-lg p-1">
      <img src={urlToImage !== null ? urlToImage : heroIMG} alt="news" className="h-[94px] w-[144px] rounded-lg" />
      <div className="flex flex-col gap-2 col-span-2">
        <div className="flex gap-4 font-thin italic">
          <span>{source?.name}</span>
          <span>{getTimeAgo(publishedAt)}</span>
        </div>
        <p className=" font-mono text-sm hover:underline hover:cursor-pointer">
          {title}
        </p>
      </div>
    </div>
  );
};

PopularNewsCard.propTypes = {
  newsItem: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default PopularNewsCard;
