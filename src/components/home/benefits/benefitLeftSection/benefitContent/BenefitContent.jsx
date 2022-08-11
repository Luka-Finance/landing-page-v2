import React from "react";
import { Card, primaryColor, TitleText } from "../../../../ui";
import BenefitTrack from "./BenefitTrack";

const BenefitContent = () => {
  return (
    <>
      <Card>
        <TitleText
          size="24px"
          spacing="-0.03em"
          lineheight="36px"
          heavy
          mdsize="18px"
          mdlineheight="21px"
          color={primaryColor}
        >
          Track Business Expenses until its Milisecond
        </TitleText>
        <BenefitTrack />
      </Card>
    </>
  );
};

export default BenefitContent;
