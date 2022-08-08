import React from "react";
import {
  accentColor,
  Button,
  Card,
  Image,
  TextField,
  whiteColor,
} from "../../../../ui";

const NewsLetter = () => {
  return (
    <>
      <form>
        <Card
          width="410px"
          mdwidth="100%"
          border="2px solid #A6A6A6"
          radius="70px"
          display="flex"
          padding="7px"
        >
          <TextField
            bg="transparent"
            type="email"
            border="none"
            padding="0 15px"
            hborder="none"
            color={whiteColor}
            placeholder="Enter your email here"
          />

          <Button
            radius="50%"
            padding="11px"
            height="46px"
            width="46px"
            bg={accentColor}
          >
            <Image src="asset/arrow-right.png" alt="arrow" />
          </Button>
        </Card>
      </form>
    </>
  );
};

export default NewsLetter;
