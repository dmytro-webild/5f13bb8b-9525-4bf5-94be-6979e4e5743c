import React from 'react';
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import { CheckCircle2, Globe } from "lucide-react";

export default function WorkSection(): React.JSX.Element {
  return (
    <div id="work" data-section="work" className="scroll-mt-24 md:scroll-mt-28">
      <section aria-label="Work section" className="py-20">
        <div className="flex flex-col gap-8 md:gap-10 w-content-width mx-auto">
          <div className="flex flex-col items-center gap-2">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit text-white/80 border-white/20">
              <p>{"Work"}</p>
            </div>

            <TextAnimation
              text={"Cyans Agency — Built to Perform"}
              variant={"fade-blur"}
              gradientText={true}
              tag="h2"
              className="md:max-w-8/10 text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
            />

            <TextAnimation
              text={"This website is a direct example of my work — bespoke design, fast loading speeds, mobile-first responsiveness, and built-in SEO."}
              variant={"fade-blur"}
              gradientText={false}
              tag="p"
              className="md:max-w-7/10 text-base sm:text-lg md:text-xl leading-snug text-center text-balance text-foreground/80"
            />
          </div>

          <ScrollReveal variant="slide-up">
            <div className="p-6 md:p-10 card rounded flex flex-col md:flex-row items-center gap-8 border border-white/10 hover:border-white/30 transition-colors">
              <div className="w-full md:w-1/2 flex flex-col rounded-lg border border-white/20 bg-zinc-950 overflow-hidden shadow-2xl">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-3.5 py-2.5 bg-zinc-900 border-b border-white/10 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-red-500/80" />
                    <span className="size-2.5 rounded-full bg-yellow-500/80" />
                    <span className="size-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="mx-auto px-3 py-0.5 rounded bg-zinc-800 text-[11px] text-white/70 font-mono tracking-tight flex items-center gap-1.5 border border-white/5">
                    <Globe className="size-3 text-white/50" />
                    <span>cyansagency.com.au</span>
                  </div>
                </div>
                {/* Screenshot inside browser */}
                <div className="relative aspect-[16/10] bg-black overflow-hidden group">
                  <ImageOrVideo
                    imageSrc="https://storage.googleapis.com/webild/default/templates/web-agency-2/projectnew1.webp"
                    className="w-full h-full object-cover object-top brightness-95 contrast-105 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 w-fit">
                  <CheckCircle2 className="size-3.5" /> Live Showcase Site
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-cream">Cyans Agency Website</h3>
                <p className="text-base leading-relaxed text-foreground/80">
                  Built for my sole-trader business in Melbourne. Designed to demonstrate fast loading, crisp typography, custom responsive layout, and built-in lead automation.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-3 py-1 rounded card border border-white/10 text-foreground/70">Custom Responsive Design</span>
                  <span className="text-xs px-3 py-1 rounded card border border-white/10 text-foreground/70">Australian Hosting</span>
                  <span className="text-xs px-3 py-1 rounded card border border-white/10 text-foreground/70">Built-In On-Page SEO</span>
                  <span className="text-xs px-3 py-1 rounded card border border-white/10 text-foreground/70">Lead Automation</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}