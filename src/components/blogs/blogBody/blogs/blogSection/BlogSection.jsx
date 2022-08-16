import React from "react";
import { Card, LinkText } from "../../../../ui";
import BlogSectionLeftDiv from "./BlogSectionLeftDiv";
import BlogSectionRightDiv from "./BlogSectionRightDiv";

const BlogSection = (props) => {
  return (
    <>
      <LinkText to="/">
        <Card
          display="flex"
          gap="80px"
          alignitems="center"
          justifycontent="space-between"
          width="100%"
        >
          <BlogSectionLeftDiv {...props} />
          <BlogSectionRightDiv {...props} />
        </Card>
      </LinkText>
    </>
  );
};

export default BlogSection;
