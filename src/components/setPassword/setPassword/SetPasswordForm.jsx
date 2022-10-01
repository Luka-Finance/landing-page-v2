import React from "react";
import { accentColor, Button, Card, TextField, whiteColor } from "../../ui";

const SetPasswordForm = () => {
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
          type="password"
          placeholder="Password"
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
          placeholder="Re-enter password"
        />
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

export default SetPasswordForm;
