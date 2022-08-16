import React from "react";
import { Card, primaryColor, Text } from "../../../ui";
import TestimonialForm from "./TestimonialForm";

const LukaBlogRightSection = () => {
  return (
    <Card width="430px" mdwidth="100%" display="block">
      <TestimonialForm />
      <Text
        width="100%"
        size="18px"
        margin="20px 0 0"
        mdmargin="20px 0 0"
        lineheight="30px"
        mdsize="15px"
        color={primaryColor}
        mdlineheight="25px"
        mdtextalign="center"
      >
        Enter your Email to Subscribe to our newsletter and be the first to know
        about our new updates
      </Text>
    </Card>
  );
};

export default LukaBlogRightSection;
