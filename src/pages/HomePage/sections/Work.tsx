import React from 'react';
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import { CheckCircle2 } from "lucide-react";

export default function WorkSection(): React.JSX.Element {
  return (
    <div id="work" data-section="work">
      <section aria-label="Work section" className="py-20">
        <div className="flex flex-col gap-8 md:gap-10 w-content-width mx-auto">
          <div className="flex flex-col items-center gap-2">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit text-orange-400 border-orange-500/20">
              <p>{"Work"}</p>
            </div>

            <TextAnimation
              text={"Cyans Agency — Built to Perform"}
              variant={"fade-blur"}
              gradientText={true}
              tag="h2"
              className="md:max-w-8/10 text-5xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
            />

            <TextAnimation
              text={"This website is a direct example of my work — clean design, fast performance, and built for conversion."}
              variant={"fade-blur"}
              gradientText={false}
              tag="p"
              className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance text-foreground/80"
            />
          </div>

          <ScrollReveal variant="slide-up">
            <div className="p-6 md:p-10 card rounded flex flex-col md:flex-row items-center gap-8 border border-white/10 hover:border-orange-500/30 transition-colors">
              <div className="w-full md:w-1/2 flex justify-center bg-black/40 p-8 rounded-xl border border-white/5">
                <ImageOrVideo
                  imageSrc="https://storage.googleapis.com/webild/users/user_3FwL5pfkeyOX14T98rYzVwLBGK9/uploaded-1794128875631-x65p39bt.png?_wi=2"
                  className="max-h-64 object-contain mix-blend-screen"
                />
              </div>

              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 w-fit">
                  <CheckCircle2 className="size-3.5" /> Live Showcase Site
                </div>
                <h3 className="text-3xl font-bold text-cream">Cyans Agency Website</h3>
                <p className="text-base leading-relaxed text-foreground/80">
                  Built for my sole-trader business in Melbourne. Designed to demonstrate fast loading, crisp typography, responsive layout, and integrated lead booking.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-3 py-1 rounded card border border-white/10 text-foreground/70">Custom Design</span>
                  <span className="text-xs px-3 py-1 rounded card border border-white/10 text-foreground/70">Mobile Responsive</span>
                  <span className="text-xs px-3 py-1 rounded card border border-white/10 text-foreground/70">Lead Automation</span>
                  <span className="text-xs px-3 py-1 rounded card border border-white/10 text-foreground/70">Google Review System</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
