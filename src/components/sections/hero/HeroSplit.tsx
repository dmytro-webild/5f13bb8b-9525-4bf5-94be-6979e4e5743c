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
    <section aria-label="Hero section" className="relative flex items-center h-fit md:h-svh pt-26 pb-12 md:py-0">
      <HeroBackgroundSlot />
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-20 w-content-width mx-auto">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col items-center md:items-start gap-3.5 sm:gap-4">
            <div className="px-3.5 py-1 mb-0.5 text-xs md:text-sm card rounded-full w-fit border border-white/10 shadow-sm">
              <p className="font-medium tracking-wide">{tag}</p>
            </div>

            <TextAnimation
              text={title}
              variant={textAnimation}
              gradientText={true}
              tag="h1"
              className="text-3xl sm:text-5xl md:text-7xl 2xl:text-8xl leading-[1.15] font-bold text-center md:text-left text-balance tracking-tight"
            />

            <TextAnimation
              text={description}
              variant={textAnimation}
              gradientText={false}
              tag="p"
              className="md:max-w-8/10 text-sm sm:text-base md:text-xl leading-relaxed text-center md:text-left text-balance opacity-85"
            />

            <div className="flex flex-col sm:flex-row w-full sm:w-auto items-stretch sm:items-center justify-center md:justify-start gap-3 mt-2 sm:mt-4">
              <Button text={primaryButton.text} href={primaryButton.href} variant="primary" className="w-full sm:w-auto text-center justify-center !py-3.5 !px-6 font-semibold rounded-xl" />
              <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} className="w-full sm:w-auto text-center justify-center !py-3.5 !px-6 font-medium rounded-xl" />
            </div>
          </div>
        </div>

        <ScrollReveal
          variant="slide-up"
          delay={0.2}
          className={cls(
            "w-full md:w-1/2 h-60 sm:h-80 md:h-[65vh] md:max-h-[75svh] flex items-center justify-center",
            containerClassName ?? "p-4 xl:p-6 card rounded-2xl md:rounded overflow-hidden"
          )}
        >
          <ImageOrVideo imageSrc={imageSrc} videoSrc={videoSrc} className={imageClassName} />
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSplit;
