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
            question: "How long does a project take?",
            answer: "Most website projects take about 2–4 weeks depending on scope. I’ll give you a timeline on our first call.",
          },
          {
            question: "How does pricing work?",
            answer: "Project-based. I’ll quote you after a free consultation so it matches what you need.",
          },
          {
            question: "Do you offer ongoing help?",
            answer: "Yes, I can help with updates, and with ongoing review and lead follow-up after launch.",
          },
          {
            question: "Can you redesign an existing website?",
            answer: "Yes.",
          },
          {
            question: "Where are you based?",
            answer: "Melbourne, Australia. I work with local businesses.",
          },
        ]}
      />
    </div>
  );
}
