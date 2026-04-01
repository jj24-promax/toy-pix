import { Hero } from "@/components/sections/Hero";
import { SocialProof } from "@/components/sections/SocialProof";
import { FeaturedCarousel } from "@/components/sections/FeaturedCarousel";
import { Benefits } from "@/components/sections/Benefits";
import { BestSellers } from "@/components/sections/BestSellers";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <FeaturedCarousel />
      <Benefits />
      <BestSellers />
      <FinalCta />
    </>
  );
}
