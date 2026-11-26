import { StyleProvider } from "@/components/ui/StyleProvider";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import React from 'react';
import SEO from '@/components/SEO';
import HeroSection from './HomePage/sections/Hero';
import ServicesSection from './HomePage/sections/Services';
import ProcessSection from './HomePage/sections/Promise';
import WorkSection from './HomePage/sections/Work';
import TeamSection from './HomePage/sections/Team';
import FaqSection from './HomePage/sections/Faq';
import ContactSection from './HomePage/sections/Contact';

const homepageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Cyan's Agency",
  "url": "https://cyansagency.com.au/",
  "logo": "https://storage.googleapis.com/webild/users/user_3FwL5pfkeyOX14T98rYzVwLBGK9/uploaded-1794144853094-88vtnccl.png",
  "image": "https://cyansagency.com.au/og-image.png",
  "telephone": "0410 904 201",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Templestowe Lower",
    "addressRegion": "VIC",
    "postalCode": "3107",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -37.768,
    "longitude": 145.118
  },
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Melbourne"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Victoria"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "description": "Cyan's Agency builds fast, mobile-friendly websites, Google Business Profiles and missed-call text-back for Melbourne tradies and local businesses.",
  "founder": {
    "@type": "Person",
    "name": "Josia Batoni"
  },
  "sameAs": [
    "https://share.google/So2p4Wf7HGCdzbI1h",
    "https://www.instagram.com/cyans.agency/"
  ]
};

export default function HomePage(): React.JSX.Element {
  return (
    <StyleProvider siteBackground="none" heroBackground="none" buttonVariant="stagger">
      <SEO
        title="Cyan's Agency | Web Design and Automation in Melbourne"
        description="Cyan's Agency builds fast, mobile-friendly websites, Google Business Profiles and missed-call text-back for Melbourne tradies and local businesses."
        canonicalUrl="https://cyansagency.com.au/"
        jsonLd={homepageSchema}
      />
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
