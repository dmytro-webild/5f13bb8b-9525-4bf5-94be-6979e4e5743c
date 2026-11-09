import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import React from 'react';
import HeroSection from './HomePage/sections/Hero';
import ServicesSection from './HomePage/sections/Services';
import ProcessSection from './HomePage/sections/Promise';
import WorkSection from './HomePage/sections/Work';
import TeamSection from './HomePage/sections/Team';
import FaqSection from './HomePage/sections/Faq';
import ContactSection from './HomePage/sections/Contact';

export default function HomePage(): React.JSX.Element {
  return (
    <StyleProvider siteBackground="aurora" heroBackground="lightRaysCorner" buttonVariant="stagger">
      <SiteBackgroundSlot />

      <HeroSection />

      <ServicesSection />

      <ProcessSection />

      <WorkSection />

      <TeamSection />

      <FaqSection />

      <ContactSection />
    </StyleProvider>
  );
}
