import React from "react";
import { Card, TitleText, whiteColor } from "../../../../ui";
import ContactForm from "./contactForm/ContactForm";

const ContactRightSection = () => {
  return (
    <Card
      flex="3"
      bg="#222938"
      radius="20px"
      padding="30px 86px"
      mdpadding="30px 20px"
      width="100%"
    >
      <TitleText
        size="30px"
        lineheight="36px"
        color={whiteColor}
        mdsize="20px"
        mdlineheight="30px"
      >
        Have anymore questions or enquiry? <br /> Drop us a message
      </TitleText>
      <ContactForm />
    </Card>
  );
};

export default ContactRightSection;
