import React from "react";
import { Card, grayColor, Text, TitleText, whiteColor } from "../../../../ui";
import CEODetails from "./CEODetails";

const ContactLeftSection = () => {
  return (
    <>
      <Card flex="3">
        <TitleText
          size="50px"
          lineheight="60.51px"
          color={whiteColor}
          heavy
          mdsize="30px"
          mdlineheight="40px"
        >
          Hear me out,
        </TitleText>
        <Card
          display="flex"
          flexdirection="column"
          gap="20px"
          margin="50px 0 0"
          mdmargin="20px 0 0"
        >
          <Text
            color={grayColor}
            size="18px"
            lineheight="30px"
            mdsize="15px"
            mdlineheight="25px"
          >
            I founded an underwear production company in 2017 that makes men
            underwear distributed to 4 African countries including Nigeria.
            <br />
            <br /> I realize that my employees who run out of cash before the
            next payday. So during these times, they are worried about their
            financial obligations, their productivity is reduced. <br />
            <br /> Further research shows that this problem happens in every
            compnay. I decided to take this problem head on, solve it for
            everyone and help you get all year round productivity from your
            employees.
          </Text>
          <CEODetails />
        </Card>
      </Card>
    </>
  );
};

export default ContactLeftSection;
