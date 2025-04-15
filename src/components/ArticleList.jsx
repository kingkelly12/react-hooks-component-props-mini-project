import React, { Component } from 'react'

function ArticleList({ posts }) {
    return (
      <main>
        {posts.map((post) => (
        <Article>
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
            minutes={post.minutes}
        </Article>
        ))}
      </main>
    );
  }

export default ArticleList;