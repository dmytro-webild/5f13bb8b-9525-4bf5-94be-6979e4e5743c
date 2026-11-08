import React, { useState, useRef } from 'react';
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { Layout, Server, Search, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: "Website Design & Development",
    tagline: "Bespoke & Conversion-Focused",
    description: "Custom, conversion-focused websites that reflect your brand and turn visitors into clients. Built with a collaborative, transparent process — always on brief, on time, and on budget with no surprise bills.",
    features: [
      "Custom responsive design & UX",
      "Mobile-first development",
      "Fast load speeds (Core Web Vitals)",
      "Brand-aligned visual identity",
      "Built-in on-page SEO",
      "Google Analytics & tracking setup"
    ]
  },
  {
    icon: Server,
    title: "Website Hosting",
    titleSuffix: "Reliable Australian Hosting",
    description: "Managed local Australian hosting providing low latency, faster load times for local visitors, and better data sovereignty. Includes full technical management so you never have to worry about server updates.",
    features: [
      "Australian data centre (low latency)",
      "Reliable Australian server infrastructure",
      "Free SSL (HTTPS) certificate",
      "Daily automated backups",
      "CMS & server updates",
      "Security monitoring & priority support"
    ]
  },
  {
    icon: Search,
    title: "SEO Optimisation",
    tagline: "Built-In Search Visibility",
    description: "Built-in site structure, meta tags, and optimised content architecture to ensure your website ranks for relevant keywords and attracts organic traffic from day one.",
    features: [
      "On-page SEO structure from day one",
      "Targeted meta titles & descriptions",
      "Search-friendly site architecture",
      "Google Search Console indexing",
      "Google Review system integration"
    ]
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Maintenance",
    tagline: "Post-Launch Peace of Mind",
    description: "Regular updates, security monitoring, and proactive checks to ensure your website remains secure, fast, and up to date long after launch.",
    features: [
      "Regular CMS & plugin updates",
      "Continuous security monitoring",
      "Uptime & speed checks",
      "Priority technical assistance"
    ]
  },
  {
    icon: Zap,
    title: "Growth Add-Ons",
    tagline: "Automation & Lead Systems",
    description: "Powerful automation workflows and interactive customer engagement tools built to turn more enquiries into booked clients automatically.",
    features: [
      "Business automation (lead capture to CRM workflows)",
      "Google Review collection & reputation systems",
      "Missed-call text-back systems",
      "Automated chat & engagement bots"
    ]
  }
];

export default function ServicesSection(): React.JSX.Element {
  const [activeIdx, setActiveIdx] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.firstElementChild ? (container.firstElementChild as HTMLElement).offsetWidth : 300;
    const newIdx = Math.round(scrollLeft / (cardWidth + 16));
    if (newIdx !== activeIdx && newIdx >= 0 && newIdx < services.length) {
      setActiveIdx(newIdx);
    }
  };

  const scrollToIdx = (idx: number) => {
    if (cardRefs.current[idx]) {
      cardRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      setActiveIdx(idx);
    }
  };

  return (
    <div data-webild-section="services" data-section="services" id="services" className="scroll-mt-24">
      <section aria-label="Services section" className="py-20">
        <div className="flex flex-col gap-8 md:gap-10 w-content-width mx-auto">
          <div className="flex flex-col items-center gap-2">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit text-white/80 border-white/20">
              <p>{"Services"}</p>
            </div>

            <TextAnimation
              text={"Core Web Design, Hosting & Automation Offerings"}
              variant={"fade-blur"}
              gradientText={true}
              tag="h2"
              className="md:max-w-8/10 text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
            />

            <TextAnimation
              text={"I provide end-to-end web solutions tailored strictly to local Australian businesses."}
              variant={"fade-blur"}
              gradientText={false}
              tag="p"
              className="md:max-w-7/10 text-base sm:text-lg md:text-xl leading-snug text-center text-balance text-foreground/80"
            />
          </div>

          <ScrollReveal variant="slide-up">
            {/* Mobile Swipe Carousel */}
            <div className="block md:hidden">
              <div
                ref={carouselRef}
                onScroll={handleScroll}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-1 scrollbar-none"
              >
                {services.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.title}
                      ref={(el) => { cardRefs.current[idx] = el; }}
                      className="w-[85vw] max-w-[340px] shrink-0 snap-center p-6 card rounded flex flex-col justify-between gap-6 border border-white/10 hover:border-white/30 transition-colors"
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded card border border-white/10 text-white w-fit">
                            <Icon className="size-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-cream leading-tight">{service.title}</h3>
                            <span className="text-xs text-white/70 font-medium">
                              {service.tagline || service.titleSuffix}
                            </span>
                          </div>
                        </div>

                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                        {service.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90">
                            <CheckCircle2 className="size-4 text-white/80 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Mobile Carousel Dots */}
              <div className="flex items-center justify-center gap-2 pt-3">
                {services.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to service ${i + 1}`}
                    onClick={() => scrollToIdx(i)}
                    className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                      activeIdx === i ? "w-6 bg-white" : "w-2 bg-white/30"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => {
                const Icon = service.icon;
                const isLarge = idx === 0 || idx === 1;
                return (
                  <div
                    key={service.title}
                    className={`p-6 md:p-8 card rounded flex flex-col justify-between gap-6 border border-white/10 hover:border-white/30 transition-colors ${
                      isLarge ? "lg:col-span-1 border-white/20" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded card border border-white/10 text-white w-fit">
                          <Icon className="size-6" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-cream">{service.title}</h3>
                          <span className="text-xs text-white/70 font-medium">
                            {service.tagline || service.titleSuffix}
                          </span>
                        </div>
                      </div>

                      <p className="text-base text-foreground/80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-sm text-foreground/90">
                          <CheckCircle2 className="size-4 text-white/80 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
              <Button
                text="Get a website quote"
                href="https://calendly.com/josiabatoni/30min"
                variant="primary"
              />
              <Button
                text="Discuss hosting options"
                href="https://calendly.com/josiabatoni/30min"
                variant="secondary"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}