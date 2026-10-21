/** Renderiza `text` com o trecho `emphasis` em itálico, como no site original. */
export function Emphasis({ text, emphasis }: { text: string; emphasis: string }) {
  const start = text.lastIndexOf(emphasis)
  if (start === -1) return <>{text}</>
  return (
    <>
      {text.slice(0, start)}
      <em className="font-normal italic">{emphasis}</em>
      {text.slice(start + emphasis.length)}
    </>
  )
}
