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
        mdgap="30px"
      >
        <TitleText
          heavy
          size="80px"
          lineheight="90px"
          mdsize="30px"
          mdlineheight="40px"
          mdtextalign="center"
          mdpadding="0 20px"
        >
          Financial Freedom for Employess
        </TitleText>
        <Image
          margin="-20px 0 0 0"
          width="100%"
          mdwidth="50%"
          mdmargin="0 auto"
          src="asset/hero-hr.png"
          alt="hr"
        />
        <Text
          lineheight="30px"
          size="18px"
          mright="30px"
          mdsize="16px"
          mdlineheight="25px"
          mdtextalign="center"
          mdpadding="0 20px"
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
