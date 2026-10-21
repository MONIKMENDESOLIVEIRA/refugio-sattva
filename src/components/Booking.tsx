import { ExternalLink, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { booking } from "@/data/content"

export function Booking() {
  return (
    <section
      id="reservas"
      aria-label={booking.title}
      className="relative overflow-hidden bg-black bg-cover bg-center px-4 py-20 md:py-28"
      style={{ backgroundImage: "url(/images/refugio/reservas-vista-mar-praia-da-solidao.webp)" }}
    >
      <div className="absolute inset-0 bg-forest/80" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-[var(--space-lg)] text-center">
        <h2 className="heading-2 text-[30px] text-cream md:text-[36px]">{booking.heading}</h2>
        <p className="body-text text-cream/90">{booking.text}</p>

        <ul className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
          {booking.links.map((link) => (
            <li key={link.href} className="w-full sm:w-auto">
              <Button
                asChild
                variant="default"
                className="h-auto w-full gap-2 rounded-full bg-sattva-gold px-7 py-3.5 text-[15px] font-bold tracking-wide text-forest uppercase hover:bg-cream hover:text-forest sm:w-auto"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.text}
                  <ExternalLink data-icon="inline-end" className="size-4" />
                </a>
              </Button>
            </li>
          ))}
        </ul>

        <p className="text-sm leading-[1.6] text-cream/75">{booking.note}</p>
        <a
          href={booking.contactHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-cream underline-offset-4 hover:underline"
        >
          <MessageCircle className="size-4" />
          {booking.contact}
        </a>
      </div>
    </section>
  )
}
