import { useSyncExternalStore } from "react"

import { Button } from "@/components/ui/button"
import { Emphasis } from "@/components/Emphasis"
import { hero } from "@/data/content"

const DESKTOP_QUERY = "(min-width: 768px)"

// Vídeo horizontal no computador e vertical no celular, cada um no seu recorte.
function useIsDesktop() {
  return useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(DESKTOP_QUERY)
      mql.addEventListener("change", onChange)
      return () => mql.removeEventListener("change", onChange)
    },
    () => window.matchMedia(DESKTOP_QUERY).matches
  )
}

export function Hero() {
  const variant = useIsDesktop() ? "desktop" : "mobile"

  return (
    <section id="topo" className="relative flex min-h-[640px] items-center overflow-hidden md:min-h-[920px]">
      <video
        key={variant}
        className="absolute inset-0 h-full w-full object-cover"
        poster={`/images/refugio/topo-poster-${variant}.webp`}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src={`/videos/refugio-sattva-topo-${variant}.webm`} type="video/webm" />
        <source src={`/videos/refugio-sattva-topo-${variant}.mp4`} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 to-forest/70" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-[var(--space-lg)] px-4 pt-24 text-center text-cream">
        <h2 className="heading-2 text-[32px] md:text-[40px] [&_em]:text-sattva-gold">
          <Emphasis text={hero.title} emphasis={hero.emphasis} />
        </h2>
        <p className="max-w-2xl text-lg leading-[1.4] md:text-[22px]">{hero.subtitle}</p>
        <Button
          asChild
          variant="outline"
          className="mt-[var(--space-sm)] h-auto rounded-full border-[1.6px] border-cream bg-transparent px-8 py-3.5 text-[15px] font-bold tracking-wide text-cream uppercase hover:border-sattva-gold hover:bg-sattva-gold hover:text-forest"
        >
          <a href={hero.ctaHref}>
            {hero.cta}
          </a>
        </Button>
      </div>
    </section>
  )
}
