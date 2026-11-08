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
            question: "Who will I be working with?",
            answer: "You work directly with founder Josia Batoni from Melbourne. There are no sales reps or offshore handoffs — just clear, direct collaboration.",
          },
          {
            question: "How long does a typical website project take?",
            answer: "Most custom websites and review setup systems are completed within 1 to 2 weeks.",
          },
          {
            question: "How does the Google review setup work?",
            answer: "We build a simple, automated review collection flow (via SMS or email) so happy customers are prompted to leave genuine 5-star Google reviews right after a service.",
          },
          {
            question: "What is missed-call text-back?",
            answer: "If a potential customer calls while you're busy or on a job, an automated text message instantly greets them and gives them a simple way to leave their details or book an appointment.",
          },
          {
            question: "How do we get started?",
            answer: "Simply book a free consultation call. We'll review your current website, Google presence, and lead goals, then outline the exact next steps.",
          },
        ]}
      />
    </div>
  );
}
