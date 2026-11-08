import React from 'react';
import FeaturesBorderGlow from "@/components/sections/features/FeaturesBorderGlow";
import { PhoneCall, Palette, Rocket, Star } from "lucide-react";

export default function ProcessSection(): React.JSX.Element {
  return (
    <div id="process" data-section="process">
      <FeaturesBorderGlow
        textAnimation="fade-blur"
        tag="How It Works"
        title="Our Simple 4-Step Process"
        description="Clear, honest, and straightforward execution from start to finish."
        features={[
          {
            icon: PhoneCall,
            title: "1. Quick call",
            description: "We figure out what the business needs, your current setup, and your lead goals.",
          },
          {
            icon: Palette,
            title: "2. Design",
            description: "I mock up the website and create a custom review & lead automation plan.",
          },
          {
            icon: Rocket,
            title: "3. Build & launch",
            description: "The site goes live — fast, responsive, and optimized for converting local visitors.",
          },
          {
            icon: Star,
            title: "4. Reviews & follow-up",
            description: "We set up the automated system that asks happy customers for Google reviews and follows up on missed leads.",
          },
        ]}
      />
    </div>
  );
}
