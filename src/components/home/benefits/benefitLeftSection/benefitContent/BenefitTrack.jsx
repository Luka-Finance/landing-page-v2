import React from "react";
import { benefitContents } from "../../../../data";
import { Card, Image, Text } from "../../../../ui";

const BenefitTrack = () => {
  return (
    <>
      <Card
        margin="30px 0 0"
        display="flex"
        flexdirection="column"
        gap="32px"
        mdgap="10px"
      >
        {benefitContents.map((content, key) => (
          <Card display="flex" gap="14px" key={key} alignitem="flex-start">
            <Image
              width="20px"
              height="20px"
              mdwidth="15px"
              mdheight="15px"
              mdmargin="2px 0 0"
              src="asset/check.png"
              alt="check"
            />
            <Text
              size="18px"
              lineheight="27px"
              mdsize="15px"
              mdpadding="0 30px 0 0"
              mdlineheight="25px"
              spacing="-0.02em"
            >
              {content}
            </Text>
          </Card>
        ))}
      </Card>
    </>
  );
};

export default BenefitTrack;
