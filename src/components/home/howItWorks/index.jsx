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
    <MainSection width="100%">
      <Card
        display="block"
        maxwidth="1180px"
        width="100%"
        margin="150px auto 0"
        mdmargin="70px auto 0"
        mdwidth="90%"
      >
        <TitleText
          color={primaryColor}
          size="50px"
          lineheight="73px"
          heavy
          mdsize="25px"
          mdlineheight="35px"
          textalign="center"
        >
          How it works
        </TitleText>
        <Text
          color={grayColor}
          size="18px"
          lineheight="24.55px"
          mdsize="15pxpx"
          mdlineheight="22"
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
