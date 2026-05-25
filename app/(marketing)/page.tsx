import { Hero } from "@/components/marketing/hero";
import { SocialProof } from "@/components/marketing/social-proof";
import { FeaturedJobs } from "@/components/marketing/featured-jobs";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Differentiators } from "@/components/marketing/differentiators";
import { Categories } from "@/components/marketing/categories";
import { ForCompanies } from "@/components/marketing/for-companies";
import { Faq } from "@/components/marketing/faq";
import { FinalCta } from "@/components/marketing/final-cta";

export default function HomePage() {
  return (
    <>
      <FeaturedJobs />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Differentiators />
      <Categories />
      <ForCompanies />
      <Faq />
      <FinalCta />
    </>
  );
}
