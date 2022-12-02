import React from "react";
import Banner from "../../components/Banner/Banner";
import CallToAction from "../../components/CallToAction/CallToAction";
import Features from "../../components/Features/Features";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import TopHeader from "../../components/TopHeader/TopHeader";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Banner
        content={{
          text: "Ready to take the next step?",
          button: "Learn More",
          target: "#",
        }}
      />
      <CallToAction/>
    </div>
  );
};

export default LandingPage;
