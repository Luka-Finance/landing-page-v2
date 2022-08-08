import React from "react";
import { accentColor, Button, Card, whiteColor } from "../../../ui";

const BenefitCTA = () => {
  return (
    <Card>
      <Button
        padding="20px 23px"
        size="18px"
        lineheight="21.78px"
        color={whiteColor}
        bg={accentColor}
        radius="20px"
      >
        Interested? Register Now
      </Button>
    </Card>
  );
};

export default BenefitCTA;
