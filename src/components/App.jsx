import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import ArticleList from "./ArticleList";
import About from './About';
import Article from "./Article";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <About image={blogData.image} about={blogData.about} />
      <Article posts={blogData.posts} />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;




