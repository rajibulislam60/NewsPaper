import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import Pagination from "./components/Pagination";
import PaginationTitle from "./components/PaginationTitle";
import Loading from "./components/Loading";
import axios from "axios";

const App = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("technology");
  const [quary, setQuary] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    const url = quary
      ? `${import.meta.env.VITE_TEST_NEWS_URL}?apiKey=${import.meta.env.VITE_TEST_NEWS_API_KEY}&q=${quary}&pageSize=${pageSize}`
      : `${import.meta.env.VITE_TEST_NEWS_URL}?apiKey=${import.meta.env.VITE_TEST_NEWS_API_KEY}&category=${category}&pageSize=${pageSize}`;
    const fetchNews = async () => {
      try {
        const response = await axios.get(url);
        setNews(response.data.articles);
        setError(null);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    fetchNews();
  }, [category, quary, currentPage]);

  let changeCategory = (newCategory) => {
    setCategory(newCategory);
    setQuary("");
    setCurrentPage(1);
  };

  let onSearch = (searchQuary) => {
    setQuary(searchQuary);
    setCurrentPage(1);
  };

  let handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <Header
        category={category}
        changeCategory={changeCategory}
        onSearch={onSearch}
      />
      <PaginationTitle category={category} />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <NewsList news={news} />
      )}
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        pageSize={pageSize}
      />
    </div>
  );
};

export default App;
