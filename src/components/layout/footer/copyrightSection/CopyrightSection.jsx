import React from "react";
import { Card, Text, whiteColor } from "../../../ui";

const CopyrightSection = () => {
  return (
    <>
      <Card margin="0 0 30px">
        <Text
          size="18px"
          mdsize="15px"
          lineheight="30px"
          color={whiteColor}
          textalign="center"
          mdtextalign="center"
        >
          &copy; 2022 Luka Technologies Limited. Copyright and rights reserved
        </Text>
      </Card>
    </>
  );
};

export default CopyrightSection;
