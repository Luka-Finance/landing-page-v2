import React from "react";
import { Card, TitleText } from "../../../../ui";
import BenefitTrack from "./BenefitTrack";

const BenefitContent = () => {
  return (
    <>
      <Card>
        <TitleText size="24px" lineheight="36px" heavy>
          Track Business Expenses until its Milisecond
        </TitleText>
        <BenefitTrack />
      </Card>
    </>
  );
};

export default BenefitContent;
