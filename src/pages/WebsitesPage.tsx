import React from 'react';
import SEO from '@/components/SEO';
import { StyleProvider } from '@/components/ui/StyleProvider';
import TextAnimation from '@/components/ui/TextAnimation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { CheckCircle2, Zap, Smartphone, Search, ArrowRight } from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Website Design & Development",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Cyan's Agency",
    "url": "https://cyansagency.com.au/"
  },
  "areaServed": "Melbourne and Victoria",
  "description": "Bespoke, high-converting website design and development for tradies and local businesses in Melbourne. Fast load times, mobile optimization, and built-in SEO."
};

export default function WebsitesPage(): React.JSX.Element {
  return (
    <StyleProvider siteBackground="none" heroBackground="none" buttonVariant="stagger">
      <SEO
        title="Website Design & Development | Cyan's Agency Melbourne"
        description="Bespoke, high-converting website design and development for tradies and local businesses in Melbourne. Fast load times, mobile optimization, and built-in SEO."
        canonicalUrl="https://cyansagency.com.au/services/websites"
        jsonLd={serviceSchema}
      />

      <div className="py-12 md:py-20 w-content-width mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4 text-center max-w-4xl mx-auto">
          <div className="px-3.5 py-1 text-sm card bg-[#EE3678]/10 text-[#EE3678] border border-[#EE3678]/30 rounded font-medium">
            Service Details
          </div>
          <TextAnimation
            text="High-Converting Website Design & Development"
            variant="fade-blur"
            gradientText={true}
            tag="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F4F4F5] leading-tight"
          />
          <TextAnimation
            text="We build ultra-fast, mobile-first websites designed specifically for Melbourne tradies and local service businesses to generate phone calls and online leads."
            variant="fade-blur"
            gradientText={false}
            tag="p"
            className="text-lg md:text-xl text-[#A1A1AA] max-w-2xl"
          />
          <div className="mt-4">
            <Button text="Book a Strategy Call" href="https://calendly.com/josiabatoni/30min" variant="primary" />
          </div>
        </div>

        <ScrollReveal variant="slide-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border border-white/10 flex flex-col gap-4 bg-[#1A1A1C]">
              <div className="p-3 w-fit rounded card border border-white/10 text-[#EE3678]">
                <Smartphone className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F4F5]">Mobile-First & Fast</h3>
              <p className="text-sm text-[#A1A1AA]">
                Over 70% of local service leads come from smartphones. Every site we build loads instantaneously and looks incredible on mobile screens.
              </p>
            </Card>

            <Card className="p-6 border border-white/10 flex flex-col gap-4 bg-[#1A1A1C]">
              <div className="p-3 w-fit rounded card border border-white/10 text-[#EE3678]">
                <Search className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F4F5]">Built-In On-Page SEO</h3>
              <p className="text-sm text-[#A1A1AA]">
                Optimised meta tags, clean semantic markup, and local schema data built directly into your website so Google understands your business.
              </p>
            </Card>

            <Card className="p-6 border border-white/10 flex flex-col gap-4 bg-[#1A1A1C]">
              <div className="p-3 w-fit rounded card border border-white/10 text-[#EE3678]">
                <Zap className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F4F5]">Lead Generation Focus</h3>
              <p className="text-sm text-[#A1A1AA]">
                Clear call-to-actions, tap-to-call buttons, and streamlined quote forms placed strategically to convert casual visitors into paying customers.
              </p>
            </Card>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slide-up">
          <div className="p-8 md:p-12 card border border-white/10 rounded-xl bg-[#1A1A1C] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-[#F4F4F5]">What's Included in Every Website Build</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Custom Responsive UX/UI Design",
                  "Australian Cloud Hosting Setup",
                  "Free SSL Certificate",
                  "Google Analytics & Search Console",
                  "On-Page SEO & Meta Tags",
                  "Ongoing Support & Backups"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#F4F4F5]">
                    <CheckCircle2 className="size-4 text-[#EE3678] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto text-center md:text-left">
              <Button text="Get Started Today" href="https://calendly.com/josiabatoni/30min" variant="primary" />
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
