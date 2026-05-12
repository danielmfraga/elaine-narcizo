# Elaine Narcizo — Sistema de Design

> Um sistema visual quente, contemplativo e texturizado para a metodologia **PONTE** — uma oficina de elaboração de projetos de vida criada por Elaine Narcizo.

---

## Sobre a marca

Elaine Narcizo é educadora e facilitadora de processos formativos. Seu trabalho central é a oficina **PONTE — Para elaboração de projetos de vida**, descrita no documento `content/ponte-text.md`. A metodologia conduz o participante (em sua maioria, mulheres — o texto é endereçado no feminino) por **três exercícios** que se articulam como uma ponte entre o presente e o futuro:

1. **A presença como presente** — inventário das conquistas, repertório e recursos já existentes em dez áreas da vida.
2. **O futuro é ancestral** — reflexão sobre o que se deseja preservar e o que se quer evitar nessas mesmas áreas.
3. **Ponte** — síntese: ações concretas, factíveis, hoje, ancoradas em três pilares — _relações_, _participação em grupos_ e _produção de beleza_.

A oficina pode ser aplicada individualmente ou em grupos/comunidades, com encontros distribuídos no tempo.

**Tom da autora.** Carinhoso, sereno, em primeira pessoa ("eu acredito…", "minha expectativa é…") e endereçado direto à participante no feminino ("você", "satisfeita", "preparada"). Mistura referências eruditas (Ailton Krenak, Jaider Esbell, Gilberto Gil) com gestos cotidianos (escrever à mão, plantar uma árvore, olhar o céu).

## O sistema, em uma frase

**Papel, textura, mão.** Tipografia humanista forte sobre fundos cremosos; pares de cores quentes que carregam textura granulada de risografia; letterforms manuscritas em loop que aparecem como pano de fundo, nunca como ornamento gratuito.

---

## Fontes (origem do material)

- `uploads/PONTE Revisado.docx` — texto integral da oficina (extraído para `content/ponte-text.md`).
- `uploads/Fundo verde.jpg` / `Fundo laranja.jpg` / `Fundo roxo.jpg` — três fundos texturizados com formas manuscritas em loop, em três pares de cor (verde-creme / laranja-rosa / amarelo-lilás). Copiados para `assets/bg-*.jpg`.
- `uploads/Captura de tela 2026-05-11 011250.png` — referenciado no briefing mas **não disponível na pasta `uploads/`** quando este sistema foi montado. **Pedido pendente:** Elaine, pode reanexar?

Nenhum codebase, Figma ou deck foi fornecido; o sistema é, portanto, derivado de:
(a) os três fundos como referência visual primária,
(b) o documento PONTE como referência de tom e arquitetura conceitual,
(c) as instruções do briefing ("HTML puro, minimalista, tipografia forte, espaçamento generoso, transições suaves").

---

## Índice do repositório

| Arquivo / pasta             | Propósito                                                                 |
| --------------------------- | ------------------------------------------------------------------------- |
| `README.md`                 | Este documento — visão, fundamentos e índice.                             |
| `SKILL.md`                  | Manifesto da skill, para uso em Agent Skills/Claude Code.                 |
| `colors_and_type.css`       | Tokens CSS — cores, tipografia, espaçamento, raios, sombras, movimento.   |
| `assets/`                   | Logos, fundos, ilustrações da marca.                                      |
| `content/ponte-text.md`     | Texto integral da oficina PONTE (extraído do .docx original).             |
| `preview/`                  | Cards do sistema (cores, tipografia, componentes) renderizados em HTML.   |
| `ui_kits/ponte/`            | UI Kit: experiência guiada da oficina PONTE em HTML/JS puro.              |

---

## Fundamentos de Conteúdo (Content Fundamentals)

**Voz.** Primeira pessoa do singular. Elaine fala diretamente, sem aspas de marketing. Frases como _"Desejo que esteja bem!"_, _"É com imensa alegria que inicio esta jornada"_ abrem o material — não há frio institucional.

**Endereçamento.** Sempre no feminino e na segunda pessoa direta: _"você", "sua", "satisfeita"_. Mesmo títulos de seção evitam o imperativo seco: ao invés de "Reflita", a autora diz _"vamos começar"_, _"sugiro que você…"_, _"convido você a…"_.

**Casing.** Frases em sentence case. Títulos de exercício em **CAIXA-ALTA** apenas para os marcadores estruturais — `EXERCÍCIO 1 — A PRESENÇA COMO PRESENTE`. Os subtítulos são em itálico, em caixa baixa, e ficam à direita ou centralizados — _"a presença como presente"_, _"o futuro é ancestral"_.

**Ritmo das frases.** Longas, com vírgulas e travessões; quase nunca curtas e marteladas. Há respiração. Há introdução, há fundamentação, há proposta. O texto raramente "pede" algo sem antes ter explicado por quê.

**Pares de palavras.** A autora trabalha sempre com duplas: _presença / presente_, _passado / futuro_, _déficits / potencialidades_, _individual / coletivo_, _ousadia / coragem / esperança_. Use essa estrutura ternária ou em pares ao redigir copy nova.

**Referências culturais.** Cita autores e artistas com nome — _"O Futuro é Ancestral, de Ailton Krenak"_, _"Artista: Jaider Esbell"_, _"escute a canção Aqui e Agora, do Gilberto Gil"_. A marca **valoriza pensamento brasileiro/indígena** e o coloca como autoridade.

**Emoji.** Ausente. O documento original não usa nenhum emoji. **Não use emoji** no sistema.

**Pontuação afetiva.** Reticências aparecem com freqüência ("…pense em lugares que nunca imaginou frequentar ou conhecer."). Exclamações são raras e quando aparecem, são genuínas ("Vamos começar?", "Parabéns!!!").

**Idioma.** Português do Brasil. Sempre. Em interfaces internacionais, traduzir, mas o original é PT-BR.

### Microcopy — exemplos canônicos

| Contexto              | Use isto                                              | Evite                              |
| --------------------- | ----------------------------------------------------- | ---------------------------------- |
| CTA primário          | _Vamos começar?_ · _Continuar a jornada_              | _Iniciar agora_, _Cadastre-se_     |
| Salvar progresso      | _Guardar este pensamento_                             | _Salvar_                           |
| Próxima etapa         | _Atravessar para o próximo exercício_                 | _Próximo →_                        |
| Vazio                 | _Ainda não há nada aqui — e tudo bem._                | _Sem itens_                        |
| Erro                  | _Algo se perdeu no caminho. Vamos tentar de novo?_    | _Erro 500_                         |
| Conclusão             | _Você atravessou. Parabéns._                          | _Concluído ✓_                      |

---

## Fundamentos Visuais (Visual Foundations)

### Cores

Três **pares cromáticos** — nunca usados misturados. Cada par é atribuído a uma das três etapas da PONTE, criando um percurso cromático de imersão.

| Par                  | Função                              | Tokens-chave                                  |
| -------------------- | ----------------------------------- | --------------------------------------------- |
| **Verde / Creme**    | _Presença_ — chegada, fundamento    | `--verde-500` `#A8B73F`  · `--cream-100`      |
| **Laranja / Rosa**   | _Ponte_ — ação, encontro            | `--laranja-500` `#E87A32` · `--rosa-500`      |
| **Amarelo / Lilás**  | _Futuro_ — sonho, ancestralidade    | `--amarelo-500` `#F5D731` · `--lilas-500`     |

**Tinta (texto).** Nunca preto puro — `--ink-900: #1E1B16` é um quase-preto **quente**, levemente avermelhado, que combina com o creme do fundo. Branco também é evitado; o "branco" da marca é o creme `--cream-100`.

### Tipografia

- **Display — Newsreader.** Serifa humanista com `opsz` variável (otimização ótica). Pesos 300–500. Itálico tem um caráter levemente caligráfico que dialoga com as letterforms manuscritas dos fundos.
- **Corpo — DM Sans.** Sans neutro, geométrico-humanista, com `opsz`. Pesos 300/400/500.
- **Acento manuscrito — Caveat.** _Substituição flagged_. Os fundos da marca usam uma escrita pintada à mão (em loops gordos, espessos, tipo pincel) que não consegui identificar exatamente — Caveat é a aproximação mais próxima no Google Fonts, mas é mais fina e mais "casual". **Elaine, pode me enviar o arquivo .ttf/.otf da fonte manuscrita usada nos fundos?**

**Hierarquia.** Generosa e escalar — `clamp()` com vw para fluidez. O `--step-5` (display) chega a `7.5rem` em telas grandes; quando há um título, ele é o evento da página.

**Wrap.** `text-wrap: balance` em títulos, `text-wrap: pretty` em corpo. Largura máxima de leitura: **64ch** para corpo, **58ch** para lede.

### Espaçamento

Escala 8pt **com saltos generosos** — `--space-8` = 72px, `--space-9` = 112px, `--space-10` = 160px. Páginas respiram. Sessões de exercício têm 112px de pneumática vertical entre blocos.

### Fundos

A marca tem **três tratamentos** de fundo:

1. **Papel-creme liso** (`--cream-100`) — estado de leitura padrão, máxima legibilidade.
2. **Fundos texturizados full-bleed** (`assets/bg-*.jpg`) — usados em capas de exercício e momentos cerimoniais. Trazem as letterforms manuscritas em loop, em pares de cor com textura granulada.
3. **Blocos chapados de acento** (`--accent`) — barras horizontais, capítulos, citações em destaque.

**Nunca use gradientes lineares modernos** (azul-roxo, peach-pink-fade etc.). A textura da marca é **granulada/serigráfica**, não suave.

### Bordas, raios e sombras

- **Raios.** Predominantemente **suaves a médios** (10–28px). Pílulas para CTAs (`--radius-pill`). Cantos retos ocasionais em blocos editoriais.
- **Bordas.** `1px solid rgba(30,27,22,0.12)` — sutis, cor da tinta diluída.
- **Sombras.** Muito sutis, sempre quentes (sombras da tinta `#1E1B16`, não pretas). Sombras baixas e largas; o sistema imita papel sobre papel, não vidro sobre escuro.

### Hover & Pressed

- **Hover em link/texto.** Cor migra de `--accent-deep` para `--accent` (fica mais vibrante, não mais escuro).
- **Hover em botão.** Sutil sobe-e-firma: `translateY(-1px)` + sombra `--shadow-2`. Sem mudança de cor de fundo violenta.
- **Pressed.** `translateY(0)` + sombra `--shadow-1` (afunda). Sem efeito de "fill" agressivo.
- **Focus visible.** Anel sólido em `--accent` com offset de 3px. Sem ring azul de sistema.

### Movimento

- **Easing default.** `cubic-bezier(0.16, 1, 0.3, 1)` — saída calma, longa, contemplativa. Quase nenhuma aceleração inicial; o movimento "se assenta".
- **Durações.** 180/320/560/900ms. **Nada abaixo de 180ms.** A marca não é "snappy"; ela respira.
- **Transições.** Fade + slide-up de 8–12px nas entradas. **Nunca bounces, nunca elásticos.**

### Iconografia

Quase ausente. O documento original não usa nenhum ícone. Quando a UI **precisar** de um ícone (navegação, status), usamos um conjunto **minimalista de stroke fino** — _ver `ICONOGRAPHY`_ abaixo.

### Transparência e blur

Usados com parcimônia. **Blur só em uma situação:** ao abrir um modal/diálogo, o fundo recebe `backdrop-filter: blur(8px)` + véu creme a 70% de opacidade. Não há "glassmorphism" decorativo em cards ou botões.

### Layout

- **Coluna única, centrada, com leitura confortável.** Largura máxima 720px para conteúdo de leitura; 1120px para layouts compostos.
- **Elementos fixos.** Mínimos. Apenas um botão de salvar (canto inferior direito) durante exercícios. Sem barras de navegação coladas em topo.
- **Grade.** 12 colunas implícitas, mas o sistema favorece **rítmica vertical** sobre composição em grade pesada.

---

## ICONOGRAPHY

A marca PONTE é **fundamentalmente textual** — o documento original não tem ícones. Onde a UI precisa de ícones funcionais (setas de navegação, salvar, fechar), o sistema usa:

- **Lucide Icons** via CDN — `https://unpkg.com/lucide@latest/dist/umd/lucide.js`. Stroke 1.5–2px, cantos arredondados.
- Tamanho-padrão: **20px** (acompanhando corpo de 16px) ou **24px** em headers.
- Cor: herda do contexto (`currentColor`); nunca preenchimentos coloridos.
- **Emoji: nunca.** Unicode decorativo: nunca. Se um ícone é necessário, é um SVG de stroke.

**Ilustrações.** Não existem ilustrações de personagem ou cenário na marca. Os _únicos_ recursos ilustrativos são:
- **As letterforms manuscritas em loop** (presentes nos três fundos) — usadas como pano de fundo decorativo, full-bleed, nunca recortadas pequenas.
- **Linhas onduladas pintadas à mão** — derivadas das mesmas letterforms; podem aparecer como divisor de seção.

**Logo.** Não foi fornecido um logo formal pela autora. O sistema usa **"Elaine Narcizo"** como wordmark em Newsreader Light, e **"PONTE"** como mark em Newsreader Regular com letter-spacing aberto (0.3em). Ver `preview/logo.html` e `assets/logo.svg`.

**Pedido pendente:** Elaine, você tem um logo/assinatura visual oficial?

---

## Como usar este sistema

1. Inclua `colors_and_type.css` no `<head>` de qualquer página.
2. Defina o tema na raiz via `data-theme="verde|laranja|amarelo"` para alternar o par de cor de acento.
3. Use as classes utilitárias mínimas: `.display`, `.lede`, `.hand`, `.eyebrow`.
4. Para a experiência guiada da oficina, consulte `ui_kits/ponte/index.html`.
