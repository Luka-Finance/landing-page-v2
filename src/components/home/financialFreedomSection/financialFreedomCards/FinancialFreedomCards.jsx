import React from "react";
import { financialFreedomContent } from "../../../data";
import {
  Card,
  grayColor,
  Image,
  primaryColor,
  Text,
  TitleText,
} from "../../../ui";

const FinancialFreedomCards = () => {
  return (
    <>
      <Card
        display="flex"
        justifycontent="space-between"
        mdflexdirection="column"
        mdgap="50px"
      >
        {financialFreedomContent.map((content, key) => (
          <Card
            display="flex"
            flexdirection="column"
            alignitems="center"
            mdwidth="95%"
            mdmargin="0 auto"
            gap="25px"
            key={key}
          >
            <Card
              width="364px"
              mdwidth="100%"
              height="430px"
              mdheight="350px"
              radius="20px"
              display="flex"
              alignitems="center"
              bg="#F9F8FE"
              position="relative"
              overflow="hidden"
            >
              <Image
                position={content.location ? "absolute" : "unset"}
                mdwidth="90%"
                src={content.imageSRC}
                alt={content.heading}
                right={content.location ? content.location.right : "unset"}
                bottom={content.location ? content.location.bottom : "unset"}
              />
            </Card>
            <TitleText
              size="30px"
              mdsize="20px"
              lineheight="30px"
              color={primaryColor}
              heavy
            >
              {content.heading}
            </TitleText>
            <Text
              width="340px"
              size="18px"
              mdsize="15px"
              lineheight="25px"
              color={grayColor}
              textalign="center"
            >
              {content.details}
            </Text>
          </Card>
        ))}
      </Card>
    </>
  );
};

export default FinancialFreedomCards;
