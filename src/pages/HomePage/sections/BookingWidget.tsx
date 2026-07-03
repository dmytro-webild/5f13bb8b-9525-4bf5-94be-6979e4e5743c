import ScrollReveal from '@/components/ui/ScrollReveal';
import { useEffect } from 'react';

export default function BookingWidgetSection() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div data-webild-section="booking-widget" data-section="booking-widget" id="booking-widget">
      <section aria-label="Booking Widget" className="py-20">
        <div className="w-content-width mx-auto">
          <ScrollReveal variant="slide-up" className="flex items-center justify-center py-20 card rounded">
            <div className="w-full px-5" style={{ minHeight: "700px" }}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/r9TebD9ETWLcafdipYxW"
                style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "700px" }}
                scrolling="no"
                id="r9TebD9ETWLcafdipYxW_1783044176238"
              ></iframe>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}