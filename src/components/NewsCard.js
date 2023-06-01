import React from 'react';
import PropTypes from 'prop-types';

// UTILITY FUNCTIONS
import getTimeAgo from './utils';

const NewsCard = ({ newsItem }) => {
  const {
    author, title, urlToImage, publishedAt, source,
  } = newsItem;

  return (
    <div className="flex flex-col p-1 rounded-lg gap-2 hover:bg-blue-300 hover:bg-opacity-[30%]">
      <div className="relative">
        <img src={urlToImage} alt="cat" className="h-[196px] w-[212px] md:h-[296px] md:w-[312px] rounded-md" />
        <h4 className="absolute bg-gray-500 p-2 text-white font-mono font-semibold rounded-bl-md rounded-tr-md bottom-[0px] left-[0px]">{source.name}</h4>
      </div>
      <p className=" font-mono text-xl hover:underline hover:cursor-pointer">
        {title.length > 77 ? `${title.slice(0, 77)} ...` : title }
      </p>
      <div className="flex justify-between items-center italic px-3">
        <span>{author?.length > 10 ? `${author?.slice(0, 10)} ...` : author }</span>
        <span>{getTimeAgo(publishedAt)}</span>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  newsItem: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default NewsCard;
