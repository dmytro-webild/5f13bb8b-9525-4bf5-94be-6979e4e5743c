import Button from "@/components/ui/Button";
import HeroBackgroundSlot from "@/components/ui/HeroBackgroundSlot";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { cls } from "@/lib/utils";

type HeroSplitProps = {
  tag: string;
  title: string;
  description: string;
  primaryButton: { text: string; href: string };
  secondaryButton: { text: string; href: string };
  textAnimation: "slide-up" | "fade-blur" | "fade";
  imageClassName?: string;
  containerClassName?: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const HeroSplit = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  imageSrc,
  videoSrc,
  textAnimation,
  imageClassName,
  containerClassName,
}: HeroSplitProps) => {
  return (
    <section aria-label="Hero section" className="relative flex items-center min-h-fit pt-24 pb-8 md:pt-28 md:pb-12">
      <HeroBackgroundSlot />
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-content-width mx-auto">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center md:items-start gap-3.5">
            <div className="px-3 py-1 mb-1 text-xs sm:text-sm card rounded w-fit">
              <p>{tag}</p>
            </div>

            <TextAnimation
              text={title}
              variant={textAnimation}
              gradientText={true}
              tag="h1"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl leading-tight font-semibold text-center md:text-left text-balance max-w-2xl"
            />

            <TextAnimation
              text={description}
              variant={textAnimation}
              gradientText={false}
              tag="p"
              className="md:max-w-8/10 text-base sm:text-lg md:text-xl leading-snug text-center md:text-left text-balance text-foreground/80"
            />

            <div className="flex flex-wrap max-md:justify-center gap-3 mt-2 md:mt-3">
              <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>
              <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} />
            </div>
          </div>
        </div>

        <ScrollReveal
          variant="slide-up"
          delay={0.2}
          className={cls(
            "hidden md:flex w-full md:w-1/2 items-center justify-center shrink-0 mt-2 md:mt-0",
            containerClassName ?? "p-4 xl:p-6 card rounded overflow-hidden"
          )}
        >
          <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className={imageClassName} />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSplit;
