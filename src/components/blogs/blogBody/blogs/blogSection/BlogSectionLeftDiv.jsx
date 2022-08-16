import React from "react";
import { Card, grayColor, primaryColor, Text, TitleText } from "../../../../ui";

const BlogSectionLeftDiv = (props) => {
  const { category, date, title, description } = props;
  return (
    <>
      <Card display="flex" flexdirection="column" gap="40px" flex="5">
        <Card display="flex" gap="40px">
          <Text size="20px" color={primaryColor} lineheight="30px">
            {category}
          </Text>
          <Text size="20px" color={grayColor} lineheight="30px">
            {date}
          </Text>
        </Card>
        <Card>
          <TitleText size="30px" lineheight="42px" color={primaryColor} heavy>
            {title}
          </TitleText>
        </Card>
        <Card>
          <Text size="20px" lineheight="30px" color={primaryColor}>
            {description}
          </Text>
        </Card>
      </Card>
    </>
  );
};

export default BlogSectionLeftDiv;
