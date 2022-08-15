import React from "react";
import { Card, LinkText, Text, whiteColor } from "../../../ui";

const CopyrightSection = () => {
  return (
    <>
      <Card
        display="flex"
        justifycontent="space-between"
        mdflexdirection="column"
        mdgap="50px"
        margin="0 0 30px"
      >
        <Text
          size="18px"
          mdsize="15px"
          lineheight="30px"
          color={whiteColor}
          mdtextalign="center"
        >
          &copy; 2022 Luka Technologies Limited. Copyright and rights reserved
        </Text>
        <Card
          display="flex"
          gap="24px"
          mdflexdirection="column"
          mdgap="10px"
          mdalignitems="center"
        >
          <LinkText
            size="18px"
            mdsize="15px"
            lineheight="30px"
            color={whiteColor}
            width="fit-content"
            to="/"
          >
            Terms and Condition
          </LinkText>
          <LinkText
            size="18px"
            mdsize="15px"
            lineheight="30px"
            color={whiteColor}
            width="fit-content"
            to="/"
          >
            Privacy Policy
          </LinkText>
        </Card>
      </Card>
    </>
  );
};

export default CopyrightSection;
