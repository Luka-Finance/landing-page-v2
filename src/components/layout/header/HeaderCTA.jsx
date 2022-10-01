import React from "react";
import { accentColor, Card, Text, whiteColor } from "../../ui";

const HeaderCTA = () => {
  return (
    <>
      <Card>
        <a href="https://forms.gle/ffU1sWCg9nhQXywy8">
          <Text
            color={whiteColor}
            bg={accentColor}
            heavy
            padding="10px"
            radius="10px"
          >
            Join Our Waitlist
          </Text>
        </a>
      </Card>
    </>
  );
};

export default HeaderCTA;
