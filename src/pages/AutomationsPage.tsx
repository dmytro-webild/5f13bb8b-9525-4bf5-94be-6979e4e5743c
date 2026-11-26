import React from 'react';
import SEO from '@/components/SEO';
import { StyleProvider } from '@/components/ui/StyleProvider';
import TextAnimation from '@/components/ui/TextAnimation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { Cpu, Zap, Star, CheckCircle2, ArrowRight } from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Business & Lead Automations",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Cyan's Agency",
    "url": "https://cyansagency.com.au/"
  },
  "areaServed": "Melbourne and Victoria",
  "description": "Custom business automation workflows for local Australian businesses. Streamline lead capture, CRM management, Google Review requests, and automated follow-ups."
};

export default function AutomationsPage(): React.JSX.Element {
  return (
    <StyleProvider siteBackground="none" heroBackground="none" buttonVariant="stagger">
      <SEO
        title="Business Automations | Cyan's Agency Melbourne"
        description="Custom business automation solutions for local Australian businesses. Streamline lead generation, booking calendar workflows, review requests, and client follow-ups."
        canonicalUrl="https://cyansagency.com.au/services/automations"
        jsonLd={serviceSchema}
      />

      <div className="py-12 md:py-20 w-content-width mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4 text-center max-w-4xl mx-auto">
          <div className="px-3.5 py-1 text-sm card bg-[#EE3678]/10 text-[#EE3678] border border-[#EE3678]/30 rounded font-medium">
            Smart Workflow Solutions
          </div>
          <TextAnimation
            text="Business & Lead Automation Solutions"
            variant="fade-blur"
            gradientText={true}
            tag="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F4F4F5] leading-tight"
          />
          <TextAnimation
            text="Automate repetitive admin, lead routing, review collection, and appointment booking so you can spend less time on computer tasks and more time growing your business."
            variant="fade-blur"
            gradientText={false}
            tag="p"
            className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl"
          />
          <div className="mt-4">
            <Button text="Automate Your Business" href="https://calendly.com/josiabatoni/30min" variant="primary" />
          </div>
        </div>

        <ScrollReveal variant="slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border border-white/10 flex flex-col gap-4 bg-[#1A1A1C]">
              <div className="p-3 w-fit rounded card border border-white/10 text-[#EE3678]">
                <Star className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F4F5]">Automated Review Funnels</h3>
              <p className="text-sm text-[#A1A1AA]">
                Automatically prompt happy clients to leave 5-star Google reviews after job completion, growing your brand reputation passively.
              </p>
            </Card>

            <Card className="p-6 border border-white/10 flex flex-col gap-4 bg-[#1A1A1C]">
              <div className="p-3 w-fit rounded card border border-white/10 text-[#EE3678]">
                <Zap className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F4F5]">Instant Lead Routing</h3>
              <p className="text-sm text-[#A1A1AA]">
                Route web inquiries, contact forms, and email requests immediately to your mobile via SMS or push notification so no inquiry sits unread.
              </p>
            </Card>

            <Card className="p-6 border border-white/10 flex flex-col gap-4 bg-[#1A1A1C]">
              <div className="p-3 w-fit rounded card border border-white/10 text-[#EE3678]">
                <Cpu className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F4F5]">CRM & Calendar Sync</h3>
              <p className="text-sm text-[#A1A1AA]">
                Connect your website forms seamlessly to Calendly, Google Calendar, HubSpot, or your custom CRM to eliminate double bookings.
              </p>
            </Card>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slide-up">
          <div className="p-8 md:p-12 card border border-white/10 rounded-xl bg-[#1A1A1C] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-[#F4F4F5]">Custom Automations Built For You</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Google Review SMS & Email Campaigns",
                  "Appointment Confirmation & Reminders",
                  "Instant Quote Request Alerts",
                  "CRM Contact Auto-Sync",
                  "Missed Call Lead Captures",
                  "Full Technical Setup & Testing"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#F4F4F5]">
                    <CheckCircle2 className="size-4 text-[#EE3678] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto text-center md:text-left">
              <Button text="Discuss Automation Strategy" href="https://calendly.com/josiabatoni/30min" variant="primary" />
              <a href="/#services" className="text-sm text-[#EE3678] hover:underline flex items-center justify-center md:justify-start gap-1">
                View all services <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </StyleProvider>
  );
}
