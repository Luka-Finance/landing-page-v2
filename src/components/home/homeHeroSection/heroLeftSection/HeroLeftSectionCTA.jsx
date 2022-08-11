import React from "react";
import { accentColor, Button, Card, Image, whiteColor } from "../../../ui";

const HeroLeftSectionCTA = () => {
  return (
    <>
      <Card
        display="flex"
        width="400px"
        gap="10px"
        mdwidth="300px"
        mdmargin="0 auto"
        mdflexdirection="column"
        mdgap="40px"
        alignitems="center"
      >
        <Button
          color={whiteColor}
          bg={accentColor}
          padding="20px 70px"
          mdpadding="15px 56px"
          radius="10px"
          width="fit-content"
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
