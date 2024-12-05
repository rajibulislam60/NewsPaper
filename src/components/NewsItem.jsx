import React from "react";

const NewsItem = ({ item }) => {
  let getDateString = (dateTimeStr) => {
    new Date(dateTimeStr).toDateString();
  };
  return (
    <div className="container my-8">
      {item.urlToImage && (
        <img
          className="h-[400px] w-full"
          src={item.urlToImage}
          alt={item.alt}
        />
      )}
      <div className="">
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <h5 className="my-1 text-[22px] font-semibold leading-[28px]">
            {item.title}
          </h5>
        </a>
        <div className="flex justify-between">
          {item.publishedAt && (
            <small>
              <strong>Published at {getDateString(item.publishedAt)}</strong>
            </small>
          )}

          {item.source?.name && (
            <div>
              <small>Source: {item.source.name}</small>
            </div>
          )}
        </div>
      </div>
      <div className="w-full h-[2px] bg-black"></div>
    </div>
  );
};

export default NewsItem;
