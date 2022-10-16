import React from "react";
import { useContext } from "react";
import { benefitContext } from "../../../helper/Context";
import { accentColor, Card, primaryColor, Text, TitleText } from "../../../ui";
import BenefitContent from "./benefitContent/BenefitContent";
import BenefitCTA from "./BenefitCTA";
import BenefitSwitch from "./BenefitSwitch";

const BenefitLeftSection = () => {
  const { isEmployee } = useContext(benefitContext);
  return (
    <>
      <Card
        display="flex"
        flexdirection="column"
        gap="30px"
        // mdgap="30px"
        flex="5"
      >
        <Card>
          <Text
            size="20px"
            mdsize="15px"
            lineheight="30px"
            mdlineheight="25px"
            // mdtextalign="center"
            color={accentColor}
            margin="0 0 12px"
            mdmargin="0 0 15px"
          >
            WHAT WILL YOU GET
          </Text>
          <TitleText
            size="32px"
            mdsize="20px"
            lineheight="40px"
            mdlineheight="30px"
            width="300px"
            mdwidth="unset"
            // mdtextalign="center"
            color={primaryColor}
            heavy
            mdpadding="0"
          >
            {isEmployee
              ? "What Benefits Will Employee Get"
              : "What Benefits Will Employer Get"}
          </TitleText>
        </Card>
        <BenefitSwitch />
        <BenefitContent />
        {/* <BenefitCTA /> */}
      </Card>
    </>
  );
};

export default BenefitLeftSection;
