import React from 'react';
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle2, Globe } from "lucide-react";

export default function WorkSection(): React.JSX.Element {
  return (
    <div id="work" data-section="work" className="scroll-mt-28 md:scroll-mt-36 pt-6 md:pt-10">
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
                <div className="relative aspect-[16/10] bg-zinc-950/90 overflow-hidden group p-4 sm:p-5 flex flex-col justify-between select-none border-t border-white/5 transition-transform duration-500 group-hover:scale-[1.01]">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-1">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://storage.googleapis.com/webild/users/user_3FwL5pfkeyOX14T98rYzVwLBGK9/uploaded-1794144853094-88vtnccl.png?_wi=1"
                        alt="Cyan's Agency Logo"
                        className="h-4 w-auto brightness-0 invert"
                      />
                      <span className="text-[11px] font-bold text-white tracking-tight">Cyan's Agency</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-3 text-[10px] text-white/70">
                      <span>Services</span>
                      <span>Process</span>
                      <span>Work</span>
                      <span>About</span>
                    </div>
                    <span className="px-2 py-0.5 text-[9px] font-medium bg-white text-black rounded">Book</span>
                  </div>

                  <div className="flex flex-col items-start gap-2 py-2 relative z-1">
                    <div className="px-2 py-0.5 text-[9px] rounded bg-white/10 border border-white/20 text-white/90 font-medium">
                      Melbourne · Web Design & Hosting
                    </div>
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-white leading-tight">
                      Websites built to get Australian businesses found
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-white/70 line-clamp-2 leading-relaxed">
                      Cyan's Agency builds fast, SEO-optimised websites that help businesses rank higher on Google and turn visitors into enquiries.
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="px-2 py-1 text-[9px] bg-white text-black font-semibold rounded">Book Consultation</span>
                      <span className="px-2 py-1 text-[9px] bg-zinc-800 text-white border border-white/20 rounded">Our Services</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[9px] text-white/50 pt-2 border-t border-white/10 relative z-1">
                    <span>cyansagency.com.au</span>
                    <span className="text-emerald-400">● Live Site</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-white border border-white/20 w-fit">
                  <CheckCircle2 className="size-3.5" /> Live Showcase Site
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-cream">Cyans Agency Website</h3>
                <p className="text-base leading-relaxed text-foreground/80">
                  Built for Cyan's Agency in Melbourne. Designed to demonstrate fast loading, crisp typography, custom responsive layout, and built-in lead automation.
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
