import { useState } from "react"
import { Cookie } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Switch } from "@/components/ui/switch"

const STORAGE_KEY = "rvm-cookie-consent"

const categories = [
  {
    id: "necessary",
    title: "Necessário",
    alwaysActive: true,
    description:
      "Os cookies necessários são essenciais para ativar as funcionalidades básicas deste site, como o login seguro ou o ajuste das suas preferências de consentimento. Esses cookies não armazenam quaisquer dados pessoais que permitam a sua identificação.",
  },
  {
    id: "functional",
    title: "Funcionalidade",
    description:
      "Os cookies funcionais ajudam a executar determinadas funcionalidades, como compartilhar o conteúdo do site em plataformas de mídia social, coletar feedback e outros recursos de terceiros.",
  },
  {
    id: "analytics",
    title: "Análise",
    description:
      "Os cookies analíticos são usados para entender como os visitantes interagem com o site. Esses cookies ajudam a fornecer informações sobre métricas como o número de visitantes, a taxa de rejeição, a origem do tráfego, etc.",
  },
  {
    id: "performance",
    title: "Desempenho",
    description:
      "Os cookies de desempenho são usados para entender e analisar os principais indicadores de desempenho do site, o que ajuda a proporcionar uma melhor experiência ao usuário.",
  },
  {
    id: "advertisement",
    title: "Anúncios",
    description:
      "Os cookies de publicidade são usados para fornecer aos visitantes anúncios personalizados com base nas páginas que visitaram anteriormente e para analisar a eficácia das campanhas publicitárias.",
  },
]

type Preferences = Record<string, boolean>

function readStored(): Preferences | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Preferences) : null
  } catch {
    return null
  }
}

function store(prefs: Preferences) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs))
  } catch {
    // Sem storage disponível: a escolha vale só para esta visita.
  }
}

const allWith = (value: boolean): Preferences =>
  Object.fromEntries(categories.map((c) => [c.id, c.alwaysActive ? true : value]))

const outlineBlue =
  "h-auto rounded-[var(--radius-sm)] border-2 border-forest bg-transparent px-4 py-2 text-sm font-medium text-forest hover:bg-forest/10 hover:text-forest"
const solidBlue =
  "h-auto rounded-[var(--radius-sm)] border-2 border-forest bg-forest px-4 py-2 text-sm font-medium text-cream hover:border-sattva-green hover:bg-sattva-green"

export function CookieConsent() {
  const [decided, setDecided] = useState(() => readStored() !== null)
  const [modalOpen, setModalOpen] = useState(false)
  const [prefs, setPrefs] = useState<Preferences>(() => readStored() ?? allWith(false))

  const save = (next: Preferences) => {
    store(next)
    setPrefs(next)
    setDecided(true)
    setModalOpen(false)
  }

  return (
    <>
      {!decided && (
        <div
          role="region"
          aria-label="Nós valorizamos sua privacidade"
          className="fixed inset-x-4 bottom-4 z-50 rounded-[var(--radius-sm)] border border-sattva-gold/40 bg-cream p-[var(--space-lg)] text-text-dark shadow-[0_-1px_10px_rgba(62,66,22,0.18)] sm:right-auto sm:max-w-[440px]"
        >
          <p className="mb-3 text-lg font-bold" role="heading" aria-level={2}>
            Política de Privacidade
          </p>
          <p className="mb-[var(--space-md)] text-sm leading-[1.5]">
            Usamos cookies para melhorar sua experiência de navegação, exibir anúncios ou conteúdo
            personalizados e analisar nosso tráfego. Ao clicar em "Aceitar", você concorda com
            o uso de cookies.
          </p>
          <div className="grid grid-cols-3 gap-[var(--space-sm)]">
            <Button variant="outline" className={outlineBlue} onClick={() => setModalOpen(true)}>
              Consulte
            </Button>
            <Button variant="outline" className={outlineBlue} onClick={() => save(allWith(false))}>
              Rejeitar
            </Button>
            <Button className={solidBlue} onClick={() => save(allWith(true))}>
              Aceitar
            </Button>
          </div>
        </div>
      )}

      {decided && (
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          aria-label="Preferências de consentimento"
          className="fixed bottom-5 left-5 z-30 grid size-11 place-items-center rounded-[var(--radius-lg)] bg-forest text-cream shadow-[var(--shadow-sm)] transition-transform hover:scale-105"
        >
          <Cookie className="size-5" />
        </button>
      )}

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto rounded-[var(--radius-md)] border border-sattva-gold/40 bg-cream text-text-dark sm:max-w-xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">Preferências de cookies</DialogTitle>
            <DialogDescription className="text-sm leading-[1.6] text-text-dark">
              Usamos cookies para ajudar você a navegar com eficiência e para ativar algumas
              funções. Abaixo você encontra o detalhe de cada categoria.
            </DialogDescription>
          </DialogHeader>

          <ul className="divide-y divide-forest/10">
            {categories.map((cat) => (
              <li key={cat.id} className="flex flex-col gap-[var(--space-xs)] py-[var(--space-md)]">
                <div className="flex items-center justify-between gap-[var(--space-md)]">
                  <span className="text-sm font-bold">{cat.title}</span>
                  {cat.alwaysActive ? (
                    <span className="text-sm font-semibold text-forest">Sempre ativo</span>
                  ) : (
                    <Switch
                      checked={prefs[cat.id] ?? false}
                      onCheckedChange={(checked) => setPrefs((p) => ({ ...p, [cat.id]: checked }))}
                      aria-label={cat.title}
                      className="data-[state=checked]:bg-sattva-green"
                    />
                  )}
                </div>
                <p className="text-[13px] leading-[1.6]">{cat.description}</p>
              </li>
            ))}
          </ul>

          <DialogFooter className="grid grid-cols-1 gap-[var(--space-sm)] sm:grid-cols-3">
            <Button variant="outline" className={outlineBlue} onClick={() => save(allWith(false))}>
              Rejeitar
            </Button>
            <Button variant="outline" className={outlineBlue} onClick={() => save(prefs)}>
              Salvar preferências
            </Button>
            <Button className={solidBlue} onClick={() => save(allWith(true))}>
              Aceitar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
