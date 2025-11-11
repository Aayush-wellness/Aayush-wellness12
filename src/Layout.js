import React from "react";
import Sliding from "./Slider";
import StackImage from "./StackImage";
import HeroSection from "./HeroSection";
import NewFooter from "./NewFooter";
import GummyProductSlider from "./GummyProductSlider";
import Header from './Header';
import AwCard from "./AwCard";
import AwCard2 from "./AwCard2";
import CleanEnergyHero from "./CleanEnergyHero";
import HomeBlog from "./HomeBlog";
import Homedoctor from "./Homedoctor";
import "./index.css";

function Layout() {
  return (
    <>
      <Header />
      <Sliding />
      <CleanEnergyHero />
<GummyProductSlider />
      <StackImage />
    



      <AwCard />
      <AwCard2 />
      <Homedoctor />
      <HeroSection />
      {/* <SectionTrail/>  */}


      {/* <SliderThird />  */}
      {/* <SectionSixAbove /> */}
      {/* <SectionFive /> */}

      {/* <CircularSlider/>  */}
      <HomeBlog />

      <NewFooter />
      {/* <FooterCopyright /> */}
    </>
  );
}

export default Layout;
