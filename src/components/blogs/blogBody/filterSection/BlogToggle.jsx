import React, { useState } from "react";
import { accentColor, Card, grayColor, Text } from "../../../ui";

const BlogToggle = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <Card display="flex" gap="40px" mdgap="20px">
        <Text
          size="20px"
          mdsize="15px"
          lineheight="43px"
          color={toggle ? grayColor : accentColor}
          cursor
          onClick={() => setToggle(false)}
        >
          Latest News
        </Text>
        <Text
          size="20px"
          mdsize="15px"
          lineheight="43px"
          color={!toggle ? grayColor : accentColor}
          cursor
          onClick={() => setToggle(true)}
        >
          Trending News
        </Text>
      </Card>
    </>
  );
};

export default BlogToggle;
