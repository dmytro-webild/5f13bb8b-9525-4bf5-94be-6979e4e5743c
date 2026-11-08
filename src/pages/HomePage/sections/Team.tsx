import React from 'react';
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { UserCheck, MapPin, Sparkles, Code2 } from "lucide-react";

export default function TeamSection(): React.JSX.Element {
  return (
    <div id="team" data-section="team">
      <section aria-label="About section" className="py-20">
        <div className="flex flex-col gap-8 md:gap-10 w-content-width mx-auto">
          <div className="flex flex-col items-center gap-2">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit text-orange-400 border-orange-500/20">
              <p>{"About Cyans Agency"}</p>
            </div>

            <TextAnimation
              text={"Direct 1-on-1 Founder Collaboration"}
              variant={"fade-blur"}
              gradientText={true}
              tag="h2"
              className="md:max-w-8/10 text-5xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
            />

            <TextAnimation
              text={"No account managers, no offshore outsourcing — you work directly with the founder."}
              variant={"fade-blur"}
              gradientText={false}
              tag="p"
              className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance text-foreground/80"
            />
          </div>

          <ScrollReveal variant="slide-up">
            <div className="p-8 md:p-12 card rounded flex flex-col md:flex-row items-center gap-8 md:gap-12 border border-white/10 hover:border-orange-500/30 transition-colors">
              <div className="size-36 md:size-44 rounded-full primary-button flex items-center justify-center shrink-0 border-4 border-orange-500/20 shadow-xl">
                <div className="text-center">
                  <span className="text-4xl font-extrabold text-white">JB</span>
                  <p className="text-xs text-white/90 font-medium">Josia Batoni</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 text-center md:text-left">
                <div>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-orange-400 mb-1">
                    <MapPin className="size-4" /> Based in Melbourne, Australia
                  </div>
                  <h3 className="text-3xl font-bold text-cream">Josia Batoni</h3>
                  <p className="text-sm font-semibold text-orange-400">Founder, Cyans Agency</p>
                </div>

                <p className="text-base text-foreground/85 leading-relaxed">
                  Hi, I&apos;m Josia. I run Cyans Agency as a sole trader in Melbourne. I partner directly with local business owners to build modern, high-performing websites and set up automated systems that earn genuine 5-star Google reviews.
                </p>
                <p className="text-base text-foreground/85 leading-relaxed">
                  My goal is straightforward: help your business show up better online, convert more website visitors into inquiries, and make sure missed calls turn into booked appointments.
                </p>

                <div className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start">
                  <div className="flex items-center gap-2 text-xs card px-3 py-1.5 rounded border border-white/10 text-foreground/80">
                    <UserCheck className="size-4 text-orange-400" /> Direct Communication
                  </div>
                  <div className="flex items-center gap-2 text-xs card px-3 py-1.5 rounded border border-white/10 text-foreground/80">
                    <Code2 className="size-4 text-orange-400" /> Clean Custom Builds
                  </div>
                  <div className="flex items-center gap-2 text-xs card px-3 py-1.5 rounded border border-white/10 text-foreground/80">
                    <Sparkles className="size-4 text-orange-400" /> Automated Reviews
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
