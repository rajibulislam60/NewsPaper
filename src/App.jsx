import React from "react";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import Pagination from "./components/Pagination";
import PaginationTitle from "./components/PaginationTitle";
import Loading from "./components/Loading";
import axios from "axios";


const App = () => {
  componentDidMount() {
    const url = `${import.meta.env.VITE_TEST_NEWS_URL}?${import.meta.env.VITE_TEST_NEWS_API_KEY}&category=technology`;

    axios
      .get(url)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <div>
      <Header category="technology" />
      <PaginationTitle />
      <NewsList news={news} />
      <Pagination />
      <Loading />
    </div>
  );
};

export default App;
