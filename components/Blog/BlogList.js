import React from "react";

import BlogItem from "./BlogItem";

const BlogList = (props) => {
  return (
    <ul className="blog_list">
      {props.blogItems.map((blogItem) => (
        <BlogItem
          id={blogItem.id}
          key={blogItem.id}
          subtitle={blogItem.subtitle}
          title={blogItem.title}
          description={blogItem.description}
          author={blogItem.author}
          date={blogItem.date}
        />
      ))}
    </ul>
  );
};

export default BlogList;
