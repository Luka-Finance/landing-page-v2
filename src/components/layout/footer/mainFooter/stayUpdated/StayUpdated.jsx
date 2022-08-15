import React from "react";
import { Card, grayColor, Image, Text } from "../../../../ui";
import NewsLetter from "./NewsLetter";

const StayUpdated = () => {
  return (
    <>
      <Card
        display="flex"
        flexdirection="column"
        gap="30px"
        mdalignitems="center"
      >
        <Image width="40%" mdwidth="30%" src="asset/logo.png" alt="logo" />
        <Text size="18px" mdsize="15px" lineheight="30px" color={grayColor}>
          Stay updated with our recent happenings.
        </Text>
        <NewsLetter />
      </Card>
    </>
  );
};

export default StayUpdated;
