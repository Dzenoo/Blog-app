import { useRouter } from "next/router";

import Image from "next/image";

import React from "react";

import { FcCalendar } from "react-icons/fc";

const BlogItem = (props) => {
  const router = useRouter();

  const viewDetailsHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <li className="item">
      <div className="image_div">
        <Image src="/banner.png" width={300} height={300} />
        <div className="author_div">
          <span
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
            className="spanColor"
          >
            <FcCalendar />
            {props.date}
          </span>
          <span className="spanColor">{props.author}</span>
        </div>
      </div>
      <div className="desc_div">
        <h1>{props.title}</h1>
        <span
          style={{
            backgroundColor: "orange",
            borderRadius: "30px",
            padding: "9px",
            color: "#fff",
          }}
        >
          {props.subtitle}
        </span>
        <p>{props.description}</p>
      </div>

      <div className="button_div">
        <button onClick={viewDetailsHandler}>View</button>
      </div>
    </li>
  );
};

export default BlogItem;
