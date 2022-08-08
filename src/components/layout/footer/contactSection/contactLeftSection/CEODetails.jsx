import React from "react";
import { Card, grayColor, Image, Text } from "../../../../ui";

const CEODetails = () => {
  return (
    <Card display="flex" alignitems="center" gap="20px">
      <Text
        size="18px"
        lineheight="30px"
        color={grayColor}
        mdsize="15px"
        mdlineheight="25px"
      >
        -Olawale Omotosho <br />
        CEO, Luka Finance
      </Text>
      <Image width="15%" src="asset/ceo-image.png" alt="olawale omotosho" />
    </Card>
  );
};

export default CEODetails;
