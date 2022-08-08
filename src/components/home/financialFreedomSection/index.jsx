import React from "react";
import { Card, MainSection, primaryColor, TitleText } from "../../ui";
import FinancialFreedomCards from "./financialFreedomCards/FinancialFreedomCards";

const FinancialFreedomSection = () => {
  return (
    <>
      <MainSection width="100%" display="block">
        <Card
          display="flex"
          flexdirection="column"
          maxwidth="1180px"
          width="100%"
          margin="130px auto 0"
          mdwidth="90%"
        >
          <TitleText
            size="50px"
            mdsize="25px"
            lineheight="60px"
            color={primaryColor}
            heavy
            textalign="center"
            padding="0 50px"
            mdpadding="0"
            mdlineheight="35px"
            margin="0 0 95px"
            mdmargin="0 0 50px"
          >
            We’ve developed an amazing financial freedom suitesolution for
            seamless use
          </TitleText>
          <FinancialFreedomCards />
        </Card>
      </MainSection>
    </>
  );
};

export default FinancialFreedomSection;
