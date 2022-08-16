import React from "react";
import { Card, Image } from "../../../../ui";

const BlogSectionRightDiv = (props) => {
  const { imageUrl, title } = props;
  return (
    <>
      <Card width="100%" flex="3">
        <Image src={imageUrl} alt={title} width="100%" />
      </Card>
    </>
  );
};

export default BlogSectionRightDiv;
