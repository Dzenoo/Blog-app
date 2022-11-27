import React from "react";
import { MongoClient } from "mongodb";
import BlogList from "../components/Blog/BlogList";

const BlogPage = (props) => {
  return (
    <div>
      <h1>Welcome to Blog</h1>
      <BlogList blogItems={props.blogItems} />
    </div>
  );
};

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://Dzenis:DsYaz6VZruCPSJdi@cluster0.8suhkcc.mongodb.net/blog?retryWrites=true&w=majority"
  );
  const db = client.db();

  const blog = db.collection("blog");

  const blogItems = await blog.find().toArray();

  client.close();

  return {
    props: {
      blogItems: blogItems.map((blogItem) => ({
        title: blogItem.title,
        subtitle: blogItem.subtitle,
        description: blogItem.description,
        author: blogItem.author,
        date: blogItem.date,
        id: blogItem._id.toString(),
      })),
    },
  };
}

export default BlogPage;
