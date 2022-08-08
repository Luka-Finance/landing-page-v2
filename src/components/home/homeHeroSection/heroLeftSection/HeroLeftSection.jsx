import React from "react";
import { Card, Image, Text, TitleText } from "../../../ui";
import HeroLeftSectionCTA from "./HeroLeftSectionCTA";

const HeroLeftSection = () => {
  return (
    <>
      <Card
        flex="3"
        width="100%"
        display="flex"
        flexdirection="column"
        gap="50px"
        mdgap="20px"
      >
        <TitleText
          heavy
          size="80px"
          lineheight="90px"
          mdsize="35px"
          mdlineheight="40px"
        >
          Financial Freedom for Employess
        </TitleText>
        <Image
          margin="-20px 0 0 0"
          width="100%"
          mdmargin="0"
          src="asset/hero-hr.png"
          alt="hr"
        />
        <Text
          lineheight="30px"
          size="18px"
          mright="30px"
          mdsize="16px"
          mdmright="0"
          margin="0"
        >
          Let's make your work more organize and easily using the Taskio
          Dashboard with many of the latest features in managing work every day.
        </Text>
        <HeroLeftSectionCTA />
      </Card>
    </>
  );
};

export default HeroLeftSection;
