import { useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import TextAnimation from "@/components/ui/TextAnimation";
import { Calendar, MapPin, Sparkles } from "lucide-react";

const ContactSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div data-webild-section="contact" data-section="contact" id="contact">
      <section aria-label="Contact and Booking section" className="py-20">
        <div className="w-content-width mx-auto flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col items-center gap-2">
            <div className="px-3 py-1 mb-1 text-sm card rounded w-fit text-orange-400 border-orange-500/20">
              <p>{"Book a Consultation"}</p>
            </div>

            <TextAnimation
              text={"Ready for More Leads & 5-Star Reviews?"}
              variant={"fade-blur"}
              gradientText={true}
              tag="h2"
              className="md:max-w-8/10 text-5xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
            />

            <TextAnimation
              text={"Book a free consultation with founder Josia Batoni to discuss your website and review setup."}
              variant={"fade-blur"}
              gradientText={false}
              tag="p"
              className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance text-foreground/80"
            />

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-foreground/70 pt-2">
              <span className="flex items-center gap-1.5"><MapPin className="size-3.5 text-orange-400" /> Melbourne, VIC</span>
              <span className="flex items-center gap-1.5"><Calendar className="size-3.5 text-orange-400" /> Free 30-min strategy session</span>
              <span className="flex items-center gap-1.5"><Sparkles className="size-3.5 text-orange-400" /> No high-pressure sales</span>
            </div>
          </div>

          <ScrollReveal variant="slide-up" className="p-4 md:p-8 card rounded border border-white/10 overflow-hidden">
            <div className="w-full min-h-[650px] flex items-center justify-center">
              <iframe
                src="https://api.leadconnectorhq.com/widget/booking/r9TebD9ETWLcafdipYxW"
                style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "650px" }}
                scrolling="no"
                id="r9TebD9ETWLcafdipYxW_1783044176238"
                title="Book Consultation with Josia Batoni"
              ></iframe>
            </div>
            <div className="text-center pt-4 border-t border-white/5">
              <p className="text-sm text-foreground/60">
                Having trouble with the widget? <a href="https://calendly.com/josiabatoni/30min" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">Click here to open booking calendar directly</a>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
