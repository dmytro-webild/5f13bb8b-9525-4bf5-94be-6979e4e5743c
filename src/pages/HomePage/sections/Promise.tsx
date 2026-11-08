import React from 'react';
import FeaturesBorderGlow from "@/components/sections/features/FeaturesBorderGlow";
import { PhoneCall, Compass, Rocket, ShieldCheck } from "lucide-react";

export default function ProcessSection(): React.JSX.Element {
  return (
    <div id="process" data-section="process">
      <FeaturesBorderGlow
        textAnimation="fade-blur"
        tag="Process"
        title="Simple 4-Step Process"
        description="Collaborative and transparent process — clients always know where things are at, with no surprise bills. Delivered on time, on brief, and on budget."
        features={[
          {
            icon: PhoneCall,
            title: "1. Discovery call",
            description: "I learn your goals, target market, and competitive landscape during an initial conversation.",
          },
          {
            icon: Compass,
            title: "2. Strategy & design",
            description: "Custom wireframes and design concepts tailored to represent your brand and convert visitors.",
          },
          {
            icon: Rocket,
            title: "3. Build & optimise",
            description: "Clean, fast website development with mobile-first responsiveness and built-in SEO optimisation.",
          },
          {
            icon: ShieldCheck,
            title: "4. Launch & support",
            description: "Go live with confidence, followed by managed Australian hosting, ongoing maintenance, and lead systems.",
          },
        ]}
      />
    </div>
  );
}
