import React from "react";
import { accentColor, Card, primaryColor, Text, TitleText } from "../../../ui";
import BenefitContent from "./benefitContent/BenefitContent";
import BenefitCTA from "./BenefitCTA";
import BenefitSwitch from "./BenefitSwitch";

const BenefitLeftSection = () => {
  return (
    <>
      <Card display="flex" flexdirection="column" gap="30px" flex="5">
        <Text
          size="20px"
          mdsize="12px"
          lineheight="30px"
          mdlineheight="18px"
          mdtextalign="center"
          color={accentColor}
          margin="0 0 12px"
        >
          WHAT WILL YOU GET
        </Text>
        <TitleText
          size="40px"
          mdsize="20px"
          lineheight="60px"
          mdlineheight="30px"
          mdtextalign="center"
          color={primaryColor}
          heavy
          mdpadding="0"
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
