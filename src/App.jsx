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

  useEffect(() => {
    const url = `${import.meta.env.VITE_TEST_NEWS_URL}?apiKey=${import.meta.env.VITE_TEST_NEWS_API_KEY}&category=${category}`;

    const fetchNews = async () => {
      try {
        const response = await axios.get(url);
        setNews(response.data.articles);
        setError(null)
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    fetchNews();
  }, [category]);

  let changeCategory = (newCategory) => {
    setCategory(newCategory);
  };

  return (
    <div>
      <Header category={category} changeCategory={changeCategory} />
      <PaginationTitle category={category} />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <NewsList news={news} />
      )}
      <Pagination />
    </div>
  );
};

export default App;
