import React from "react";

import BlogAdd from "../../components/Blog/BlogAdd";

const BlogForm = () => {
  async function AddBlogHandler(enteredBlogData) {
    const response = await fetch("/api/new-blog-post", {
      method: "POST",
      body: JSON.stringify(enteredBlogData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
  }

  return (
    <div>
      <h1>Add</h1>
      <BlogAdd onAddBlog={AddBlogHandler} />
    </div>
  );
};

export default BlogForm;
