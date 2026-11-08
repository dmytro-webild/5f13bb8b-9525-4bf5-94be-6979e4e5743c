import React from "react";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Layout, Search, Server, Sparkles, LineChart, ShieldCheck } from "lucide-react";

const includedItems = [
  {
    icon: Layout,
    title: "Custom Design",
    description: "Bespoke visual identity and conversion-focused layouts tailored specifically to reflect your brand."
  },
  {
    icon: Search,
    title: "Built-In On-Page SEO",
    description: "Search-optimised structure and meta tags built in from day one to help you rank for relevant keywords."
  },
  {
    icon: Server,
    title: "Fast & Secure Australian Hosting",
    description: "Managed local Australian hosting featuring low latency, 99.9% uptime, free SSL, and daily backups."
  },
  {
    icon: Sparkles,
    title: "Conversion-Focused Layouts",
    description: "Strategic user experience and clear call-to-actions designed to convert site visitors into clients."
  },
  {
    icon: LineChart,
    title: "Tracking Setup",
    description: "Google Analytics and performance tracking configured to give you full visibility into website traffic."
  },
  {
    icon: ShieldCheck,
    title: "Post-Launch Support",
    description: "Ongoing maintenance, security monitoring, and regular updates so your site stays fast and secure."
  }
];

export default function WhatsIncludedSection(): React.JSX.Element {
  return (
    <div id="whats-included" data-section="whats-included">
      <section aria-label="What's Included section" className="py-20">
        <div className="flex flex-col gap-8 md:gap-10 w-content-width mx-auto">
          <div className="flex flex-col items-center gap-2">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit text-white/80 border-white/20">
              <p>{"What's Included"}</p>
            </div>

            <TextAnimation
              text={"Everything Included in Every Website Build"}
              variant={"fade-blur"}
              gradientText={true}
              tag="h2"
              className="md:max-w-8/10 text-5xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
            />

            <TextAnimation
              text={"Every project comes standard with a complete suite of essential features — no hidden fees or missing elements."}
              variant={"fade-blur"}
              gradientText={false}
              tag="p"
              className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance text-foreground/80"
            />
          </div>

          <ScrollReveal variant="slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {includedItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-6 card rounded flex flex-col gap-3 border border-white/10 hover:border-white/30 transition-colors"
                  >
                    <div className="p-2.5 rounded card w-fit border border-white/10 text-white">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-cream">{item.title}</h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">{item.description}</p>
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
