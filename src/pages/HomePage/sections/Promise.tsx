import React from 'react';
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BorderGlow from "@/components/ui/BorderGlow";
import { PhoneCall, Compass, Rocket, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "1. Discovery call",
    description: "I learn your goals, target market, and competitive landscape during an initial conversation.",
  },
  {
    icon: Compass,
    title: "2. Strategy & design",
    description: "Custom wireframes and design concepts tailored to represent your brand and convert visitors.",
  },
  {
    icon: Rocket,
    title: "3. Build & optimise",
    description: "Clean, fast website development with mobile-first responsiveness and built-in SEO optimisation.",
  },
  {
    icon: ShieldCheck,
    title: "4. Launch & support",
    description: "Go live with confidence, followed by managed Australian hosting, ongoing maintenance, and lead systems.",
  },
];

export default function ProcessSection(): React.JSX.Element {
  return (
    <div id="process" data-section="process" className="scroll-mt-24">
      <section aria-label="Process section" className="py-20">
        <div className="flex flex-col gap-8 md:gap-10 w-content-width mx-auto">
          <div className="flex flex-col items-center gap-2">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit text-white/80 border-white/20">
              <p>{"Process"}</p>
            </div>

            <TextAnimation
              text={"Simple 4-Step Process"}
              variant={"fade-blur"}
              gradientText={true}
              tag="h2"
              className="md:max-w-8/10 text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
            />

            <TextAnimation
              text={"Collaborative and transparent process — clients always know where things are at, with no surprise bills. Delivered on time, on brief, and on budget."}
              variant={"fade-blur"}
              gradientText={false}
              tag="p"
              className="md:max-w-7/10 text-base sm:text-lg md:text-xl leading-snug text-center text-balance text-foreground/80"
            />
          </div>

          <ScrollReveal variant="slide-up">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.title}
                    className="relative flex flex-col justify-between gap-5 p-6 md:p-7 card rounded border border-white/10 hover:border-white/30 transition-colors h-full min-h-[220px]"
                  >
                    <div className="flex items-center justify-center size-12 primary-button rounded-full">
                      <Icon className="size-5 text-primary-cta-text" strokeWidth={1.75} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl md:text-2xl font-bold text-cream leading-snug">{step.title}</h3>
                      <p className="text-sm md:text-base leading-relaxed text-foreground/80">{step.description}</p>
                    </div>
                    <BorderGlow />
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}