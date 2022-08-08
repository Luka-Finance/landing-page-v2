import React from "react";
import { benefitContents } from "../../../../data";
import { Card, Image, Text } from "../../../../ui";

const BenefitTrack = () => {
  return (
    <>
      <Card margin="30px 0 0" display="flex" flexdirection="column" gap="32px">
        {benefitContents.map((content, key) => (
          <Card display="flex" gap="14px" key={key}>
            <Image
              width="20px"
              height="20px"
              mdwidth="unset"
              src="asset/check.png"
              alt="check"
            />
            <Text size="18px" lineheight="27px">
              {content}
            </Text>
          </Card>
        ))}
      </Card>
    </>
  );
};

export default BenefitTrack;
