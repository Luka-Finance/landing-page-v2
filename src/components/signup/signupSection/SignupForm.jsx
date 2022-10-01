import React from "react";
import { useNavigate } from "react-router-dom";
import { accentColor, Button, Card, TextField, whiteColor } from "../../ui";

const SignupForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    navigate("/setpassword");
  };

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
          type="text"
          placeholder="Your full name"
        />
        <TextField
          noborder
          padding="15px 0"
          hborder="none"
          borderbottom="1px solid #052D13CC"
          hborderbottom="1px solid #052D13CC"
          bg="none"
          width="316px"
          type="text"
          placeholder="Company name"
        />
        <TextField
          noborder
          padding="15px 0"
          hborder="none"
          borderbottom="1px solid #052D13CC"
          hborderbottom="1px solid #052D13CC"
          bg="none"
          width="316px"
          type="text"
          placeholder="Job Title"
        />
        <TextField
          noborder
          padding="15px 0"
          hborder="none"
          borderbottom="1px solid #052D13CC"
          hborderbottom="1px solid #052D13CC"
          bg="none"
          width="316px"
          type="number"
          placeholder="Number of employee"
        />
        <TextField
          noborder
          padding="15px 0"
          hborder="none"
          borderbottom="1px solid #052D13CC"
          hborderbottom="1px solid #052D13CC"
          bg="none"
          width="316px"
          type="tel"
          placeholder="Phone Number"
        />
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
          type="text"
          placeholder="How did you hear about us"
        />
        <Button
          padding="15px"
          radius="8px"
          bg={accentColor}
          color={whiteColor}
          width="316px"
          onClick={handleSubmit}
        >
          Proceed
        </Button>
      </Card>
    </form>
  );
};

export default SignupForm;
