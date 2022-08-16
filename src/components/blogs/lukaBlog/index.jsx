import React from "react";
import { Card, MainSection } from "../../ui";
import LukaBlogLeftSection from "./lukaBlogLeftSection/LukaBlogLeftSection";
import LukaBlogRightSection from "./lukaBlogRightSection/LukaBlogRightSection";

const LukaBlog = () => {
  return (
    <>
      <MainSection mtop="-90px" ptop="140px" position="relative" width="100%">
        <Card
          maxwidth="1180px"
          width="100%"
          mdwidth="90%"
          margin="0 auto"
          display="flex"
          smflexdirection="column"
          alignitems="center"
          justifycontent="space-between"
          smgap="50px"
        >
          <LukaBlogLeftSection />
          <LukaBlogRightSection />
        </Card>
      </MainSection>
    </>
  );
};

export default LukaBlog;
