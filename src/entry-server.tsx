import { StrictMode } from "react"
import { renderToString } from "react-dom/server"

import App from "./App.tsx"

// Usado só no build: gera o HTML da página para o Google ler sem JavaScript.
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  )
}
