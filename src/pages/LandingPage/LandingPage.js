import React from "react";
import Banner from "../../components/Banner/Banner";
import CallToAction from "../../components/CallToAction/CallToAction";
import Features from "../../components/Features/Features";
import Footer from '../../components/Footer/Footer';
import Hero from "../../components/Hero/Hero";
import NetworkFooter from "../../components/NetworkFooter/NetworkFooter";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Banner
        content={{
          text: "Ready to take the next step?",
          button: "Learn More",
          target:
            "https://answers.ea.com/t5/forums/searchpage/tab/message?advanced=false&allow_punctuation=false&filter=location&location=category%3AAHQ-English&q=ea+app",
        }}
      />
      <CallToAction />
      <NetworkFooter/>
      <Footer/>
    </div>
  );
};

export default LandingPage;
