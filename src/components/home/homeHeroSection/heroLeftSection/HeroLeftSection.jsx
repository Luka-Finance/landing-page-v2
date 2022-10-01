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
          mdsize="35px"
          mdlineheight="40px"
          mdtextalign="center"
          mdpadding="0 20px"
        >
          Financial Freedom for Employees
        </TitleText>
        <Image
          margin="-20px 0 0 0"
          width="100%"
          mdwidth="70%"
          mdmargin="0 auto"
          src="asset/hero-hr.png"
          alt="hr"
        />
        <Text
          lineheight="30px"
          size="18px"
          mright="30px"
          mdsize="18px"
          mdlineheight="28px"
          mdtextalign="center"
          mdpadding="0 20px"
          mdmright="0"
          margin="0"
        >
          We are Introducing a new level of freedom for your employees. Luka
          Finance allows you to get access to your earnings before payday,
          enabling you to make split-second decisions on what to do with your
          money
        </Text>
        <HeroLeftSectionCTA />
      </Card>
    </>
  );
};

export default HeroLeftSection;
