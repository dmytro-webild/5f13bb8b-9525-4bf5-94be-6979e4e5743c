import React from 'react';
import HeroSplit from "@/components/sections/hero/HeroSplit";

export default function HeroSection(): React.JSX.Element {
  return (
    <div id="hero" data-section="hero">
      <HeroSplit
        textAnimation="fade-blur"
        tag="📍 Melbourne | Bespoke Web Design & Australian Hosting"
        title="Conversion-focused websites built to turn visitors into clients"
        description="I build custom responsive websites with built-in SEO, managed Australian hosting, ongoing maintenance, and lead automation for local businesses."
        primaryButton={{ text: "Book a free consultation", href: "#contact" }}
        secondaryButton={{ text: "Explore services", href: "#services" }}
        imageSrc="https://storage.googleapis.com/webild/users/user_3FwL5pfkeyOX14T98rYzVwLBGK9/uploaded-1794144853094-88vtnccl.png?_wi=1"
        containerClassName="bg-transparent border-0 shadow-none p-0 overflow-visible"
        imageClassName="object-contain w-full h-full max-h-[480px] rounded-none brightness-0 invert bg-transparent border-0 shadow-none drop-shadow-2xl"
      />
    </div>
  );
}
