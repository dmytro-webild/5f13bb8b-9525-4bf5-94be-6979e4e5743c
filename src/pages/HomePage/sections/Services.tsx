import { Star, Bot, User } from 'lucide-react';
import TextAnimation from "@/components/ui/TextAnimation";
import GridOrCarousel from "@/components/ui/GridOrCarousel";
import ScrollReveal from "@/components/ui/ScrollReveal";
import IconTextMarquee from "@/components/ui/IconTextMarquee";
import ChatMarquee from "@/components/ui/ChatMarquee";
import ChecklistTimeline from "@/components/ui/ChecklistTimeline";
import type { LucideIcon } from "lucide-react";

type IconInput = string | LucideIcon;

type FeatureCard = { title: string; description: string } & (
  | { bentoComponent: "icon-text-marquee"; centerIcon: IconInput; marqueeTexts: string[] }
  | { bentoComponent: "chat-marquee"; aiIcon: IconInput; userIcon: IconInput; exchanges: { userMessage: string; aiResponse: string }[]; placeholder: string }
  | { bentoComponent: "checklist-timeline"; heading: string; subheading: string; checklistItems: { label: string; detail: string }[]; completedLabel: string }
);

const features: FeatureCard[] = [
  {
    title: "Websites",
    description: "Custom sites that are fast, mobile-friendly and built to turn visitors into enquiries.",
    bentoComponent: "checklist-timeline",
    heading: "Custom Build Workflow",
    subheading: "1 to 2 Weeks",
    checklistItems: [
      {
        label: "Strategy & Layout",
        detail: "Day 1-2"
      },
      {
        label: "Design & Copywriting",
        detail: "Day 3-5"
      },
      {
        label: "Build, Test & Launch",
        detail: "Day 6-10"
      }
    ],
    completedLabel: "Live"
  },
  {
    title: "Google Reviews",
    description: "Help businesses get more genuine Google reviews so they show up more and win more trust.",
    bentoComponent: "icon-text-marquee",
    centerIcon: Star,
    marqueeTexts: ["Automated SMS Requests", "5-Star Review Growth", "Higher Google Search Rank", "Building Client Trust"]
  },
  {
    title: "Lead Follow-up & Automation",
    description: "Missed-call text-back, chat, and simple follow-up so leads don't get lost.",
    bentoComponent: "chat-marquee",
    aiIcon: Bot,
    userIcon: User,
    exchanges: [
      { userMessage: "Hi, I missed your call. Can I get more info about your services?", aiResponse: "Hi! Thanks for reaching out. I help local businesses get more leads & Google reviews. Would you like to book a quick chat?" },
      { userMessage: "Yes, I'd love to book a quick chat.", aiResponse: "Great! Pick any time on my online calendar that suits you." }
    ],
    placeholder: "Type a message..."
  }
];

const getBentoComponent = (feature: FeatureCard) => {
  switch (feature.bentoComponent) {
    case "icon-text-marquee": return <IconTextMarquee centerIcon={feature.centerIcon} texts={feature.marqueeTexts} />;
    case "chat-marquee": return <ChatMarquee aiIcon={feature.aiIcon} userIcon={feature.userIcon} exchanges={feature.exchanges} placeholder={feature.placeholder} />;
    case "checklist-timeline": return <ChecklistTimeline heading={feature.heading} subheading={feature.subheading} items={feature.checklistItems as [{ label: string; detail: string }, { label: string; detail: string }, { label: string; detail: string }]} completedLabel={feature.completedLabel} />;
  }
};

const ServicesInline = () => (
  <section aria-label="Services section" className="py-20">
    <div className="flex flex-col gap-8 md:gap-10">
      <div className="flex flex-col items-center w-content-width mx-auto gap-2">
        <div className="px-3 py-1 mb-1 text-sm card rounded w-fit text-white/80 border-white/20">
          <p>{"Services"}</p>
        </div>

        <TextAnimation
          text={"Simple Services That Generate More Leads & Bookings"}
          variant={"fade-blur"}
          gradientText={true}
          tag="h2"
          className="md:max-w-8/10 text-5xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
        />

        <TextAnimation
          text={"I focus strictly on high-impact web and automation solutions that help local Australian businesses grow."}
          variant={"fade-blur"}
          gradientText={false}
          tag="p"
          className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance text-foreground/80"
        />
      </div>
      <ScrollReveal variant="slide-up">
        <GridOrCarousel>
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col gap-3 xl:gap-3.5 2xl:gap-4 p-4 card rounded h-full border border-white/10 hover:border-white/30 transition-colors">
              <div className="relative h-64 overflow-hidden rounded p-3 bg-foreground/5 shadow-inner">{getBentoComponent(feature)}</div>
              <div className="flex flex-col gap-1.5 p-3">
                <h3 className="text-2xl font-semibold leading-snug text-cream">{feature.title}</h3>
                <p className="text-base leading-snug text-foreground/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </GridOrCarousel>
      </ScrollReveal>
    </div>
  </section>
);

export default function ServicesSection() {
  return (
    <div data-webild-section="services" data-section="services" id="services">
      <ServicesInline />
    </div>
  );
}
