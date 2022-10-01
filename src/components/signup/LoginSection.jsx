import React from "react";
import { accentColor, Card, LinkText, primaryColor, Text } from "../ui";

const LoginSection = () => {
  return (
    <Card>
      <Text
        size="14px"
        lineheight="20px"
        color={primaryColor}
        textalign="center"
      >
        Don't have an account?{" "}
        <LinkText
          size="14px"
          lineheight="20px"
          color={accentColor}
          decoration="underline"
          align="center"
          to="/login"
        >
          Login
        </LinkText>
      </Text>
      <Text
        margin="10px 0 0"
        size="14px"
        lineheight="20px"
        color={primaryColor}
        textalign="center"
      >
        Are you an employee?{" "}
        <LinkText
          size="14px"
          lineheight="20px"
          color={accentColor}
          decoration="underline"
          align="center"
          to="/"
        >
          Refer your employer now
        </LinkText>
      </Text>
    </Card>
  );
};

export default LoginSection;
