import React, { useState } from "react";
import newsCatagory from "../news/main";

const Header = ({changeCategory, category}) => {

  let [news, setNews] = useState("");

  let handleSearch = (e) => {
    setNews(e.target.value);
  };
  let handleEnter = () => {};

  return (
    <div className="container my-4 flex flex-col items-center">
      <h1 className="text-center text-[34px] font-bold uppercase leading-[38px]">
        Head line the news
      </h1>
      <input
        className="mt-5 w-[550px] border px-3 py-2 text-[20px]"
        type="search"
        placeholder="Enter news item"
        value={news}
        onChange={handleSearch}
        onKeyPress={handleEnter}
      />
      <div className="my-5">
      {Object.keys(newsCatagory).map((item) => (
          <button
            key={item}
            onClick={() => changeCategory(newsCatagory[item])}
            className={`mx-3 border px-3 py-1 font-medium capitalize duration-[0.4s] hover:bg-teal-700 hover:text-white ${
              category === newsCatagory[item]
                ? "bg-red-500 text-white"
                : ""
            }`}
          >
            {`#${newsCatagory[item]}`}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
