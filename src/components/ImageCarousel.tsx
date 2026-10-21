import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import type { Photo } from "@/data/content"
import { cn } from "@/lib/utils"

type ImageCarouselProps = {
  photos: Photo[]
  className?: string
  interval?: number
}

export function ImageCarousel({ photos, className, interval = 5000 }: ImageCarouselProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = photos.length

  const go = (next: number) => setIndex((next + count) % count)

  useEffect(() => {
    if (paused || count < 2) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % count), interval)
    return () => window.clearInterval(id)
  }, [paused, count, interval])

  return (
    <div
      className={cn("group relative overflow-hidden rounded-[var(--radius-md)]", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carrossel"
    >
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {photos.map((photo, i) => (
          <img
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            loading="lazy"
            aria-hidden={i !== index}
            className="h-full w-full shrink-0 object-cover"
          />
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Foto anterior"
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full p-1.5 text-white/90 transition hover:bg-black/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Próxima foto"
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-1.5 text-white/90 transition hover:bg-black/30 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <ChevronRight className="size-6" />
          </button>
          <div className="absolute inset-x-0 bottom-3 flex justify-center gap-[var(--space-sm)]">
            {photos.map((photo, i) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => go(i)}
                aria-label={`Ir para a foto ${i + 1}`}
                aria-current={i === index}
                className={cn(
                  "size-2 rounded-[var(--radius-lg)] bg-white/50 transition",
                  i === index && "bg-white"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
