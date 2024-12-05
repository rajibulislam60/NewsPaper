import React from "react";
import Header from "./components/Header";
import NewsList from "./components/NewsList";

const App = () => {
  const news = [
    { title: "Sample News 1",
      url: "https://example.com/sample-news",
      urlToImage: "https://via.placeholder.com/150",
      publishedAt: "2024-12-05T10:00:00Z",
      source: { name: "Example Source" },},
    { title: "Sample News 2",
      url: "https://example.com/sample-news",
      urlToImage: "https://via.placeholder.com/150",
      publishedAt: "2024-12-05T10:00:00Z",
      source: { name: "Example Source" }, },
  ];
  return (
    <div>
      <Header category="technology" />
      <NewsList news={news} />
    </div>
  );
};

export default App;
