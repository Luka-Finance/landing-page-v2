import React from "react";
import { accentColor, Card, Text, whiteColor } from "../../../ui";

const BenefitCTA = () => {
  return (
    <Card>
      <a href="https://forms.gle/ffU1sWCg9nhQXywy8">
        <Text
          width="fit-content"
          padding="20px 23px"
          mdpadding="14px 13px"
          size="18px"
          lineheight="21.78px"
          mdsize="12px"
          mdlineheight="16.37px"
          color={whiteColor}
          bg={accentColor}
          radius="20px"
          mdradius="10px"
        >
          Interested? Register Now
        </Text>
      </a>
    </Card>
  );
};

export default BenefitCTA;
