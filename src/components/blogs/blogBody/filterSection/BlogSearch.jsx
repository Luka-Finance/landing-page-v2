import React from "react";
import { Card, grayColor, Image, TextField } from "../../../ui";

const BlogSearch = () => {
  return (
    <>
      <Card
        display="flex"
        justifycontent="space-between"
        alignitems="center"
        border={`1px solid ${grayColor}`}
        width="248px"
        mdwidth="100%"
        radius="20px"
        padding="0 14px"
      >
        <TextField
          type="text"
          padding="0"
          noborder
          hborder="none"
          bg="transparent"
          placeholder="Search"
        />
        <Image
          src="asset/search.png"
          alt="search"
          height="50%"
          onClick={(e) => e.preventDefault()}
        />
      </Card>
    </>
  );
};

export default BlogSearch;
