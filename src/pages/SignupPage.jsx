import React from "react";
import { Helmet } from "react-helmet";
import Signup from "../components/signup";

const SignupPage = () => {
  return (
    <>
      <Helmet>
        <title>Signup || Luka finance</title>
      </Helmet>
      <Signup />
    </>
  );
};

export default SignupPage;
