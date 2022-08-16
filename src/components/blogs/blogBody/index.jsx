import React from "react";
import { Card, MainSection } from "../../ui";
import Blogs from "./blogs/Blogs";
import FilterSection from "./filterSection/FilterSection";

const BlogBody = () => {
  return (
    <>
      <MainSection width="100%">
        <Card
          width="100%"
          maxwidth="1180px"
          mdwidth="88%"
          margin="0 auto"
          display="block"
        >
          <FilterSection />
          <Blogs />
        </Card>
      </MainSection>
    </>
  );
};

export default BlogBody;
