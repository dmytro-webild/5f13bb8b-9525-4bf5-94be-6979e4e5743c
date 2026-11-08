import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";

type TeamMember = {
  name: string;
  role: string;
} & ({ imageSrc: string; videoSrc?: never } | { videoSrc: string; imageSrc?: never });

const TeamStackedCards = ({
  tag,
  title,
  description,
  primaryButton,
  secondaryButton,
  members,
  textAnimation,
}: {
  tag: string;
  title: string;
  description: string;
  primaryButton?: { text: string; href: string };
  secondaryButton?: { text: string; href: string };
  members: TeamMember[];
  textAnimation: "slide-up" | "fade-blur" | "fade";
}) => (
  <section aria-label="Team section" className="py-12 md:py-20">
    <div className="flex flex-col gap-6 md:gap-10 w-content-width mx-auto">
      <div className="flex flex-col items-center gap-2">
        <div className="px-3 py-1 mb-1 text-xs md:text-sm card rounded-full w-fit">
          <p>{tag}</p>
        </div>

        <TextAnimation
          text={title}
          variant={textAnimation}
          gradientText={true}
          tag="h2"
          className="md:max-w-8/10 text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
        />

        <TextAnimation
          text={description}
          variant={textAnimation}
          gradientText={false}
          tag="p"
          className="md:max-w-7/10 text-base md:text-xl leading-snug text-center text-balance opacity-90"
        />

        {(primaryButton || secondaryButton) && (
          <div className="flex flex-col sm:flex-row w-full sm:w-auto justify-center gap-3 mt-2 md:mt-3">
            {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary" className="w-full sm:w-auto text-center"/>}
            {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary" animationDelay={0.1} className="w-full sm:w-auto text-center"/>}
          </div>
        )}
      </div>

      <ScrollReveal variant="slide-up" className="flex flex-wrap justify-center gap-6">
        {members.map((member) => (
          <div key={member.name} className="flex flex-col items-center w-full max-w-xs md:w-[28%] text-center">
            <div className="p-2.5 xl:p-3 2xl:p-4 mb-3 xl:mb-5 2xl:mb-6 w-48 sm:w-64 md:w-full aspect-square card rounded-full overflow-hidden shadow-lg">
              <ImageOrVideo imageSrc={member.imageSrc} videoSrc={member.videoSrc} className="rounded-full!" />
            </div>
            <span className="w-full text-xl md:text-2xl font-semibold leading-snug truncate">{member.name}</span>
            <span className="w-full text-sm md:text-base leading-snug opacity-75 truncate">{member.role}</span>
          </div>
        ))}
      </ScrollReveal>
    </div>
  </section>
);

export default TeamStackedCards;
