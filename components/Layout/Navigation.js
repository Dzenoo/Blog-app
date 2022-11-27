import React from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.imageDiv}>
          <Image src="/logo.png" width={200} height={200} />
        </div>

        <nav>
          <ul className={classes.menu}>
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/addBlogItem">Add BlogItem</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
