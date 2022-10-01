import React from "react";
import {
  Card,
  grayColor,
  primaryColor,
  Text,
  TitleText,
  whiteColor,
} from "../../ui";
import LoginForm from "./LoginForm";

const LoginSection = () => {
  return (
    <Card bg={whiteColor} radius="8px" padding="48px 32px 140px">
      <TitleText
        size="24px"
        heavy
        lineheight="31.25px"
        color={primaryColor}
        textalign="center"
      >
        Log In to Employer Portal
      </TitleText>
      <Text size="14px" lineheight="20px" color={grayColor} textalign="center">
        Enter your email and password below
      </Text>
      <LoginForm />
    </Card>
  );
};

export default LoginSection;
