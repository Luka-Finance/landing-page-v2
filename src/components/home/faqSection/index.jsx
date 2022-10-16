import React from "react";
import { Card, MainSection, primaryColor, TitleText } from "../../ui";
import MainFaq from "./mainFaq/MainFaq";

const FaqSection = () => {
  return (
    <MainSection width="100%" id="faq">
      <Card
        maxwidth="800px"
        width="100%"
        mdwidth="88%"
        margin="150px auto 0"
        mdmargin="70px auto 0"
        display="block"
      >
        <TitleText
          size="32px"
          lineheight="40px"
          mdsize="20px"
          mdlineheight="30px"
          color={primaryColor}
          textalign="center"
          heavy
        >
          Frequently Asked Questions
        </TitleText>
        <MainFaq />
      </Card>
    </MainSection>
  );
};

export default FaqSection;
