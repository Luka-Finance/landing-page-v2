import React from "react";
import { accentColor, Card, TextField, whiteColor } from "../../../ui";

const TestimonialForm = () => {
  return (
    <>
      <form>
        <Card
          display="flex"
          width="100%"
          height="50px"
          radius="10px"
          border="1px solid #979797"
          overflow="hidden"
        >
          <TextField
            flex="5"
            width="100%"
            type="email"
            placeholder="Enter Your Email"
            noborder
            hborder="none"
            bg="transparent"
          />
          <TextField
            flex="3"
            type="submit"
            value="Subscribe"
            padding="0"
            noborder
            hborder="none"
            size="20px"
            height="100%"
            lineheight="27.28px"
            bg={accentColor}
            color={whiteColor}
          />
        </Card>
      </form>
    </>
  );
};

export default TestimonialForm;
