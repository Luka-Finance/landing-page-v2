import React from "react";
import { Card, MainSection } from "../../ui";
import BenefitLeftSection from "./benefitLeftSection/BenefitLeftSection";
import BenefitRightSection from "./benefitRightSection/BenefitRightSection";

const Benefits = () => {
  return (
    <>
      <MainSection mtop="100px" width="100%" display="block">
        <Card
          maxwidth="1180px"
          width="100%"
          margin="0 auto"
          mdwidth="90%"
          display="block"
        >
          <Card>
            <Card
              display="flex"
              gap="75px"
              mdgap="50px"
              alignitems="flex-end"
              mdflexdirection="column"
            >
              <BenefitLeftSection />
              <BenefitRightSection />
            </Card>
          </Card>
        </Card>
      </MainSection>
    </>
  );
};

export default Benefits;
