import React from "react";
import HeroLeftSectionCTA from "../../home/homeHeroSection/heroLeftSection/HeroLeftSectionCTA";
import { Card, Text } from "../../ui";

const RightSection = () => {
  return (
    <>
      <Card
        display="flex"
        flexdirection="column"
        gap="30px"
        width="461px"
        mdwidth="100%"
      >
        <Text
          size="18px"
          lineheight="30px"
          mdsize="15px"
          mdwidth="unset"
          mdtextalign="center"
        >
          Let's make your work more organize and easily using the Taskio
          Dashboard with many of the latest features in managing work every day.
        </Text>
        <HeroLeftSectionCTA />
      </Card>
    </>
  );
};

export default RightSection;
