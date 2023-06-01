import React from 'react';

const Footer = () => (
  <footer className="w-full bg-[#366BD9] text-white p-6 mt-6 grid grid-cols-1 md:grid-cols-3">
    <div className="flex flex-col gap-2 items-center">
      <h2 className=" font-serif font-extrabold text-4xl">
        <a href="/">NEWS HUB</a>
      </h2>
      <span>CopyRight 2023. All Right Reserved</span>
    </div>
    <div className="hidden col-span-2 md:flex gap-6 w-full justify-around">
      <div>
        <h4 className="font-serif font-bold text-2xl mb-2">Categories</h4>
        <ul className="flex flex-col gap-4">
          <li>Science</li>
          <li>Tech</li>
          <li>Sport</li>
          <li>Bussiness</li>
        </ul>
      </div>
      <div>
        <h4 className="font-serif font-bold text-2xl mb-2">Social Media</h4>
        <ul className="flex flex-col gap-4">
          <li>Twitter</li>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Youtube</li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
