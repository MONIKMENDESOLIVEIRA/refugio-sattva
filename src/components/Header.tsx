import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

import { navLinks } from "@/data/content"
import { cn } from "@/lib/utils"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // O logo do Sattva foi desenhado para fundo claro, então o header é sempre creme.
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 bg-cream/95 backdrop-blur transition-shadow duration-300",
        (scrolled || open) && "shadow-[var(--shadow-sm)]"
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 md:h-24 md:px-6">
        <a href="#topo" className="shrink-0" aria-label="Refúgio Sattva — início">
          <img
            src="/images/logo-sattva.webp"
            alt="Refúgio Sattva"
            width={2000}
            height={1589}
            className="h-14 w-auto transition-transform duration-300 hover:scale-105 md:h-[72px]"
          />
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="button-label text-[15px] text-forest transition-colors hover:text-sattva-earth"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="rounded-[var(--radius-sm)] p-2 text-forest md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Principal" className="border-t border-forest/15 md:hidden">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="button-label block px-4 py-3 text-center text-forest"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
