import React from 'react';
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";
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
    titleSuffix: "Managed Australian Hosting",
    description: "Managed Australian hosting providing low latency, faster load times for local visitors, and better data sovereignty. Includes full technical management so you never have to worry about downtime or server updates.",
    features: [
      "Australian data centre (low latency)",
      "99.9% guaranteed uptime",
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
    description: "Built-in site structure, meta tags, and optimized content architecture to ensure your website ranks for relevant keywords and attracts organic traffic from day one.",
    features: [
      "On-page SEO structure from day one",
      "Targeted meta titles & descriptions",
      "Search-friendly site architecture",
      "Google Search Console indexing"
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
    description: "Powerful automation workflows and interactive customer engagement tools built to turn more inquiries into booked clients automatically.",
    features: [
      "Business automation (lead capture to CRM workflows)",
      "Missed-call text-back systems",
      "Automated chat & engagement bots"
    ]
  }
];

export default function ServicesSection(): React.JSX.Element {
  return (
    <div data-webild-section="services" data-section="services" id="services">
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
              className="md:max-w-8/10 text-5xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
            />

            <TextAnimation
              text={"I provide end-to-end web solutions tailored strictly to local Australian businesses."}
              variant={"fade-blur"}
              gradientText={false}
              tag="p"
              className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance text-foreground/80"
            />
          </div>

          <ScrollReveal variant="slide-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
