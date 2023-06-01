import React from 'react';
import PropTypes from 'prop-types';

const NewsCard = ({ newsItem }) => {
  const {
    image, category, slug, author, time,
  } = newsItem;

  return (
    <div className="flex flex-col p-1 rounded-lg gap-2 hover:bg-blue-300 hover:bg-opacity-[30%]">
      <div className="relative">
        <img src={image} alt="cat" className="h-[196px] w-[212px] md:h-[296px] md:w-[312px] rounded-md" />
        <h4 className="absolute bg-gray-500 p-2 text-white font-mono font-semibold rounded-bl-md rounded-tr-md bottom-[0px] left-[0px]">{category}</h4>
      </div>
      <p className=" font-mono text-xl hover:underline hover:cursor-pointer">
        {slug}
      </p>
      <div className="flex justify-between items-center italic px-3">
        <span>{author}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  newsItem: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default NewsCard;
