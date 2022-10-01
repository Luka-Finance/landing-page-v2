import React from "react";
import { Card } from "../../../ui";
import FooterLinks from "./footerLinks/FooterLinks";
import StayUpdated from "./stayUpdated/StayUpdated";

const MainFooter = () => {
  return (
    <>
      <Card display="flex" gap="150px" mdgap="50px" mdflexdirection="column">
        <FooterLinks />
        <StayUpdated />
      </Card>
    </>
  );
};

export default MainFooter;
