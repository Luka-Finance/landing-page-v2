import React from "react";
import { Circle } from "..";

const BlurredCircle = (props) => {
  const { top, left, color, index } = props;
  return (
    <Circle
      mddisplay="none"
      bg={color}
      position="absolute"
      width="634px"
      height="634px"
      filter="blur(1000px)"
      top={top}
      left={left}
      index={index}
    />
  );
};

export default BlurredCircle;
