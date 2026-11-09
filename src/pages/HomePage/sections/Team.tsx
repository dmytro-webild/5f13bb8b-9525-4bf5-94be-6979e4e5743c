import React from 'react';
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { MapPin, Layout, Server, Tag, Headphones } from "lucide-react";

export default function TeamSection(): React.JSX.Element {
  return (
    <div id="about" data-section="about" data-webild-section="about" className="scroll-mt-24 md:scroll-mt-28">
      <section aria-label="About section" className="py-20">
        <div className="flex flex-col gap-8 md:gap-10 w-content-width mx-auto">
          <div className="flex flex-col items-center gap-2">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit text-white/80 border-white/20">
              <p>{"About Cyan’s Agency"}</p>
            </div>

            <TextAnimation
              text={"Direct 1-on-1 Founder Collaboration"}
              variant={"fade-blur"}
              gradientText={true}
              tag="h2"
              className="md:max-w-8/10 text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
            />

            <TextAnimation
              text={"No account managers, no offshore outsourcing — you work directly with me."}
              variant={"fade-blur"}
              gradientText={false}
              tag="p"
              className="md:max-w-7/10 text-base sm:text-lg md:text-xl leading-snug text-center text-balance text-foreground/80"
            />
          </div>

          <ScrollReveal variant="slide-up">
            <div className="p-8 md:p-12 card rounded flex flex-col items-start gap-8 border border-white/10 hover:border-white/30 transition-colors max-w-4xl mx-auto w-full">
              <div className="flex flex-col gap-2">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-white/80">
                  <MapPin className="size-4" /> Melbourne, Australia
                </div>
                <h3 className="text-3xl font-bold text-cream">Josia Batoni</h3>
                <p className="text-sm font-semibold text-white/70">Founder, Cyan’s Agency</p>
              </div>

              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                I’m Josia Batoni, Founder of Cyan’s Agency, a sole trader in Melbourne. I build custom, conversion-focused websites that help Australian businesses rank higher on Google and get more leads. Every project combines strategic thinking with clean design and reliable local hosting.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full pt-2">
                <div className="flex items-center gap-3 text-sm card px-4 py-3 rounded border border-white/10 text-foreground/90">
                  <Layout className="size-4 text-white/80 shrink-0" />
                  <span>Conversion-first design</span>
                </div>
                <div className="flex items-center gap-3 text-sm card px-4 py-3 rounded border border-white/10 text-foreground/90">
                  <Server className="size-4 text-white/80 shrink-0" />
                  <span>Australian-based (just me) & Australian hosting</span>
                </div>
                <div className="flex items-center gap-3 text-sm card px-4 py-3 rounded border border-white/10 text-foreground/90">
                  <Tag className="size-4 text-white/80 shrink-0" />
                  <span>Transparent pricing</span>
                </div>
                <div className="flex items-center gap-3 text-sm card px-4 py-3 rounded border border-white/10 text-foreground/90">
                  <Headphones className="size-4 text-white/80 shrink-0" />
                  <span>Ongoing support & maintenance</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  text="Start a conversation"
                  href="https://calendly.com/josiabatoni/30min"
                  variant="primary"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}