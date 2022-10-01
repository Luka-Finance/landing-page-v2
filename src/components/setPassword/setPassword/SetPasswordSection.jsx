import React from "react";
import { Card, primaryColor, TitleText, whiteColor } from "../../ui";
import SetPasswordForm from "./SetPasswordForm";

const SetPasswordSection = () => {
  return (
    <Card bg={whiteColor} radius="8px" padding="48px 32px 140px">
      <TitleText
        size="24px"
        heavy
        lineheight="31.25px"
        color={primaryColor}
        textalign="center"
      >
        Set Password
      </TitleText>
      <SetPasswordForm />
    </Card>
  );
};

export default SetPasswordSection;
