import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";
import ImageOrVideo from "@/components/ui/ImageOrVideo";
import ScrollReveal from "@/components/ui/ScrollReveal";

type TeamMember = {
  name: string;
  role: string;
  imageSrc?: string;
  videoSrc?: string;
};

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
  <section aria-label="Team section" className="py-8 md:py-12">
    <div className="flex flex-col gap-8 md:gap-10 w-content-width mx-auto">
      <div className="flex flex-col items-center gap-2">
        <div className="px-3 py-1 mb-1 text-sm card rounded w-fit">
          <p>{tag}</p>
        </div>

        <TextAnimation
          text={title}
          variant={textAnimation}
          gradientText={true}
          tag="h2"
          className="md:max-w-8/10 text-6xl 2xl:text-7xl leading-[1.15] font-semibold text-center text-balance"
        />

        <TextAnimation
          text={description}
          variant={textAnimation}
          gradientText={false}
          tag="p"
          className="md:max-w-7/10 text-lg md:text-xl leading-snug text-center text-balance"
        />

        {(primaryButton || secondaryButton) && (
          <div className="flex flex-wrap justify-center gap-3 mt-2 md:mt-3">
            {primaryButton && <Button text={primaryButton.text} href={primaryButton.href} variant="primary"/>}
            {secondaryButton && <Button text={secondaryButton.text} href={secondaryButton.href} variant="secondary"animationDelay={0.1} />}
          </div>
        )}
      </div>

      <ScrollReveal variant="slide-up" className="flex flex-wrap justify-center gap-y-4 xl:gap-y-5 2xl:gap-y-6">
        {members.map((member) => (
          <div key={member.name} className="flex flex-col items-center text-center">
            {(member.imageSrc || member.videoSrc) ? (
              <>
                <div className="p-2 xl:p-3 2xl:p-4 mb-4 xl:mb-5 2xl:mb-6 w-full aspect-square card rounded-full overflow-hidden">
                  <ImageOrVideo imageSrc={member.imageSrc} videoSrc={member.videoSrc} className="rounded-full!" />
                </div>
                <span className="w-4/5 text-2xl font-semibold leading-snug truncate">{member.name}</span>
                <span className="w-4/5 text-base leading-snug opacity-75 truncate">{member.role}</span>
              </>
            ) : (
              <div className="px-4 py-2 card rounded-full border border-black/10 flex flex-wrap items-center justify-center gap-2 text-sm md:text-base font-medium">
                <span>{member.name}</span>
                {member.role && (
                  <>
                    <span className="opacity-40">•</span>
                    <span className="opacity-75">{member.role}</span>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </ScrollReveal>
    </div>
  </section>
);

export default TeamStackedCards;
