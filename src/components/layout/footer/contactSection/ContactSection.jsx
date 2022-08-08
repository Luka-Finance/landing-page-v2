import React from "react";
import { Card } from "../../../ui";
import ContactLeftSection from "./contactLeftSection/ContactLeftSection";
import ContactRightSection from "./contactRightSection/ContactRightSection";

const ContactSection = () => {
  return (
    <Card
      display="flex"
      alignitems="center"
      mdflexdirection="column"
      gap="100px"
    >
      <ContactLeftSection />
      <ContactRightSection />
    </Card>
  );
};

export default ContactSection;
