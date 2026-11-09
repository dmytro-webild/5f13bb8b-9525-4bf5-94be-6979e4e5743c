import React from 'react';
import HeroSplit from "@/components/sections/hero/HeroSplit";

export default function HeroSection(): React.JSX.Element {
  return (
    <div id="hero" data-section="hero" className="scroll-mt-28 md:scroll-mt-36 pt-6 md:pt-10">
      <HeroSplit
        textAnimation="fade-blur"
        tag="Melbourne · Web Design & Hosting"
        title="SEO websites that rank higher and get you more leads"
        description="I build custom websites for Melbourne and Australian businesses that help you show up on Google and turn visitors into clients."
        primaryButton={{ text: "Book a free consultation", href: "https://calendly.com/josiabatoni/30min" }}
        secondaryButton={{ text: "Explore services", href: "#services" }}
        imageSrc="https://storage.googleapis.com/webild/users/user_3FwL5pfkeyOX14T98rYzVwLBGK9/uploaded-1794144853094-88vtnccl.png?_wi=1"
        containerClassName="bg-transparent border-0 shadow-none p-0 overflow-visible"
        imageClassName="object-contain w-auto h-auto max-h-24 sm:max-h-36 md:max-h-[380px] mx-auto rounded-none brightness-0 invert bg-transparent border-0 shadow-none drop-shadow-2xl"
      />
    </div>
  );
}
