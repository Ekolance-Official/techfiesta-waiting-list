import React from "react";
import BodyWrapper from "../../components/BodyWrapper";
import Navbar from "../../components/Header/Navbar";
import Hero from "../../components/Home/Hero";
import WhyContainer from "../../components/Home/WhyContainer";
import HowToLaunch from "../../components/Home/HowToLaunch";
import BlockchainContent from "../../components/Home/BlockchainContent";
import BenefitsOfHackathon from "../../components/Home/BenefitsOfHackathon";
import HowToJoin from "../../components/Home/HowToJoin";
import Footer from "../../components/Footer/Footer";
import Map from "../../components/Home/Map";
import Experience from "../../components/Home/Experience";

function HomePage() {
  return (
    <BodyWrapper bgColor={"white"}>
      <Navbar />
      <Hero />
      <Map />
      <WhyContainer />
      <BlockchainContent />
      <BenefitsOfHackathon />
      <HowToLaunch />
      <Experience />
      <HowToJoin />
      <Footer />
    </BodyWrapper>
  );
}

export default HomePage;
