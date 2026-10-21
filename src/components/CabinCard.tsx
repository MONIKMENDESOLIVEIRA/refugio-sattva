import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { ImageCarousel } from "@/components/ImageCarousel"
import type { Cabin } from "@/data/content"
import { cn } from "@/lib/utils"

const linkStyles = {
  outline: "bg-forest text-cream border-[1.6px] border-forest hover:border-sattva-green hover:bg-sattva-green hover:text-cream",
  ghost: "bg-transparent text-forest border-[1.6px] border-forest hover:bg-forest hover:text-cream",
} as const

export function CabinCard({ cabin, reversed }: { cabin: Cabin; reversed: boolean }) {
  return (
    <Card
      id={cabin.id}
      className="gap-0 rounded-[var(--radius-md)] bg-cream p-[var(--space-md)] ring-0 md:p-[var(--space-lg)]"
    >
      <CardContent className="grid items-center gap-8 p-0 md:grid-cols-2 md:gap-12">
        <ImageCarousel
          photos={cabin.photos}
          className={cn("aspect-square w-full", reversed ? "md:order-1" : "md:order-2")}
        />

        <div
          className={cn(
            "flex flex-col gap-[var(--space-md)] md:px-4",
            reversed ? "md:order-2" : "md:order-1"
          )}
        >
          <CardTitle className="heading-2 text-[30px] font-semibold text-forest md:text-[36px]">
            {cabin.title}
          </CardTitle>
          <CardDescription className="body-text text-base text-text-dark">
            {cabin.description}
          </CardDescription>

          {cabin.links.length > 0 && (
            <div id={`links-${cabin.id}-section`} className="mt-[var(--space-sm)] flex flex-col items-start gap-3">
              {cabin.links.map((link) => (
                <Button
                  key={link.href}
                  asChild
                  variant={link.variant}
                  className={cn(
                    "h-auto max-w-full rounded-full px-6 py-3 text-[13px] font-bold tracking-wide whitespace-normal uppercase md:text-sm",
                    linkStyles[link.variant]
                  )}
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    {link.text}
                  </a>
                </Button>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
