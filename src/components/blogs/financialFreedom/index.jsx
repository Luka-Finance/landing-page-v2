import React from "react";
import { Card, MainSection, primaryColor, TitleText } from "../../ui";
import RightSection from "./RightSection";

const FinancialFreedom = () => {
  return (
    <>
      <MainSection width="100%">
        <Card
          display="flex"
          width="100%"
          maxwidth="1180px"
          mdflexdirection="column"
          mdwidth="88%"
          margin="0 auto"
          justifycontent="space-between"
          alignitems="center"
          mdgap="30px"
        >
          <Card flex="1">
            <TitleText
              heavy
              size="80px"
              lineheight="100px"
              color={primaryColor}
              width="490px"
              mdwidth="unset"
              mdsize="25px"
              mdlineheight="35px"
              mdtextalign="center"
            >
              Financial Freedom for Employees
            </TitleText>
          </Card>
          <RightSection />
        </Card>
      </MainSection>
    </>
  );
};

export default FinancialFreedom;
