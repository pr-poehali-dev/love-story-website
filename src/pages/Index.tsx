import React from "react";
import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import LoveConfession from "@/components/LoveConfession";
import CallToAction from "@/components/CallToAction";
import FloatingHearts from "@/components/FloatingHearts";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingHearts />
      <HeroSection />
      <StorySection />
      <LoveConfession />
      <CallToAction />
    </div>
  );
};

export default Index;
