import React, { useEffect } from 'react';
import FaqSimple from "@/components/sections/faq/FaqSimple";

const faqItems = [
  {
    question: "How much does a website cost?",
    answer: "Pricing for custom website builds depends on your project's scope, requirements, and functionality. All projects are transparently quoted upfront after a discovery call with no hidden fees or surprise costs.",
  },
  {
    question: "How long does it take?",
    answer: "Most website projects take between 2 to 4 weeks depending on complexity, initial requirements, and feedback turnaround. We provide a clear timeline before starting every project.",
  },
  {
    question: "What is missed-call text-back?",
    answer: "Missed-call text-back automatically sends an instant, personalized text message to any customer who calls your business phone when you can't answer, saving the lead and letting them know you will get back to them shortly.",
  },
  {
    question: "Do you work with businesses outside Melbourne?",
    answer: "Yes! While we specialize in serving tradies and local businesses across Melbourne and Victoria, we work with clients right across Australia.",
  },
];

export default function FaqSection(): React.JSX.Element {
  useEffect(() => {
    const scriptId = 'faq-json-ld';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    };
    scriptEl.textContent = JSON.stringify(faqSchema);
  }, []);

  return (
    <div id="faq" data-section="faq" className="scroll-mt-24 md:scroll-mt-28">
      <FaqSimple
        textAnimation="fade-blur"
        tag="FAQ"
        title="Frequently Asked Questions"
        description="Everything you need to know about working with Cyan's Agency."
        items={faqItems}
      />
    </div>
  );
}