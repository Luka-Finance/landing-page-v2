import React from "react";
import { accentColor, Card, MainSection, whiteColor } from "..";
import BlurredCircle from "./BlurredCircle";

const Background = () => {
  return (
    <MainSection
      position="relative"
      width="100%"
      index="-50"
      //   height="7464px"
      // overflowx="hidden"
    >
      <Card width="100%" height="7464px" position="relative">
        <BlurredCircle
          top="-280px"
          left="-317px"
          color={accentColor}
          index="-5"
        />
        <BlurredCircle top="376px" left="219px" color={whiteColor} index="-3" />
        <BlurredCircle top="-364px" left="581px" color="#FFD6D6" index="-4" />
        <BlurredCircle top="270px" left="1123px" color="#54BE96" index="-2" />
        <BlurredCircle top="2176px" left="-194px" color="#FFD6D6" index="-2" />
        <BlurredCircle top="3278px" left="1123px" color="#03A63C" index="-2" />
      </Card>
    </MainSection>
  );
};

export default Background;
