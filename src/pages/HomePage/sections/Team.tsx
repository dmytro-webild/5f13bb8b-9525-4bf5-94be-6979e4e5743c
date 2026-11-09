import React from 'react';
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

const chips = [
  "Conversion-first design",
  "SEO built in",
  "Australian hosting",
  "Transparent pricing",
  "Ongoing support",
];

export default function TeamSection(): React.JSX.Element {
  return (
    <div id="about" data-section="about" data-webild-section="about" className="scroll-mt-28 md:scroll-mt-36 pt-6 md:pt-10">
      <section aria-label="About section" className="py-20">
        <div className="flex flex-col gap-8 md:gap-10 w-content-width mx-auto">
          <div className="flex flex-col items-center gap-2">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit text-white/80 border-white/20">
              <p>{"About Cyan's Agency"}</p>
            </div>

            <TextAnimation
              text={"Websites built to get Australian businesses found"}
              variant={"fade-blur"}
              gradientText={true}
              tag="h2"
              className="md:max-w-8/10 text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
            />
          </div>

          <ScrollReveal variant="slide-up">
            <div className="p-8 md:p-12 card rounded flex flex-col items-start gap-8 border border-white/10 hover:border-white/30 transition-colors max-w-4xl mx-auto w-full">
              <div className="px-3.5 py-1.5 rounded card bg-white/5 border border-white/10 text-xs sm:text-sm text-foreground/80 font-medium">
                Josia Batoni, Founder · Melbourne, Australia
              </div>

              <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
                Cyan's Agency is a Melbourne web studio that builds fast, SEO-optimised websites that help businesses rank higher on Google and turn visitors into enquiries. Every site comes with reliable Australian hosting, ongoing support and growth tools like lead capture and missed-call text-back, so the site keeps working after launch.
              </p>

              <div className="flex flex-wrap gap-2.5 w-full pt-2">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="px-3.5 py-2 text-xs sm:text-sm card rounded border border-white/10 text-foreground/90 flex items-center gap-2"
                  >
                    <span className="size-1.5 rounded-full bg-white/80" />
                    {chip}
                  </span>
                ))}
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
