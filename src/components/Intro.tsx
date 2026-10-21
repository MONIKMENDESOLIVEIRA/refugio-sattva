import { MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { intro } from "@/data/content"

export function Intro() {
  return (
    <section id="intro" className="bg-white px-4 py-14 md:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-[var(--space-lg)] text-center">
        <Badge
          variant="outline"
          className="h-auto gap-1.5 rounded-full border-sattva-gold px-4 py-1.5 text-[13px] tracking-wide text-sattva-earth"
        >
          <MapPin data-icon="inline-start" className="text-sattva-gold" />
          {intro.badge}
        </Badge>
        <h1 className="heading-1 text-2xl text-forest md:text-[32px]">{intro.heading}</h1>
      </div>
    </section>
  )
}
