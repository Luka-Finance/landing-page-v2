import React from "react";
import {
  accentColor,
  Button,
  Card,
  InputLabel,
  primaryColor,
  TextAreaField,
  TextField,
  whiteColor,
} from "../../../../../ui";

const ContactForm = () => {
  return (
    <>
      <form>
        <Card
          display="flex"
          flexdirection="column"
          gap="10px"
          margin="40px 0 0"
        >
          <InputLabel
            size="18px"
            mdsize="15px"
            color={whiteColor}
            htmlFor="email"
          >
            Email
          </InputLabel>
          <TextField type="email" id="email" placeholder="Enter your Email" />
        </Card>
        <Card
          display="flex"
          flexdirection="column"
          gap="10px"
          margin="20px 0 0"
        >
          <InputLabel
            size="18px"
            color={whiteColor}
            htmlFor="message"
            mdsize="15px"
          >
            Message
          </InputLabel>
          <TextAreaField
            name="message"
            size="14px"
            pcolor
            height="133px"
            color={primaryColor}
            id="message"
            placeholder="Type your message"
          />
        </Card>
        <Button
          width="100%"
          padding="20px"
          size="16px"
          mdsize="15px"
          color={whiteColor}
          bg={accentColor}
          mtop="20px"
        >
          Send Message
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
