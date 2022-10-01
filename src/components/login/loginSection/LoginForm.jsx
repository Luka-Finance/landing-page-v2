import React from "react";
import {
  accentColor,
  Button,
  Card,
  grayColor,
  LinkText,
  TextField,
  whiteColor,
} from "../../ui";

const LoginForm = () => {
  return (
    <form>
      <Card margin="80px 0 0" display="flex" flexdirection="column" gap="40px">
        <TextField
          noborder
          padding="15px 0"
          hborder="none"
          borderbottom="1px solid #052D13CC"
          hborderbottom="1px solid #052D13CC"
          bg="none"
          width="316px"
          type="email"
          placeholder="Email"
        />
        <TextField
          noborder
          padding="15px 0"
          hborder="none"
          borderbottom="1px solid #052D13CC"
          hborderbottom="1px solid #052D13CC"
          bg="none"
          width="316px"
          type="password"
          placeholder="Password"
        />
        <LinkText
          margin="-30px 0 0"
          color={grayColor}
          align="right"
          size="10px"
          lineheight="12.55px"
          to="/"
        >
          Forgot Password
        </LinkText>
        <Button
          padding="15px"
          radius="8px"
          bg={accentColor}
          color={whiteColor}
          width="316px"
        >
          Submit
        </Button>
      </Card>
    </form>
  );
};

export default LoginForm;
