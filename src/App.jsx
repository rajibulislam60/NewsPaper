import React from "react";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import Pagination from "./components/Pagination";
import PaginationTitle from "./components/PaginationTitle";
import Loading from "./components/Loading";
import axios from "axios";

const App = () => {
  




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
