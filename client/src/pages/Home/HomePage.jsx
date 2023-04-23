import React from "react";
import BodyWrapper from "../../components/BodyWrapper";
import Navbar from "../../components/Header/Navbar";
import Hero from "../../components/Home/Hero";
import WhyContainer from "../../components/Home/WhyContainer";
import HowToLaunch from "../../components/Home/HowToLaunch";
import BlockchainContent from "../../components/Home/BlockchainContent";
import WhyRunYourHackathon from "../../components/Home/WhyRunYourHackathon";
import HowToJoin from "../../components/Home/HowToJoin";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  return (
    <BodyWrapper bgColor={"white"}>
      <Navbar />
      <Hero />
      <WhyContainer />
      <BlockchainContent />
      <WhyRunYourHackathon />
      <HowToLaunch />
      {/*TODO: Add one section */}
      <HowToJoin />
      <Footer />
    </BodyWrapper>
  );
}

export default HomePage;
