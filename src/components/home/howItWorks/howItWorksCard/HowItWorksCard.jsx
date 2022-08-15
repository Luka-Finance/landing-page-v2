import React from "react";
import { howItWorksDetails } from "../../../data";
import {
  accentColor,
  Card,
  LinkText,
  primaryColor,
  Text,
  TitleText,
  whiteColor,
} from "../../../ui";

const HowItWorksCard = () => {
  return (
    <>
      <Card
        display="flex"
        justifycontent="space-between"
        mdflexdirection="column"
        mdgap="50px"
        margin="65px 0 0"
        mdmargin="30px 0 0"
      >
        {howItWorksDetails.map((item, key) => (
          <Card
            display="flex"
            flexdirection="column"
            gap="50px"
            bg={item.diff === "" ? accentColor : whiteColor}
            padding="40px 20px"
            radius="20px"
            key={key}
            width="374px"
            mdwidth="100%"
          >
            <TitleText
              size="30px"
              mdsize="18px"
              lineheight="40.9px"
              mdlineheight="28px"
              color={item.diff === "" ? whiteColor : primaryColor}
              heavy
              textalign="center"
            >
              {item.heading}
            </TitleText>
            <Card
              bg={item.diff === "" ? whiteColor : "#F9FAFB"}
              radius="10px"
              display="flex"
              flexdirection="column"
              mdgap="10px"
              alignitems="center"
              padding="30px"
              minheight="371px"
              mdminheight="180px"
            >
              <Card
                bg={primaryColor}
                radius="50%"
                display="flex"
                justifycontent="center"
                alignitems="center"
                width="48px"
                height="48px"
                position="relative"
                top={item.diff === "" ? "unset" : "-50px"}
                mdtop="0"
              >
                <TitleText
                  color={whiteColor}
                  size="25px"
                  heavy
                  lineheight="40px"
                >
                  {item.number}
                </TitleText>
              </Card>
              <Card
                display="flex"
                flexdirection="column"
                justifycontent="space-between"
                height="100%"
                mdheight="100%"
                mdjustifycontent="space-between"
                gap={item.diff === "" ? "34px" : "unset"}
                mdgap="34px"
                // mdgap={item.diff === "" ? "34px" : "unset"}
                margin="20px 0 0"
              >
                <Text
                  textalign="center"
                  size="20px"
                  lineheight="30px"
                  mdsize="15px"
                  mdlineheight="25px"
                  color={primaryColor}
                  height="fit-content"
                >
                  {item.details}
                </Text>
                <LinkText
                  bg={item.diff === "" ? accentColor : whiteColor}
                  radius="20px"
                  height="fit-content"
                  color={item.diff === "" ? whiteColor : accentColor}
                  display="block"
                  mdsize="15px"
                  padding="17px"
                  alignitems="flex-end"
                  width="100%"
                  align="center"
                  to={item.path}
                >
                  {item.button}
                </LinkText>
              </Card>
            </Card>
          </Card>
        ))}
      </Card>
    </>
  );
};

export default HowItWorksCard;
