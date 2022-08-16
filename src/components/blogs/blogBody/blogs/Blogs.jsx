import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "../../../ui";
import BlogSection from "./blogSection/BlogSection";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    loadBlogData();
  }, []);

  const loadBlogData = async () => {
    const response = await axios.get("http://localhost:3500/blogs");
    if (response.status === 200) {
      console.log(response.data);
      setBlogData(response.data);
    }
  };
  return (
    <>
      <Card
        width="100%"
        margin="100px 0 0"
        display="flex"
        flexdirection="column"
        gap="100px"
      >
        {blogData.map((blog, key) => (
          <BlogSection {...blog} key={key} />
        ))}
      </Card>
    </>
  );
};

export default Blogs;
