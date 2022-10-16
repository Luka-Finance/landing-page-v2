import React from "react";
import { accentColor, Card, primaryColor, Text, whiteColor } from "../../ui";

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
      <a
        href="https://forms.gle/ffU1sWCg9nhQXywy8"
        style={{ textAlign: "center" }}
      >
        <Text
          padding="25px"
          width="647px"
          mdwidth="unset"
          display="block"
          mdsize="15px"
          bg={accentColor}
          color={whiteColor}
          radius="20px"
          align="center"
        >
          Join Our Waitlist
        </Text>
      </a>
      <Text textalign="center" mdsize="15px" padding="0 50px">
        Are you an employee?{" "}
        <a
          href="https://forms.gle/ffU1sWCg9nhQXywy8"
          style={{ display: "inline-flex" }}
        >
          <Text
            fontstyle="italic"
            textdecoration="underline"
            mdsize="15px"
            color={primaryColor}
          >
            Refer your employer here
          </Text>
        </a>
      </Text>
    </Card>
  );
};

export default FaqCTA;
