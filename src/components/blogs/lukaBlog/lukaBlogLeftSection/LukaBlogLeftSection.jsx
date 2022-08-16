import React from "react";
import { Card, primaryColor, Text, TitleText } from "../../../ui";

const LukaBlogLeftSection = () => {
  return (
    <>
      <Card width="430px" mdwidth="unset">
        <TitleText
          size="48px"
          lineheight="65.5px"
          mdsize="25px"
          mdlineheight="35px"
          mdtextalign="center"
          color={primaryColor}
          heavy
        >
          The Luka Blog{" "}
        </TitleText>
        <Text
          size="22px"
          margin="20px 0 0"
          mdmargin="20px 0 0"
          lineheight="40px"
          mdsize="15px"
          color={primaryColor}
          mdlineheight="25px"
          mdtextalign="center"
        >
          Get news, announcements and updates about Our Company, Products and
          the Tech World
        </Text>
      </Card>
    </>
  );
};

export default LukaBlogLeftSection;
