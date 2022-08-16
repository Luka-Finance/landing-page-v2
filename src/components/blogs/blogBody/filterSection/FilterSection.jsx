import React from "react";
import { Card } from "../../../ui";
import BlogSearch from "./BlogSearch";
import BlogToggle from "./BlogToggle";

const FilterSection = () => {
  return (
    <>
      <Card
        width="100%"
        margin="100px 0 0"
        display="flex"
        mdflexdirection="column"
        gap="20px"
        mdalignitems="center"
        justifycontent="space-between"
      >
        <BlogToggle />
        <BlogSearch />
      </Card>
    </>
  );
};

export default FilterSection;
