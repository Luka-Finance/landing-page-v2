import React from "react";
import { accentColor, Button, Card, Image, whiteColor } from "../../../ui";

const HeroLeftSectionCTA = () => {
  return (
    <>
      <Card display="flex" width="400px" gap="10px" mdwidth="300px">
        <Button
          color={whiteColor}
          bg={accentColor}
          padding="20px 70px"
          mdpadding="15px 30px"
          radius="10px"
        >
          Get Started
        </Button>
        <Button bg="transparent" display="flex" alignitems="center" gap="7px">
          <Image width="20%" mdwidth="15%" src="asset/play.png" alt="play" />
          View Demo
        </Button>
      </Card>
    </>
  );
};

export default HeroLeftSectionCTA;
