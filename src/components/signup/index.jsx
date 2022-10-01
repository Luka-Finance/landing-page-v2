import React from "react";
import { Card, Image } from "../ui";
import SignupSection from "./signupSection/SignupSection";
import LoginSection from "./LoginSection";

const Signup = () => {
  return (
    <>
      <Card width="100%" bg="#D7E3DB" display="block">
        <Card
          width="100%"
          display="flex"
          flexdirection="column"
          bg="transparent"
          gap="21px"
          alignitems="center"
          padding="150px 0 "
          justifycontent="center"
        >
          <Image src="asset/logo-login.png" alt="Luka Logo" />
          <SignupSection />
          <LoginSection />
        </Card>
      </Card>
    </>
  );
};

export default Signup;
