import { footer } from "@/data/content"

export function Footer() {
  return (
    <footer className="bg-cream px-4 pt-14 pb-24 text-forest md:pb-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-[var(--space-lg)] text-center">
        <img
          src="/images/logo-sattva.webp"
          alt="Refúgio Sattva"
          width={2000}
          height={1589}
          loading="lazy"
          className="h-32 w-auto md:h-40"
        />
        <nav aria-label="Links de reserva">
          <ul className="flex flex-wrap justify-center gap-3">
            {footer.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-label inline-block rounded-full bg-forest px-5 py-2 text-[15px] font-bold text-cream transition-colors hover:bg-sattva-green"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="border-t border-forest/15 pt-[var(--space-lg)] text-sm leading-[1.6] text-forest/80">
          {footer.text}
        </p>
      </div>
    </footer>
  )
}
