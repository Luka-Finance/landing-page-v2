import React from "react";
import { Card, Image } from "../../../ui";

const HeroRightSection = () => {
  return (
    <>
      <Card flex="4">
        <Image
          width="110%"
          mdwidth="100%"
          src="asset/hero-image.png"
          alt="hero-image"
        />
      </Card>
    </>
  );
};

export default HeroRightSection;
