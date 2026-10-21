import { CabinCard } from "@/components/CabinCard"
import { cabins } from "@/data/content"

export function Cabins() {
  return (
    <section id="acomodacoes" aria-label={cabins.title} className="bg-forest px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="mx-auto mb-12 flex max-w-3xl flex-col gap-[var(--space-md)] text-center md:mb-16">
          <span aria-hidden="true" className="mx-auto h-0.5 w-16 bg-sattva-gold" />
          <h2 className="heading-2 text-[30px] text-cream md:text-[36px]">{cabins.heading}</h2>
          <p className="body-text text-cream/90">{cabins.subtitle}</p>
        </header>

        <div className="flex flex-col gap-10 md:gap-14">
          {cabins.items.map((cabin, i) => (
            <CabinCard key={cabin.id} cabin={cabin} reversed={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
