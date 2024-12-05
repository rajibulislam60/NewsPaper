import React from "react";

const NewsItem = ({ item }) => {
  let getDateString = (dateTimeStr) => {
    new Date(dateTimeStr).toDateString();
  };
  return (
    <div className="container">
      {item.urlToImage && <img src={item.urlToImage} alt={item.title} />}
      <div className="">
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          <h5>{item.title}</h5>
        </a>
        <div>
            {item.publishedAt && 
            <small>
            <strong>Published at {getDateString(item.publishedAt)}</strong>
          </small>
            }
          
          {item.source?.name && 
          <div>
            <small>Source: {item.source.name}</small>
          </div>
          }
          
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
