import React from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import Button from "@/components/ui/Button";
import { Mail, Calendar, MapPin } from "lucide-react";

export default function ContactSection(): React.JSX.Element {
  return (
    <div data-webild-section="contact" data-section="contact" id="contact" className="scroll-mt-24 md:scroll-mt-28">
      <section aria-label="Contact and Booking section" className="py-8 md:py-12">
        <div className="w-content-width mx-auto flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col items-center gap-2">
            <div className="px-3 py-1 mb-1 text-sm card bg-[#EE3678]/10 text-[#EE3678] border border-[#EE3678]/30 rounded font-medium w-fit">
              <p>{"Contact & Booking"}</p>
            </div>

            <TextAnimation
              text={"Let's chat about your website"}
              variant={"fade-blur"}
              gradientText={true}
              tag="h2"
              className="md:max-w-8/10 text-4xl sm:text-5xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance text-[#F4F4F5]"
            />

            <TextAnimation
              text={"Book a free 1-on-1 consultation to discuss your business goals and website strategy."}
              variant={"fade-blur"}
              gradientText={false}
              tag="p"
              className="md:max-w-7/10 text-base sm:text-lg md:text-xl leading-snug text-center text-balance text-[#A1A1AA]"
            />
          </div>

          <ScrollReveal variant="slide-up">
            <div className="p-8 md:p-12 card rounded flex flex-col items-center gap-8 text-center border border-white/10 hover:border-[#EE3678]/40 transition-colors max-w-3xl mx-auto w-full">
              <div className="flex flex-col items-center gap-4">
                <Button
                  text="Book a free consultation"
                  href="https://calendly.com/josiabatoni/30min"
                  variant="primary"
                />

                <div className="flex flex-col items-center gap-1.5 pt-4">
                  <span className="text-sm text-[#A1A1AA] flex items-center gap-2 font-medium">
                    <Mail className="size-4 text-[#EE3678]" /> Direct Email
                  </span>
                  <a
                    href="mailto:hello@cyansagency.com.au"
                    className="text-xl md:text-2xl font-semibold text-[#F4F4F5] hover:text-[#EE3678] transition-colors underline decoration-[#EE3678]/50 underline-offset-4"
                  >
                    hello@cyansagency.com.au
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#A1A1AA] pt-4 border-t border-white/10 w-full">
                <span className="flex items-center gap-1.5"><MapPin className="size-3.5 text-[#EE3678]" /> Melbourne, VIC, Australia</span>
                <span className="flex items-center gap-1.5"><Calendar className="size-3.5 text-[#EE3678]" /> Direct founder booking calendar</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}