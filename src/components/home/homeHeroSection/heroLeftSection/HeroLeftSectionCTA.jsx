import React from "react";
import { accentColor, Card, Text, whiteColor } from "../../../ui";

const HeroLeftSectionCTA = () => {
  return (
    <>
      <Card
        display="flex"
        width="100%"
        mdflexdirection="column"
        mdalignitems="center"
      >
        <a
          href="https://forms.gle/ffU1sWCg9nhQXywy8"
          style={{ textAlign: "center" }}
        >
          <Text
            color={whiteColor}
            bg={accentColor}
            padding="20px 70px"
            mdpadding="15px 56px"
            radius="10px"
            width="fit-content"
          >
            Join Our Waitlist
          </Text>
        </a>
      </Card>
    </>
  );
};

export default HeroLeftSectionCTA;
