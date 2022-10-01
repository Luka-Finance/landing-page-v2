import React from "react";
import { financialSolutionsDetails } from "../../../data";
import { Card, primaryColor, Text, TitleText, whiteColor } from "../../../ui";

const FinancialSolutionRightDiv = () => {
  return (
    <>
      <Card flex="2">
        <Text
          size="24px"
          heavy
          color={primaryColor}
          margin="0 0 68px"
          mdmargin="0 0 30px"
          mdsize="20px"
        >
          See our solutions list
        </Text>
        <Card display="flex" flexdirection="column" gap="40px">
          {financialSolutionsDetails.map((item, index) => (
            <Card
              display="flex"
              mdflexdirection="column"
              gap="35px"
              smgap="15px"
              key={index}
              width="100%"
            >
              <Card
                bg={primaryColor}
                radius="50%"
                display="flex"
                justifycontent="center"
                alignitems="center"
                width="48px"
                mdwidth="34px"
                mdheight="34px"
                height="48px"
              >
                <TitleText
                  color={whiteColor}
                  size="25px"
                  smsize="15px"
                  heavy
                  lineheight="40px"
                >
                  {item.number}
                </TitleText>
              </Card>
              <Card display="flex" flexdirection="column" gap="20px">
                <TitleText size="30px" smsize="18px" heavy>
                  {item.heading}
                </TitleText>
                <Text size="18px" color="#A6A6A6" smsize="15px" width="340px">
                  {item.details}
                </Text>
              </Card>
            </Card>
          ))}
        </Card>
      </Card>
    </>
  );
};

export default FinancialSolutionRightDiv;
