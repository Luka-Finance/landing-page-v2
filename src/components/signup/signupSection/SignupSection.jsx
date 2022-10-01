import React from "react";
import { Card, primaryColor, TitleText, whiteColor } from "../../ui";
import SignupForm from "./SignupForm";

const SignupSection = () => {
  return (
    <Card bg={whiteColor} radius="8px" padding="48px 32px 140px">
      <TitleText
        size="24px"
        heavy
        lineheight="31.25px"
        color={primaryColor}
        textalign="center"
      >
        Get Started
      </TitleText>
      <SignupForm />
    </Card>
  );
};

export default SignupSection;
