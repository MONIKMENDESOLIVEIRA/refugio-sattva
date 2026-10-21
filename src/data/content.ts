const WHATSAPP_NUMBER = "5548984456666"

export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

// As reservas são feitas só pelo Airbnb; o WhatsApp é canal de dúvidas.
export const WHATSAPP_CONTACT_URL = whatsappUrl(
  "Olá! Tenho uma dúvida sobre as hospedagens do Refúgio Sattva."
)

export const INSTAGRAM_URL = "https://www.instagram.com/refugio_sattva_floripa/"

export type Photo = { src: string; alt: string }

export const navLinks = [
  { text: "Home", href: "#topo" },
  { text: "Sobre", href: "#about" },
  { text: "Chalés", href: "#acomodacoes" },
  { text: "Reservas", href: "#reservas" },
]

export const hero = {
  title: "Um refúgio entre a mata e o mar",
  emphasis: "a mata e o mar",
  subtitle:
    "Chalés românticos para casais na Praia da Solidão, sul de Florianópolis, com vista para o mar, hidromassagem e privacidade em meio à Mata Atlântica.",
  cta: "Reservar minha estadia",
  ctaHref: "#acomodacoes",
}

export const intro = {
  badge: "Praia da Solidão · Florianópolis - SC",
  heading:
    "Refúgio Sattva: chalés com vista para o mar na Praia da Solidão, em Florianópolis, para casais que buscam descanso, privacidade e natureza.",
}

export const about = {
  title: "Sobre o Refúgio",
  heading: "Um lugar para desacelerar entre a mata e o mar",
  emphasis: "desacelerar",
  paragraphs: [
    "A Praia da Solidão é a última praia do sul da Ilha de Santa Catarina que se alcança de carro. Por isso, guarda um ritmo raro em Florianópolis: mar calmo, cachoeira, trilhas e uma comunidade pequena cercada de Mata Atlântica.",
    "Foi nesse cenário que nasceu o Refúgio Sattva: chalés para casais construídos na encosta, com vista para o mar e privacidade de verdade. Todos têm hidromassagem para relaxar a dois e varanda para contemplar o oceano.",
    "Sattva, em sânscrito, significa equilíbrio, leveza e clareza. É isso que queremos que você leve daqui: dias sem pressa, o som da mata e a sensação de ter, enfim, descansado.",
  ],
  quote: "Aqui, o luxo é o silêncio, a vista e o tempo que volta a ser seu.",
  quoteEmphasis: "o luxo",
  photos: [
    { src: "/images/refugio/praia-da-solidao-vista-aerea-escadaria.webp", alt: "Vista aérea da Praia da Solidão, em Florianópolis, com a escadaria entre as pedras e o mar" },
    { src: "/images/refugio/praia-da-solidao-vista-mar-varanda.webp", alt: "Varanda com vista para o mar da Praia da Solidão, em Florianópolis" },
    { src: "/images/refugio/nascer-do-sol-praia-da-solidao.webp", alt: "Nascer do sol sobre o mar visto do Refúgio Sattva" },
    { src: "/images/refugio/chale-na-mata-atlantica-florianopolis.webp", alt: "Chalé do Refúgio Sattva em meio à Mata Atlântica" },
    { src: "/images/refugio/sagui-mata-atlantica-refugio-sattva.webp", alt: "Sagui na Mata Atlântica ao redor dos chalés" },
    { src: "/images/refugio/tucano-praia-da-solidao.webp", alt: "Tucano nas árvores da Praia da Solidão" },
  ] satisfies Photo[],
}

export type BookingLink = {
  text: string
  href: string
  variant: "outline" | "ghost"
}

export type Cabin = {
  id: string
  title: string
  description: string
  photos: Photo[]
  links: BookingLink[]
}

const bookingLinks = (chalet: string, airbnbUrl: string): BookingLink[] => [
  { text: `Reservar o ${chalet} no Airbnb`, href: airbnbUrl, variant: "outline" },
]

export const cabins = {
  title: "Chalés",
  heading: "Três chalés para casais, cada um com sua vista",
  subtitle:
    "Todos os chalés do Refúgio Sattva acomodam duas pessoas e oferecem vista para o mar, hidromassagem para relaxar a dois e total integração com a Mata Atlântica. Escolha o seu:",
  items: [
    {
      id: "sattva",
      title: "Chalé Sattva",
      description:
        "Nossa tiny house assinada pela arquiteta Cibele Castelo Branco. Paredes de vidro, quarto no mezanino com vista para o mar, hidromassagem externa aquecida, ducha ao ar livre e cozinha compacta: tudo pensado para viver a natureza sem abrir mão do conforto.",
      photos: [
        { src: "/images/sattva/chale-sattva-tiny-house-fachada.webp", alt: "Chalé Sattva, tiny house na mata com vista para o mar em Florianópolis" },
        { src: "/images/sattva/chale-sattva-hidromassagem-externa-vista-mar.webp", alt: "Hidromassagem externa aquecida do Chalé Sattva com vista para o mar" },
        { src: "/images/sattva/chale-sattva-mezanino-nascer-do-sol.webp", alt: "Nascer do sol visto da cama no mezanino do Chalé Sattva" },
        { src: "/images/sattva/chale-sattva-interior-mezanino.webp", alt: "Interior do Chalé Sattva com escada para o mezanino" },
        { src: "/images/sattva/chale-sattva-cozinha.webp", alt: "Cozinha compacta equipada do Chalé Sattva" },
        { src: "/images/sattva/chale-sattva-varanda-vista-mar.webp", alt: "Varanda do Chalé Sattva com vista para a Praia da Solidão" },
      ],
      links: bookingLinks("Chalé Sattva", "https://www.airbnb.com.br/rooms/792072726006372150"),
    },
    {
      id: "shanti",
      title: "Chalé Shánti",
      description:
        "O chalé para os dias mais frios: lareira elétrica, hidromassagem interna aquecida e varanda com vista para o mar. Um ambiente acolhedor e romântico para passar o dia inteiro a dois, sem precisar sair.",
      photos: [
        { src: "/images/shanti/chale-shanti-fachada-a-frame-mata-atlantica.webp", alt: "Chalé Shánti, chalé em A com telhado verde na Mata Atlântica" },
        { src: "/images/shanti/chale-shanti-hidromassagem-interna-vista-varanda.webp", alt: "Hidromassagem interna do Chalé Shánti com vista para a varanda" },
        { src: "/images/shanti/chale-shanti-lareira-eletrica-sala.webp", alt: "Sala do Chalé Shánti com lareira elétrica" },
        { src: "/images/shanti/chale-shanti-quarto-casal.webp", alt: "Quarto de casal do Chalé Shánti" },
        { src: "/images/shanti/chale-shanti-varanda-vista-mar.webp", alt: "Varanda do Chalé Shánti com vista para o mar da Praia da Solidão" },
        { src: "/images/shanti/chale-shanti-cozinha-equipada.webp", alt: "Cozinha equipada do Chalé Shánti" },
      ],
      links: bookingLinks("Chalé Shánti", "https://www.airbnb.com.br/rooms/1228190981715681735"),
    },
    {
      id: "shakti",
      title: "Chalé Shakti",
      description:
        "No alto da montanha, o Chalé Shakti tem vista privilegiada para o mar e para o nascer do sol. Hidromassagem interna com vista para o mar, lareira elétrica e varanda privativa fazem dele um refúgio romântico para celebrar datas especiais.",
      photos: [
        { src: "/images/shakti/chale-shakti-a-frame-alto-da-montanha.webp", alt: "Chalé Shakti, chalé em A no alto da montanha em meio à Mata Atlântica" },
        { src: "/images/shakti/chale-shakti-hidromassagem-interna-vista.webp", alt: "Hidromassagem interna do Chalé Shakti com parede de vidro e vista" },
        { src: "/images/shakti/chale-shakti-nascer-do-sol-vista-mar.webp", alt: "Nascer do sol sobre o mar visto do Chalé Shakti" },
        { src: "/images/shakti/chale-shakti-quarto-casal.webp", alt: "Quarto de casal do Chalé Shakti sob o telhado em A" },
        { src: "/images/shakti/chale-shakti-lareira-eletrica-varanda.webp", alt: "Lareira elétrica do Chalé Shakti com a varanda ao fundo" },
        { src: "/images/shakti/chale-shakti-varanda-vista-mar.webp", alt: "Varanda do Chalé Shakti com vista para o mar da Praia da Solidão" },
      ],
      links: bookingLinks("Chalé Shakti", "https://www.airbnb.com.br/rooms/1269029217198337625"),
    },
  ] satisfies Cabin[],
}

export const booking = {
  title: "Reservas",
  heading: "Como reservar sua estadia?",
  text: "As reservas do Refúgio Sattva são feitas pelo Airbnb, com pagamento seguro pela plataforma. Escolha o seu chalé e confira as datas disponíveis:",
  note: "Check-in a partir das 16h e check-out até as 11h. O acesso aos chalés é a pé: cerca de 450 m de subida a partir do estacionamento, perto da praia.",
  links: cabins.items.map((cabin) => ({ text: cabin.title, href: cabin.links[0].href })),
  contact: "Ficou com alguma dúvida? Fale com a gente pelo WhatsApp",
  contactHref: WHATSAPP_CONTACT_URL,
}

export const footer = {
  text: "© Refúgio Sattva. Praia da Solidão, Florianópolis - SC.",
  links: [
    { text: "WhatsApp", href: WHATSAPP_CONTACT_URL },
    { text: "Instagram", href: INSTAGRAM_URL },
    { text: "Airbnb", href: "https://www.airbnb.com.br/rooms/792072726006372150" },
  ],
}
