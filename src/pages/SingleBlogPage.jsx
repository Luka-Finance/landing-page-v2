import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const SingleBlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog || Luka finance</title>
      </Helmet>
      <Layout>Single Blog</Layout>
    </>
  );
};

export default SingleBlogPage;
