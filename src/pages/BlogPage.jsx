import React from "react";
import BlogBody from "../components/blogs/blogBody";
import FinancialFreedom from "../components/blogs/financialFreedom";
import LukaBlog from "../components/blogs/lukaBlog";
import Layout from "../components/layout";
// import Background from "../components/ui/reusable/Background";

const BlogPage = () => {
  return (
    <>
      <Layout>
        {/* <Background /> */}
        <LukaBlog />
        <BlogBody />
        <FinancialFreedom />
      </Layout>
    </>
  );
};

export default BlogPage;
