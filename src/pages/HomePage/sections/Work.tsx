import React from 'react';
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { CheckCircle2, Globe } from "lucide-react";

export default function WorkSection(): React.JSX.Element {
  return (
    <div id="work" data-section="work" className="scroll-mt-24 md:scroll-mt-28">
      <section aria-label="Work section" className="py-8 md:py-12">
        <div className="flex flex-col gap-8 md:gap-10 w-content-width mx-auto">
          <div className="flex flex-col items-center gap-2">
            <div className="px-3 py-1 mb-1 text-sm card bg-[#EE3678]/10 text-[#EE3678] border border-[#EE3678]/30 rounded font-medium w-fit">
              <p>{"Work"}</p>
            </div>

            <TextAnimation
              text={"Cyans Agency — Built to Perform"}
              variant={"fade-blur"}
              gradientText={true}
              tag="h2"
              className="md:max-w-8/10 text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance text-[#F4F4F5]"
            />

            <TextAnimation
              text={"This website is a direct example of my work — bespoke design, fast loading speeds, mobile-first responsiveness, and built-in SEO."}
              variant={"fade-blur"}
              gradientText={false}
              tag="p"
              className="md:max-w-7/10 text-base sm:text-lg md:text-xl leading-snug text-center text-balance text-[#A1A1AA]"
            />
          </div>

          <ScrollReveal variant="slide-up">
            <div className="p-6 md:p-10 card rounded flex flex-col md:flex-row items-center gap-8 border border-white/10 hover:border-[#EE3678]/40 transition-colors">
              <div className="w-full md:w-1/2 flex flex-col rounded-lg border border-white/10 bg-[#18181B] overflow-hidden shadow-2xl">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-3.5 py-2.5 bg-[#27272A] border-b border-white/10 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-red-500/80" />
                    <span className="size-2.5 rounded-full bg-yellow-500/80" />
                    <span className="size-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <div className="mx-auto px-3 py-0.5 rounded bg-[#18181B] text-[#A1A1AA] font-mono tracking-tight flex items-center gap-1.5 border border-white/10">
                    <Globe className="size-3 text-[#EE3678]" />
                    <span>cyansagency.com.au</span>
                  </div>
                </div>

                {/* Screenshot inside browser */}
                <div className="relative aspect-[16/10] bg-[#0F0F10] overflow-hidden group p-4 sm:p-5 flex flex-col justify-between select-none border-t border-white/5 transition-transform duration-500 group-hover:scale-[1.01]">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 relative z-1">
                    <div className="flex items-center gap-2">
                      <img
                        src="https://storage.googleapis.com/webild/users/user_3FwL5pfkeyOX14T98rYzVwLBGK9/uploaded-1794144853094-88vtnccl.png?_wi=1"
                        alt="Cyan's Agency Logo"
                        className="h-4 w-auto brightness-0 invert"
                      />
                      <span className="text-[11px] font-bold text-[#F4F4F5] tracking-tight">Cyan's Agency</span>
                    </div>
                    <div className="hidden sm:flex items-center gap-3 text-[10px] text-[#A1A1AA]">
                      <span>Services</span>
                      <span>Process</span>
                      <span>Work</span>
                      <span>About</span>
                    </div>
                    <span className="px-2 py-0.5 text-[9px] font-medium bg-[#EE3678] text-white rounded">Book</span>
                  </div>

                  <div className="flex flex-col items-start gap-2 py-2 relative z-1">
                    <div className="px-2 py-0.5 text-[9px] rounded bg-[#EE3678]/10 border border-[#EE3678]/30 text-[#EE3678] font-medium">
                      Melbourne · Web Design & Hosting
                    </div>
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#F4F4F5] leading-tight">
                      Websites built to get Australian businesses found
                    </h4>
                    <p className="text-[10px] sm:text-[11px] text-[#A1A1AA] line-clamp-2 leading-relaxed">
                      Cyan's Agency builds fast, SEO-optimised websites that help businesses rank higher on Google and turn visitors into enquiries.
                    </p>
                    <div className="flex items-center gap-2 pt-1">
                      <span className="px-2 py-1 text-[9px] bg-[#EE3678] text-white font-semibold rounded">Book Consultation</span>
                      <span className="px-2 py-1 text-[9px] bg-[#27272A] text-[#F4F4F5] border border-white/20 rounded">Our Services</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[9px] text-[#A1A1AA] pt-2 border-t border-white/10 relative z-1">
                    <span>cyansagency.com.au</span>
                    <span className="text-[#EE3678]">● Live Site</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-[#EE3678]/10 text-[#EE3678] border border-[#EE3678]/30 w-fit">
                  <CheckCircle2 className="size-3.5 text-[#EE3678]" /> Live Showcase Site
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#F4F4F5]">Cyans Agency Website</h3>
                <p className="text-base leading-relaxed text-[#A1A1AA]">
                  Built for Cyan's Agency in Melbourne. Designed to demonstrate fast loading, crisp typography, custom responsive layout, and built-in lead automation.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs px-3 py-1 rounded card border border-white/10 text-[#F4F4F5]">Custom Responsive Design</span>
                  <span className="text-xs px-3 py-1 rounded card border border-white/10 text-[#F4F4F5]">Australian Hosting</span>
                  <span className="text-xs px-3 py-1 rounded card border border-white/10 text-[#F4F4F5]">Built-In On-Page SEO</span>
                  <span className="text-xs px-3 py-1 rounded card border border-white/10 text-[#F4F4F5]">Lead Automation</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
