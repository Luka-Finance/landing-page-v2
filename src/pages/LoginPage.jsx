import React from "react";
import { Helmet } from "react-helmet";
import Login from "../components/login";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Login || Luka finance</title>
      </Helmet>
      <Login />
    </>
  );
};

export default LoginPage;
