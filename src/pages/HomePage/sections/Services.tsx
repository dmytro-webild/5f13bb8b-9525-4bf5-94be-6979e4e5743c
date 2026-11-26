import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { Layout, MapPin, PhoneMissed, Zap, CheckCircle2, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Layout,
    title: "Websites",
    link: "/services/websites",
    description: "Bespoke, conversion-focused websites built to turn visitors into paying clients.",
    features: [
      "Custom responsive design & UX",
      "Fast load speeds (Core Web Vitals)",
      "Built-in on-page SEO",
    ]
  },
  {
    icon: MapPin,
    title: "Google Business Profile setup",
    link: "/services/google-business-profile",
    description: "Complete Google Business Profile setup, verification, and local map pack optimization.",
    features: [
      "Top 3 local map pack ranking",
      "Review generation funnels",
      "Local suburb & category setup",
    ]
  },
  {
    icon: PhoneMissed,
    title: "Missed-call text-back",
    link: "/services/missed-call-text-back",
    description: "Instant SMS response sent automatically to any customer who calls when you're busy.",
    features: [
      "Sub-5 second automated SMS",
      "Never lose a caller lead again",
      "Custom message & booking links",
    ]
  },
  {
    icon: Zap,
    title: "Automations",
    link: "/services/automations",
    description: "Streamlined workflow automations for lead generation, CRM sync, and Google reviews.",
    features: [
      "Lead routing & SMS alerts",
      "Automated review collection",
      "Calendly & CRM integration",
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
    <div data-webild-section="services" data-section="services" id="services" className="scroll-mt-24 md:scroll-mt-28">
      <section aria-label="Services section" className="py-8 md:py-12">
        <div className="flex flex-col gap-8 md:gap-10 w-content-width mx-auto">
          <div className="flex flex-col items-center gap-2">
            <div className="px-3 py-1 mb-1 text-sm card bg-[#EE3678]/10 text-[#EE3678] border border-[#EE3678]/30 rounded font-medium w-fit">
              <p>{"Services"}</p>
            </div>

            <TextAnimation
              text={"Web Design, Map Rankings & Automations"}
              variant={"fade-blur"}
              gradientText={true}
              tag="h2"
              className="md:max-w-8/10 text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance text-[#F4F4F5]"
            />

            <TextAnimation
              text={"Tailored web design, local SEO, and lead automation solutions for Melbourne tradies and local businesses."}
              variant={"fade-blur"}
              gradientText={false}
              tag="p"
              className="md:max-w-7/10 text-base sm:text-lg md:text-xl leading-snug text-center text-balance text-[#A1A1AA]"
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
                      className="w-full shrink-0 snap-center snap-always p-5 card rounded flex flex-col justify-between gap-4 border border-white/10 hover:border-[#EE3678]/40 transition-colors"
                    >
                      <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded card border border-white/10 text-[#EE3678] shrink-0">
                            <Icon className="size-5" />
                          </div>
                          <h3 className="text-lg font-bold text-[#F4F4F5] leading-tight">{service.title}</h3>
                        </div>

                        <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                          {service.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                        {service.features.map((feat) => (
                          <div key={feat} className="flex items-center gap-2 text-xs text-[#F4F4F5]">
                            <CheckCircle2 className="size-3.5 text-[#EE3678] shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                        <Link
                          to={service.link}
                          className="mt-2 text-xs text-[#EE3678] hover:underline inline-flex items-center gap-1 font-semibold"
                        >
                          Learn more <ArrowRight className="size-3" />
                        </Link>
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
                      activeIdx === i ? "w-6 bg-[#EE3678]" : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="p-6 card rounded flex flex-col justify-between gap-5 border border-white/10 hover:border-[#EE3678]/40 transition-colors"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 rounded card border border-white/10 text-[#EE3678] shrink-0">
                          <Icon className="size-6" />
                        </div>
                        <h3 className="text-xl font-bold text-[#F4F4F5] leading-snug">{service.title}</h3>
                      </div>

                      <p className="text-sm text-[#A1A1AA] leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                      {service.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2.5 text-xs text-[#F4F4F5]">
                          <CheckCircle2 className="size-4 text-[#EE3678] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                      <Link
                        to={service.link}
                        className="mt-2 text-sm text-[#EE3678] hover:underline inline-flex items-center gap-1 font-semibold"
                      >
                        Learn more <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
              <Button
                text="Book a strategy call"
                href="https://calendly.com/josiabatoni/30min"
                variant="primary"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}