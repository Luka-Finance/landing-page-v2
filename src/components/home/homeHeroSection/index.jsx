import React from "react";
import { Card, MainSection } from "../../ui";
import HeroLeftSection from "./heroLeftSection/HeroLeftSection";
import HeroRightSection from "./heroRightSection/HeroRightSection";

const HomeHeroSection = () => {
  return (
    <>
      <MainSection mtop="-90px" ptop="140px" position="relative" width="100%">
        <Card
          maxwidth="1180px"
          width="100%"
          mdwidth="90%"
          margin="0 auto"
          display="flex"
          smflexdirection="column"
          alignitems="center"
          gap="35px"
          smgap="50px"
        >
          <HeroLeftSection />
          <HeroRightSection />
        </Card>
      </MainSection>
    </>
  );
};

export default HomeHeroSection;
