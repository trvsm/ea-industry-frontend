import React from "react";
import Banner from "../../components/Banner/Banner";
import CallToAction from "../../components/CallToAction/CallToAction";
import Features from "../../components/Features/Features";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";

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
      <CallToAction />
      <Footer />
    </div>
  );
};

export default LandingPage;
