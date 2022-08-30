import React from "react";
import { Card, grayColor, primaryColor, Text, TitleText } from "../../../../ui";

const BlogSectionLeftDiv = (props) => {
  const { category, date, title, description } = props;
  return (
    <>
      <Card
        display="flex"
        flexdirection="column"
        gap="40px"
        flex="5"
        mdgap="24px"
      >
        <Card display="flex" gap="40px" mdgap="30px">
          <Text
            size="20px"
            color={primaryColor}
            lineheight="30px"
            mdsize="16px"
            mdlineheight="22px"
          >
            {category}
          </Text>
          <Text
            size="20px"
            color={grayColor}
            lineheight="30px"
            mdsize="16px"
            mdlineheight="22px"
          >
            {date}
          </Text>
        </Card>
        <Card>
          <TitleText
            size="30px"
            lineheight="42px"
            color={primaryColor}
            mdsize="22px"
            mdlineheight="30px"
            heavy
          >
            {title}
          </TitleText>
        </Card>
        <Card>
          <Text
            size="20px"
            lineheight="30px"
            mdsize="16px"
            mdlineheight="22px"
            color={primaryColor}
          >
            {description}
          </Text>
        </Card>
      </Card>
    </>
  );
};

export default BlogSectionLeftDiv;
