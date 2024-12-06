import React from "react";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import Pagination from "./components/Pagination";
import PaginationTitle from "./components/PaginationTitle";
import Loading from "./components/Loading";
import axios from "axios";

const App = () => {
  const URL = "https://jsonplaceholder.typicode.com/users";

  axios.get(URL).then((res)=>{
    console.log(res.data)
  })

  const user = {
    name:"RI Rajib",
    email:"rirajveer@gmail.com",
    username:"rajib",
  }
  axios.post(URL, user).then((res)=>{
    console.log(res.data)
  })


  const news = [
    {
      title: "Sample News 1",
      alt: "Image of Sample News 1",
      url: "https://example.com/sample-news-1",
      urlToImage: "https://via.placeholder.com/150",
      publishedAt: "2024-12-05T10:00:00Z",
      source: { name: "Example Source 1" },
    },
    {
      title: "Sample News 2",
      alt: "image2",
      url: "https://example.com/sample-news",
      urlToImage: "https://via.placeholder.com/150",
      publishedAt: "2024-12-05T10:00:00Z",
      source: { name: "Example Source" },
    },
  ];
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
