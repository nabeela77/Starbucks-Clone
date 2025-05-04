import React from "react";
import Navbar from "../components/Navbar";
import RewardsBanner from "../components/RewardsBanner";
import HeroSection from "../components/HeroSection";
import GetYourFavorites from "../components/GetYourFavorites";
import GettingStartedSection from "../components/GettingStartedSection";
import ExtrasSection from "../components/ExtrasSection";
import EarnStarsSection from "../components/EarnStarsSection";
import Rewards from "../components/Rewards";
import Questions from "../components/Questions";
import TermsAndConditions from "../components/TermsAndConditions";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div className="w-full font-sans">
      <Navbar />
      <main>
        <RewardsBanner />
        <HeroSection />
        <GettingStartedSection />
        <GetYourFavorites />
        <ExtrasSection />
        <EarnStarsSection />
        <Rewards />
        <Questions />
        <TermsAndConditions />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
