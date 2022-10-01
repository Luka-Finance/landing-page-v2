import React from "react";
import { Helmet } from "react-helmet";
import SetPassword from "../components/setPassword";

const SetPasswordPage = () => {
  return (
    <>
      <Helmet>
        <title>Set Password || Luka finance</title>
      </Helmet>
      <SetPassword />
    </>
  );
};

export default SetPasswordPage;
