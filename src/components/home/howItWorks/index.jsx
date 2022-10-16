import React from "react";
import {
  Card,
  grayColor,
  MainSection,
  primaryColor,
  Text,
  TitleText,
} from "../../ui";
import HowItWorksCard from "./howItWorksCard/HowItWorksCard";

const HowItWorks = () => {
  return (
    <MainSection width="100%" id="how-it-works">
      <Card
        display="block"
        maxwidth="1180px"
        width="100%"
        margin="150px auto 0"
        mdmargin="70px auto 0"
        mdwidth="88%"
      >
        <TitleText
          color={primaryColor}
          size="32px"
          lineheight="40px"
          heavy
          mdsize="20px"
          mdlineheight="30px"
          textalign="center"
          mdmargin="0 0 10px"
        >
          How it works
        </TitleText>
        <Text
          color={grayColor}
          margin="10px 0 0"
          size="18px"
          lineheight="24.55px"
          mdsize="15px"
          mdlineheight="25px"
          textalign="center"
        >
          Easy steps to enjoy financial independence
        </Text>
        <HowItWorksCard />
      </Card>
    </MainSection>
  );
};

export default HowItWorks;
