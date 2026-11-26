import React from 'react';
import SEO from '@/components/SEO';
import { StyleProvider } from '@/components/ui/StyleProvider';
import TextAnimation from '@/components/ui/TextAnimation';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { MapPin, Star, CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react';

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Google Business Profile Setup & Optimization",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Cyan's Agency",
    "url": "https://cyansagency.com.au/"
  },
  "areaServed": "Melbourne and Victoria",
  "description": "Complete Google Business Profile setup, verification, and optimization for Melbourne tradies and local businesses to rank in local map packs."
};

export default function GoogleBusinessProfilePage(): React.JSX.Element {
  return (
    <StyleProvider siteBackground="none" heroBackground="none" buttonVariant="stagger">
      <SEO
        title="Google Business Profile Setup | Cyan's Agency Melbourne"
        description="Complete Google Business Profile setup, verification, and optimization for Melbourne tradies and local businesses to rank in local map packs and capture local leads."
        canonicalUrl="https://cyansagency.com.au/services/google-business-profile"
        jsonLd={serviceSchema}
      />

      <div className="py-12 md:py-20 w-content-width mx-auto flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4 text-center max-w-4xl mx-auto">
          <div className="px-3.5 py-1 text-sm card bg-[#EE3678]/10 text-[#EE3678] border border-[#EE3678]/30 rounded font-medium">
            Local Search & Map Rankings
          </div>
          <TextAnimation
            text="Google Business Profile Setup & Optimization"
            variant="fade-blur"
            gradientText={true}
            tag="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight"
          />
          <TextAnimation
            text="Get found when local customers search for your services in Melbourne. We claim, verify, configure, and optimize your Google Business Profile for top map rankings."
            variant="fade-blur"
            gradientText={false}
            tag="p"
            className="text-lg md:text-xl text-zinc-600 max-w-2xl"
          />
          <div className="mt-4">
            <Button text="Claim Your Google Profile" href="https://calendly.com/josiabatoni/30min" variant="primary" />
          </div>
        </div>

        <ScrollReveal variant="slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 border border-black/10 flex flex-col gap-4 bg-white">
              <div className="p-3 w-fit rounded card border border-black/10 text-[#EE3678]">
                <MapPin className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-black">Local Map Pack Placement</h3>
              <p className="text-sm text-zinc-600">
                Rank in Google's coveted 3-Map Pack where over 60% of local service calls originate when customers search near them.
              </p>
            </Card>

            <Card className="p-6 border border-black/10 flex flex-col gap-4 bg-white">
              <div className="p-3 w-fit rounded card border border-black/10 text-[#EE3678]">
                <Star className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-black">Review Generation Setup</h3>
              <p className="text-sm text-zinc-600">
                Establish automated review collection requests to build 5-star social proof that wins new clients over your competitors.
              </p>
            </Card>

            <Card className="p-6 border border-black/10 flex flex-col gap-4 bg-white">
              <div className="p-3 w-fit rounded card border border-black/10 text-[#EE3678]">
                <TrendingUp className="size-6" />
              </div>
              <h3 className="text-xl font-bold text-black">Category & Keyword Audit</h3>
              <p className="text-sm text-zinc-600">
                Target high-intent primary and secondary business categories, service areas, and search terms specific to your Melbourne suburb.
              </p>
            </Card>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="slide-up">
          <div className="p-8 md:p-12 card border border-black/10 rounded-xl bg-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-black">How We Boost Your Local Visibility</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  "Profile Verification Assistance",
                  "High-Converting Photos & Cover Art",
                  "Service Area & Suburb Configuration",
                  "Q&A & Booking Link Setup",
                  "NAP Consistency Sync Across Web",
                  "Monthly Performance Insights"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-black">
                    <CheckCircle2 className="size-4 text-[#EE3678] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 shrink-0 w-full md:w-auto text-center md:text-left">
              <Button text="Book GBP Setup Call" href="https://calendly.com/josiabatoni/30min" variant="primary" />
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
