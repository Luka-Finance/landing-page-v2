import React from "react";
import { Card, MainSection, primaryColor } from "../../ui";
import ContactSection from "./contactSection/ContactSection";
import MainFooter from "./mainFooter/MainFooter";
import CopyrightSection from "./copyrightSection/CopyrightSection";

const Footer = () => {
  return (
    <>
      <MainSection width="100%" mtop="100px" bg={primaryColor} ptop="100px">
        <Card
          maxwidth="1180px"
          width="100%"
          margin="0 auto"
          display="flex"
          flexdirection="column"
          gap="70px"
          mdwidth="88%"
        >
          <ContactSection />
          <MainFooter />
          <CopyrightSection />
        </Card>
      </MainSection>
    </>
  );
};

export default Footer;
