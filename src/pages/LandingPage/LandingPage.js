import React from "react";
import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import TopHeader from '../../components/TopHeader/TopHeader'

const LandingPage = () => {
  return <div>
    <Hero/>
<Banner content={{text: 'Ready to take the next step?', button: 'Learn More', target: '#'}}/>
  </div>;
};

export default LandingPage;
