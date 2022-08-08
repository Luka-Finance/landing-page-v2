import React from "react";
import { Card, grayColor, MainSection, Text, TitleText } from "../../ui";

const ProblemStatement = () => {
  return (
    <>
      <MainSection width="100%" mtop="242px" mdmtop="100px">
        <Card
          maxwidth="1180px"
          width="100%"
          display="flex"
          flexdirection="column"
          alignitems="center"
          margin="0 auto"
          gap="63px"
          mdgap="30px"
          mdwidth="90%"
        >
          <TitleText
            size="40px"
            lineheight="48.41px"
            textalign="center"
            heavy
            padding="0 120px"
            mdsize="25px"
            mdpadding="0"
            mdtextalign="left"
            smlineheight="35px"
          >
            More than 75% of employees run out of funds before the next payday
          </TitleText>
          <Text size="20px" lineheight="30px" color={grayColor} mdsize="15px">
            Save them from high interest loan sharks that send embarrasing
            messages to their families and friends.
          </Text>
        </Card>
      </MainSection>
    </>
  );
};

export default ProblemStatement;
