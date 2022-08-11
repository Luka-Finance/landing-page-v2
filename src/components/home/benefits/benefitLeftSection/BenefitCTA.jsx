import React from "react";
import { accentColor, Button, Card, whiteColor } from "../../../ui";

const BenefitCTA = () => {
  return (
    <Card>
      <Button
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
      </Button>
    </Card>
  );
};

export default BenefitCTA;
