import React from "react";
import Benefits from "../components/home/benefits";
import FaqSection from "../components/home/faqSection";
import FinancialFreedomSection from "../components/home/financialFreedomSection";
import HomeHeroSection from "../components/home/homeHeroSection";
import HowItWorks from "../components/home/howItWorks";
import ProblemStatement from "../components/home/problemStatement";
import Layout from "../components/layout";
import Background from "../components/ui/reusable/Background";

const Homepage = () => {
  return (
    <>
      <Layout>
        <Background />
        <HomeHeroSection />
        <ProblemStatement />
        <Benefits />
        <HowItWorks />
        <FaqSection />
        <FinancialFreedomSection />
      </Layout>
    </>
  );
};

export default Homepage;
