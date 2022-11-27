import React from "react";
import { MongoClient, ObjectId } from "mongodb";
import Image from "next/image";
import BlogList from "../../components/Blog/BlogList";

const BlogDetailPage = ({ blogData, blogItems }) => {
  const { title, description, text } = blogData;

  return (
    <section className="details__section">
      <div className="image__div">
        <Image src="/banner.png" width={600} height={600} />
        <h1>{title}</h1>
        <p>{description}</p>
        <article>{text}</article>
      </div>
      <div className="article__div">
        <h1>Explore blog</h1>
        <div className="article__list">
          <BlogList blogItems={blogItems} />
        </div>
      </div>
    </section>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Dzenis:DsYaz6VZruCPSJdi@cluster0.8suhkcc.mongodb.net/blog?retryWrites=true&w=majority"
  );
  const db = client.db();

  const blog = db.collection("blog");
  const blogItems = await blog.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: false,
    paths: blogItems.map((blogItem) => ({
      params: {
        blogId: blogItem._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const blogId = context.params.blogId;
  console.log(blogId);

  const client = await MongoClient.connect(
    "mongodb+srv://Dzenis:DsYaz6VZruCPSJdi@cluster0.8suhkcc.mongodb.net/blog?retryWrites=true&w=majority"
  );
  const db = client.db();

  const blog = db.collection("blog");

  const selectedBlog = await blog.findOne({ _id: ObjectId(blogId) });
  const blogItems = await blog.find().toArray();

  client.close();

  return {
    props: {
      blogData: {
        id: selectedBlog._id.toString(),
        title: selectedBlog.title,
        description: selectedBlog.description,
        text: selectedBlog.text,
      },
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

export default BlogDetailPage;
