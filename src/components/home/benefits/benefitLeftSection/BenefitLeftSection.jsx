import React from "react";
import { accentColor, Card, Text, TitleText } from "../../../ui";
import BenefitContent from "./benefitContent/BenefitContent";
import BenefitCTA from "./BenefitCTA";
import BenefitSwitch from "./BenefitSwitch";

const BenefitLeftSection = () => {
  return (
    <>
      <Card display="flex" flexdirection="column" gap="30px" flex="5">
        <Text
          size="20px"
          lineheight="30px"
          color={accentColor}
          margin="0 0 12px"
        >
          WHAT WILL YOU GET
        </Text>
        <TitleText
          size="40px"
          lineheight="60px"
          heavy
          mdpadding="0"
          mdsize="25px"
          mdlineheight="35px"
          mdmargin="0 0 30px"
        >
          What Benefits Will Employer Get
        </TitleText>
        <BenefitSwitch />
        <BenefitContent />
        <BenefitCTA />
      </Card>
    </>
  );
};

export default BenefitLeftSection;
