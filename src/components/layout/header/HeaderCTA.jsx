import React from "react";
import {
  accentColor,
  Card,
  grayColor,
  LinkText,
  primaryColor,
  whiteColor,
} from "../../ui";

const HeaderCTA = () => {
  return (
    <>
      <Card
        display="flex"
        alignitems="center"
        gap="20px"
        mdflexdirection="column"
        mdgap="20px"
      >
        <LinkText heavy hcolor={primaryColor} color={grayColor} to="/login">
          Login
        </LinkText>
        <LinkText
          color={whiteColor}
          bg={accentColor}
          heavy
          padding="10px"
          radius="10px"
          to="/signup"
        >
          Sign Up
        </LinkText>
      </Card>
    </>
  );
};

export default HeaderCTA;
