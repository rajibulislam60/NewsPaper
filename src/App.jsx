import React from "react";
import Header from "./components/Header";
import NewsList from "./components/NewsList";

const App = () => {
  const news = [
    { title: "News 1", content: "Details of News 1" },
    { title: "News 2", content: "Details of News 2" },
  ];
  return (
    <div>
      <Header category="technology" />
      <NewsList news={news} />
    </div>
  );
};

export default App;
