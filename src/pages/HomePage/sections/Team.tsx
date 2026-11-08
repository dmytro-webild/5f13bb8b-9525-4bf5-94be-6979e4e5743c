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
              text={"No account managers, no offshore outsourcing — you work directly with me."}
              variant={"fade-blur"}
              gradientText={false}
              tag="p"
              className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance text-foreground/80"
            />
          </div>

          <ScrollReveal variant="slide-up">
            <div className="p-8 md:p-12 card rounded flex flex-col items-start gap-6 border border-white/10 hover:border-orange-500/30 transition-colors">
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-orange-400">
                  <MapPin className="size-4" /> Melbourne, Australia
                </div>
                <h3 className="text-3xl font-bold text-cream">Josia Batoni</h3>
                <p className="text-sm font-semibold text-orange-400">Founder, Cyans Agency</p>
              </div>

              <p className="text-lg text-foreground/90 leading-relaxed max-w-3xl">
                I’m Josia, a sole trader based in Melbourne. I started Cyan’s Agency to help local businesses get a website they’re proud of and more Google reviews, so they can book more clients.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
