# UI Kit — PONTE (experiência guiada)

Recriação interativa da oficina **PONTE — Para elaboração de projetos de vida** de Elaine Narcizo. HTML puro + CSS + JS vanilla, sem frameworks. Honra o pedido explícito da autora: _"HTML puro, sem dependências pesadas"_.

## Arquivos

| Arquivo       | Propósito                                                                                   |
| ------------- | ------------------------------------------------------------------------------------------- |
| `index.html`  | Shell único — carrega tokens, estilos e o app.                                              |
| `styles.css`  | Estilos do kit. Estende `../../colors_and_type.css`.                                        |
| `data.js`     | Todo o conteúdo da oficina (extraído de `content/ponte-text.md`). Editável sem código.      |
| `app.js`      | State machine + renderização + autosave em `localStorage`.                                   |

## Tela a tela

1. **Capa / Olá.** Fundo verde texturizado full-bleed. Saudação manuscrita gigante.
2. **Mapa do percurso.** Apresenta a metodologia e os três exercícios como cards de capa.
3. **Capa de exercício.** Para cada um dos 3 exercícios, uma capa full-bleed com o fundo cromático correspondente, número, título em itálico, tagline, e (no Exercício 1) o link para _Aqui e Agora_, de Gilberto Gil.
4. **Exercício 1 — Presença.** Inventário das 11 áreas da vida. Textarea por área com prompt em itálico, contador de "guardado / em branco", e auto-save.
5. **Exercício 2 — Futuro.** Mesmas 11 áreas, prompt diferente — "o que você não deseja".
6. **Pilares (preâmbulo do Exercício 3).** Três fundamentos: _relações_, _grupos_, _beleza_. Cada um com tarefas sugeridas em itálico e uma textarea longa.
7. **Exercício 3 — Ponte.** Mesmas áreas, prompt de ação. Cada área expõe um `<details>` com as sugestões da Elaine — um clique em qualquer sugestão adiciona-a ao seu textarea (com marcador `•`).
8. **Compromisso.** Carta editorial centralizada com assinatura manuscrita. Botões: imprimir/PDF, voltar ao mapa, "enviar para alguém de confiança".

## Componentes (reutilizáveis em outros artefatos)

- `topbar()` — marca + indicador de etapa (3 dots).
- `stage cover` — capa full-bleed cromática (`.cover`).
- `area block` — bloco título + prompt + textarea + (opcional) sugestões.
- `pillar block` — coluna fixa de eyebrow + corpo + textarea.
- `letter` — papel carta com assinatura manuscrita.
- `save-bar` — pill flutuante inferior direita com indicador e CTA "Continuar →".
- `chip`, `btn-primary`, `btn-secondary`, `btn-ghost`, `btn-hand` — todos definidos no `styles.css` ou nos cards de `preview/`.

## State / persistência

Tudo que a participante escreve é salvo em `localStorage` sob a chave `ponte:v1`. Estrutura:

```js
{
  screen: "presente" | "futuro" | "ponte" | "ponte-prefacio" | "compromisso" | ...,
  stageIdx: 0 | 1 | 2,
  answers: {
    presente: { saude: "...", familia: "...", ... },
    futuro:   { saude: "...", ... },
    ponte:    { saude: "...", ... },
    pillars:  { relacoes: "...", grupos: "...", beleza: "..." },
    compromisso: "..."
  }
}
```

Para reiniciar manualmente no console: `__ponte.reset()`.

## Observações / próximos passos

- O `app.js` re-renderiza a árvore inteira a cada `go()`. É leve (1 a 3 telas, ~11 textareas), mas se a base de dados crescer, vale tornar incremental.
- Não há autenticação, sincronização entre dispositivos, ou exportação. Para uso real em oficinas (em grupo) o próximo passo seria um botão "exportar PDF da Ponte preenchida".
- O áudio de _Aqui e Agora_ (Gilberto Gil) está como link externo (YouTube) — incorporar player embed pode quebrar a quietude da experiência; mantive como sugestão.
