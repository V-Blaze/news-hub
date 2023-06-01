import React from 'react';

// ICONS
import {
  FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaSearchengin,
} from 'react-icons/fa';

const Navbar = () => (
  <nav className="w-full">
    <div className="w-full px-4 hidden md:flex items-center justify-between">
      <span className=" font-semibold text-base italic text-[#366BD9]">Tuesday May 30, 2023</span>
      <h2 className=" font-serif font-extrabold text-3xl">
        <a href="/">NEWS HUB</a>
      </h2>
      <ul className="flex gap-3 text-xl">
        <li>
          <FaTwitterSquare />
        </li>
        <li>
          <FaFacebookSquare />
        </li>
        <li>
          <FaInstagramSquare />
        </li>
      </ul>
    </div>
    <div className=" w-full flex px-4 items-center justify-center md:justify-between bg-[#366BD9] h-[3.5rem]">
      <ul className="w-[50%] hidden md:flex text-white justify-evenly font-semibold text-lg">
        <li>Homepage</li>
        <li>News</li>
        <li>Music</li>
        <li>Science</li>
      </ul>
      <h2 className="md:hidden font-serif font-extrabold text-3xl text-white">
        <a href="/">NEWS HUB</a>
      </h2>
      <div className="hidden md:flex bg-gray-300 items-center border border-[#6D9AF8] rounded-lg hover:border-[#fff]">
        <input
          type="text"
          placeholder="search"
          className=" bg-transparent focus:bg-white focus:rounded-lg focus:outline-none pl-4"
        />
        <FaSearchengin className="hover:cursor-pointer" />
      </div>
    </div>
  </nav>
);

export default Navbar;
