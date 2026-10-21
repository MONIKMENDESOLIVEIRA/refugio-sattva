import { Emphasis } from "@/components/Emphasis"
import { ImageCarousel } from "@/components/ImageCarousel"
import { about } from "@/data/content"

export function About() {
  return (
    <section id="about" aria-label={about.title} className="bg-cream px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">
        <div className="flex flex-col gap-[var(--space-md)]">
          <h2 className="heading-2 text-[30px] text-forest md:text-[36px] [&_em]:text-sattva-earth">
            <Emphasis text={about.heading} emphasis={about.emphasis} />
          </h2>
          {about.paragraphs.map((p) => (
            <p key={p} className="body-text text-text-dark">
              {p}
            </p>
          ))}
          <blockquote className="mt-[var(--space-sm)] rounded-[var(--radius-md)] border-l-4 border-sattva-gold bg-white p-[var(--space-lg)] shadow-[var(--shadow-sm)]">
            <h3 className="font-heading text-2xl leading-[1.3] text-forest [&_em]:text-sattva-earth">
              <Emphasis text={about.quote} emphasis={about.quoteEmphasis} />
            </h3>
          </blockquote>
        </div>

        <ImageCarousel photos={about.photos} className="aspect-[600/920] max-h-[640px] w-full md:justify-self-end" />
      </div>
    </section>
  )
}
