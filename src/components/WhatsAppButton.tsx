import { MessageCircle } from "lucide-react"

import { WHATSAPP_CONTACT_URL } from "@/data/content"

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_CONTACT_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Tirar dúvidas pelo WhatsApp"
      className="fixed right-5 bottom-5 z-30 grid size-14 place-items-center rounded-[var(--radius-lg)] bg-[#25D366] text-white shadow-[var(--shadow-sm)] transition-transform hover:scale-105"
    >
      <MessageCircle className="size-7" />
    </a>
  )
}
