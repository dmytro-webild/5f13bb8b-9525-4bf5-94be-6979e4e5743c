import React, { useState, useRef } from 'react';
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { Layout, Server, Search, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: "Website Design & Development",
    description: "Bespoke, conversion-focused websites built to turn visitors into paying clients.",
    features: [
      "Custom responsive design & UX",
      "Fast load speeds (Core Web Vitals)",
      "Built-in on-page SEO",
    ]
  },
  {
    icon: Server,
    title: "Website Hosting",
    description: "Managed local Australian hosting for faster load times, 99.9% uptime, and reliable security.",
    features: [
      "Australian data centre",
      "Free SSL certificate & daily backups",
      "Updates & security monitoring",
    ]
  },
  {
    icon: Search,
    title: "SEO Optimisation",
    description: "Strategic site structure and keyword optimisation to help your business rank higher on Google.",
    features: [
      "On-page SEO from day one",
      "Optimised meta titles & tags",
      "Google Search Console indexing",
    ]
  },
  {
    icon: ShieldCheck,
    title: "Ongoing Maintenance",
    description: "Proactive CMS updates and technical support to keep your site fast, safe, and up to date.",
    features: [
      "Regular CMS & security updates",
      "Uptime & performance checks",
      "Priority technical assistance",
    ]
  },
  {
    icon: Zap,
    title: "Growth Add-Ons",
    description: "Automation workflows and engagement tools that capture leads and boost customer reviews.",
    features: [
      "Lead capture & CRM automation",
      "Google Review collection systems",
      "Missed-call text-back & chat bots",
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
    <div data-webild-section="services" data-section="services" id="services" className="scroll-mt-28 md:scroll-mt-36 pt-6 md:pt-10">
      <section aria-label="Services section" className="py-20">
        <div className="flex flex-col gap-8 md:gap-10 w-content-width mx-auto">
          <div className="flex flex-col items-center gap-2">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit text-foreground/80 border-black/10">
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
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 px-1 scrollbar-none touch-pan-x"
              >
                {services.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={service.title}
                      ref={(el) => { cardRefs.current[idx] = el; }}
                      className="w-full shrink-0 snap-center snap-always p-5 card rounded flex flex-col justify-between gap-4 border border-black/10 hover:border-black/30 transition-colors"
                    >
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded card border border-black/10 text-black shrink-0">
                            <Icon className="size-5" />
                          </div>
                          <h3 className="text-lg font-bold text-black leading-tight">{service.title}</h3>
                        </div>

                        <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-black/10 flex flex-col gap-2">
                        {service.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs text-foreground/90">
                            <CheckCircle2 className="size-3.5 text-black/80 shrink-0" />
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
                      activeIdx === i ? "w-6 bg-black" : "w-2 bg-black/30"
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
                    className={`p-6 md:p-8 card rounded flex flex-col justify-between gap-5 border border-black/10 hover:border-black/30 transition-colors ${
                      isLarge ? "lg:col-span-1 border-black/20" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded card border border-black/10 text-black shrink-0">
                          <Icon className="size-6" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-black leading-snug">{service.title}</h3>
                      </div>

                      <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-black/10 flex flex-col gap-2.5">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-foreground/90">
                          <CheckCircle2 className="size-4 text-black/80 shrink-0" />
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