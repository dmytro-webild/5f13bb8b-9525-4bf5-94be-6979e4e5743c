import React from 'react';
import FaqSimple from "@/components/sections/faq/FaqSimple";

export default function FaqSection(): React.JSX.Element {
  return (
    <div id="faq" data-section="faq">
      <FaqSimple
        textAnimation="fade-blur"
        tag="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about working with Cyans Agency."
        items={[
          {
            question: "How long does a website project take?",
            answer: "Timelines depend on the project scope. I’ll learn about your specific goals and provide a clear timeline during our initial discovery call.",
          },
          {
            question: "What is included in a website build?",
            answer: "Every website build includes custom responsive design, conversion-focused layout & UX, mobile-first development, fast load speeds, built-in on-page SEO, Google Analytics setup, fast Australian hosting, and post-launch support.",
          },
          {
            question: "How does hosting and maintenance work?",
            answer: "I provide managed Australian hosting featuring low latency, 99.9% uptime, free SSL, daily backups, CMS updates, security monitoring, and post-launch support.",
          },
          {
            question: "Do you offer SEO and growth add-ons?",
            answer: "Yes. All websites come with built-in on-page SEO structure and meta tags from day one. I also offer growth add-ons like business automation (lead capture to CRM workflows) and engagement tools (missed-call text-back and chatbots).",
          },
          {
            question: "How does pricing work?",
            answer: "All projects are transparently quoted upfront after a discovery call. Clients always know where things are at with no surprise bills.",
          },
          {
            question: "Where are you based?",
            answer: "I am based in Melbourne, Australia, working directly 1-on-1 with local Australian businesses.",
          },
        ]}
      />
    </div>
  );
}
