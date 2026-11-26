import React from 'react';
import SEO from '@/components/SEO';
import { StyleProvider } from '@/components/ui/StyleProvider';
import TextAnimation from '@/components/ui/TextAnimation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { PhoneMissed, MessageSquare, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Missed-Call Text-Back Automation",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Cyan's Agency",
    "url": "https://cyansagency.com.au/"
  },
  "areaServed": "Melbourne and Victoria",
  "description": "Instant missed-call text-back service automatically sends SMS responses to customers who call when you can't answer, saving leads for Melbourne businesses."
};

export default function MissedCallTextBackPage(): React.JSX.Element {
  return (
    <StyleProvider siteBackground="none" heroBackground="none" buttonVariant="stagger">
      <SEO
        title="Missed-Call Text-Back Automation | Cyan's Agency Melbourne"
        description="Never lose another lead. Instant missed-call text-back automatically texts customers who call when you can't answer, saving your business time and money."
        canonicalUrl="https://cyansagency.com.au/services/missed-call-text-back"
        jsonLd={serviceSchema}
      />

      <div className="py-12 md:py-20 w-content-width mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4 text-center max-w-4xl mx-auto">
          <div className="px-3.5 py-1 text-sm card bg-[#EE3678]/10 text-[#EE3678] border border-[#EE3678]/30 rounded font-medium">
            Automated Lead Capture
          </div>
          <TextAnimation
            text="Missed-Call Text-Back Automation"
            variant="fade-blur"
            gradientText={true}
            tag="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F4F4F5] leading-tight"
          />
          <TextAnimation
            text="When you're on a job site, driving, or serving a customer, missed calls mean missed revenue. Our automated system texts caller leads within seconds."
            variant="fade-blur"
            gradientText={false}
            tag="p"
            className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl"
          />
          <div className="mt-4">
            <Button text="Stop Losing Missed Leads" href="https://calendly.com/josiabatoni/30min" variant="primary" />
          </div>
        </div>

        <ScrollReveal variant="slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border border-white/10 flex flex-col gap-4 bg-[#1A1A1C]">
              <div className="p-3 w-fit rounded card border border-white/10 text-[#EE3678]">
                <Clock className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F4F5]">Sub-5 Second Response</h3>
              <p className="text-sm text-[#A1A1AA]">
                85% of callers whose call goes unanswered hire the next business they reach. Instant SMS keeps them engaged with you.
              </p>
            </Card>

            <Card className="p-6 border border-white/10 flex flex-col gap-4 bg-[#1A1A1C]">
              <div className="p-3 w-fit rounded card border border-white/10 text-[#EE3678]">
                <MessageSquare className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F4F5]">Customised Text Sequences</h3>
              <p className="text-sm text-[#A1A1AA]">
                Set up tailored automatic replies ("Hi! Sorry I missed your call. How can I help you today?") with instant booking links.
              </p>
            </Card>

            <Card className="p-6 border border-white/10 flex flex-col gap-4 bg-[#1A1A1C]">
              <div className="p-3 w-fit rounded card border border-white/10 text-[#EE3678]">
                <PhoneMissed className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F4F5]">Seamless Phone Integration</h3>
              <p className="text-sm text-[#A1A1AA]">
                Works directly with your existing mobile phone number or virtual landline without needing complex new hardware.
              </p>
            </Card>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slide-up">
          <div className="p-8 md:p-12 card border border-white/10 rounded-xl bg-[#1A1A1C] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-[#F4F4F5]">Why Melbourne Tradies Love This Feature</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Never lose a quote inquiry again",
                  "Automated Calendly / Booking links",
                  "24/7 After-Hours Lead Capture",
                  "Custom SMS Branding & Tone",
                  "Live Lead Notifications to Your Mobile",
                  "Zero technical maintenance required"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#F4F4F5]">
                    <CheckCircle2 className="size-4 text-[#EE3678] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto text-center md:text-left">
              <Button text="Setup Text-Back System" href="https://calendly.com/josiabatoni/30min" variant="primary" />
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
