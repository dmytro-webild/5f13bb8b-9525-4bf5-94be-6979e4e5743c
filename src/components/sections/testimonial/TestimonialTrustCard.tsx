import { Star } from "lucide-react";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cls } from "@/lib/utils";

type Avatar = {
  name: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const TestimonialTrustCard = ({
  quote,
  rating,
  author,
  avatars,
  textAnimation,
}: {
  quote: string;
  rating: number;
  author: string;
  avatars: Avatar[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => {
  const visibleAvatars = avatars.slice(0, 6);
  const remainingCount = avatars.length - visibleAvatars.length;

  return (
    <section aria-label="Testimonials section" className="py-12 md:py-20">
      <div className="flex flex-col items-center gap-4 md:gap-5 w-content-width mx-auto">
        <ScrollReveal variant="slide-up" className="flex gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={cls("size-5 md:size-6 text-accent", index < rating ? "fill-accent" : "fill-transparent")}
              strokeWidth={1.5}
            />
          ))}
        </ScrollReveal>

        <TextAnimation
          text={quote}
          variant={textAnimation}
          gradientText={false}
          tag="p"
          className="md:max-w-8/10 text-2xl sm:text-4xl md:text-5xl 2xl:text-6xl leading-[1.25] font-semibold text-center text-balance"
        />

        <ScrollReveal variant="slide-up" delay={0.1} className="md:max-w-7/10 text-sm md:text-xl leading-snug text-center text-balance opacity-85">
          <p>{author}</p>
        </ScrollReveal>

        <ScrollReveal variant="slide-up" delay={0.2} className="flex items-center justify-center mt-1">
          {visibleAvatars.map((avatar, index) => (
            <div
              key={avatar.name}
              className={cls("relative size-10 sm:size-12 md:size-16 overflow-hidden rounded-full border-2 border-background", index > 0 && "-ml-3 sm:-ml-5")}
              style={{ zIndex: visibleAvatars.length - index }}
            >
              <ImageOrVideo imageSrc={avatar.imageSrc} videoSrc={avatar.videoSrc} />
            </div>
          ))}
          {remainingCount > 0 && (
            <div
              className="flex items-center justify-center size-10 sm:size-12 md:size-16 -ml-3 sm:-ml-5 rounded-full border-2 border-background card"
              style={{ zIndex: 0 }}
            >
              <span className="text-xs md:text-base font-semibold">+{remainingCount}</span>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TestimonialTrustCard;
