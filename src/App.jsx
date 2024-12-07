import React from "react";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import Pagination from "./components/Pagination";

const App = () => {
  const news = [
    { title: "Sample News 1",
      alt: "Image of Sample News 1",
      url: "https://example.com/sample-news-1",
      urlToImage: "https://via.placeholder.com/150",
      publishedAt: "2024-12-05T10:00:00Z",
      source: { name: "Example Source 1" },},
    { title: "Sample News 2",
      alt:"image2",
      url: "https://example.com/sample-news",
      urlToImage: "https://via.placeholder.com/150",
      publishedAt: "2024-12-05T10:00:00Z",
      source: { name: "Example Source" }, },
  ];
  return (
    <div>
      <Header category="technology" />
      <NewsList news={news} />
      <Pagination/>
    </div>
  );
};

export default App;
