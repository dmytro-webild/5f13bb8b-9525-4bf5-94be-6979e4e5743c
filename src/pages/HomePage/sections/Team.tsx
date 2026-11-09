import React from 'react';
import TeamStackedCards from "@/components/sections/team/TeamStackedCards";

export default function TeamSection(): React.JSX.Element {
  return (
    <div id="about" data-section="about" data-webild-section="about" className="scroll-mt-24 md:scroll-mt-28">
      <TeamStackedCards
        textAnimation="fade-blur"
        tag="About Cyan's Agency"
        title="Websites built to get Australian businesses found"
        description="Cyan's Agency is a Melbourne web studio that builds fast, SEO-optimised websites that help businesses rank higher on Google and turn visitors into enquiries. Every site comes with reliable Australian hosting, ongoing support and growth tools like lead capture and missed-call text-back, so the site keeps working after launch."
        primaryButton={{ text: "Start a conversation", href: "https://calendly.com/josiabatoni/30min" }}
        members={[
          {
            name: "Josia Batoni",
            role: "Founder · Melbourne, Australia",
          },
        ]}
      />
    </div>
  );
}
