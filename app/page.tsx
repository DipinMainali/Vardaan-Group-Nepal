import HeroSlider from "@/components/sections/home/hero-slider";
import TrustStrip from "@/components/sections/home/trust-strip";
import OurFoundation from "@/components/sections/home/our-foundation";
import ExecutiveMessage from "@/components/sections/home/executive-message";
import HomeBusinesses from "@/components/sections/home/home-businesses";
import DualShowcase from "@/components/sections/home/dual-showcase";
import WhyChoose from "@/components/sections/home/why-choose";
import SocialProof from "@/components/sections/home/social-proof";
import PeopleImpact from "@/components/sections/home/people-impact";
import NewsEngagement from "@/components/sections/home/news-engagement";
import Testimonials from "@/components/sections/home/testimonials";
import DualCTA from "@/components/sections/home/dual-cta";
import InvestorRelationsContact from "@/components/sections/home/investor-relations-contact";
import ContactQuick from "@/components/sections/home/contact-quick";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <TrustStrip />
      <OurFoundation />
      <ExecutiveMessage />
      <HomeBusinesses />
      <DualShowcase />
      <WhyChoose />
      <SocialProof />
      <PeopleImpact />
      <NewsEngagement />
      <Testimonials />
      <DualCTA />
      <InvestorRelationsContact />
      <ContactQuick />
    </>
  );
}
