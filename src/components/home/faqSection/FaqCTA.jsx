import React from "react";
import { accentColor, Card, LinkText, Text, whiteColor } from "../../ui";

const FaqCTA = () => {
  return (
    <Card
      margin="100px 0 0"
      mdmargin="50px 0 0"
      display="flex"
      flexdirection="column"
      gap="20px"
      alignitems="center"
    >
      <LinkText
        padding="25px"
        width="647px"
        mdwidth="unset"
        display="block"
        mdsize="15px"
        bg={accentColor}
        color={whiteColor}
        radius="20px"
        align="center"
        to="/"
      >
        Get started as an Employer
      </LinkText>
      <Text textalign="center" mdsize="15px" padding="0 50px">
        Are you an employee?{" "}
        <LinkText
          fontstyle="italic"
          textdecoration="underline"
          mdsize="15px"
          to="/"
        >
          Refer your employer here
        </LinkText>
      </Text>
    </Card>
  );
};

export default FaqCTA;
