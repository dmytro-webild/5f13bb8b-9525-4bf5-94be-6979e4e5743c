import React from 'react';
import HeroSplit from "@/components/sections/hero/HeroSplit";

export default function HeroSection(): React.JSX.Element {
  return (
    <div id="hero" data-section="hero">
      <HeroSplit
        textAnimation="fade-blur"
        tag="📍 Melbourne | Websites + Google Reviews"
        title="Websites and Google reviews that help you get more clients"
        description="I build clean websites and set up systems so happy customers leave Google reviews — so local businesses get more leads and more bookings."
        primaryButton={{ text: "Book a free consultation", href: "#contact" }}
        secondaryButton={{ text: "How it works", href: "#process" }}
        imageSrc="https://storage.googleapis.com/webild/users/user_3FwL5pfkeyOX14T98rYzVwLBGK9/uploaded-1794128875631-x65p39bt.png"
        containerClassName="bg-transparent border-0 shadow-none p-0 overflow-visible"
        imageClassName="object-contain w-full h-full max-h-[480px] rounded-none mix-blend-screen bg-transparent border-0 shadow-none drop-shadow-2xl"
      />
    </div>
  );
}
