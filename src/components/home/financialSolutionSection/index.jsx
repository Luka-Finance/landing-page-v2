import React from "react";
import { Card, MainSection, primaryColor, TitleText } from "../../ui";
import FaqCTA from "./FaqCTA";
import FinancialSolutionCards from "./financialSolutionCards/FinancialSolutionCards";

const FinancialSolutionSection = () => {
  return (
    <>
      <MainSection width="100%" display="block">
        <Card
          display="flex"
          flexdirection="column"
          maxwidth="1180px"
          width="100%"
          margin="130px auto 0"
          mdmargin="70px auto 0"
          mdwidth="90%"
        >
          <TitleText
            size="32px"
            mdsize="20px"
            lineheight="40px"
            color={primaryColor}
            heavy
            textalign="center"
            padding="0 50px"
            mdpadding="0"
            mdlineheight="30px"
            margin="0 0 95px"
            mdmargin="0 0 50px"
          >
            We Luka team have developed a simple, beautiful and easy-to-use
            personal financial solution for everyone.
          </TitleText>
          <FinancialSolutionCards />
        </Card>
        <FaqCTA />
      </MainSection>
    </>
  );
};

export default FinancialSolutionSection;
