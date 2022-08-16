import React from "react";
import { Helmet } from "react-helmet";
import { Card } from "../components/ui";
import Background from "../components/ui/reusable/Background";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Not Found || Luka finance</title>
      </Helmet>
      <Card height="100vh" width="100%" position="fixed" overflowy="hidden">
        <Background />
        <Card
          height="100vh"
          position="fixed"
          width="100%"
          display="flex"
          alignitems="center"
          justifycontent="center"
          overflowy="hidden"
        >
          Page Not Found
        </Card>
      </Card>
    </>
  );
};

export default NotFoundPage;
