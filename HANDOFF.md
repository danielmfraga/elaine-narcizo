# Contexto do projeto — para retomar em novo chat

> Este arquivo é uma **carta para a próxima sessão de trabalho**. Leia-o por inteiro antes de tocar em qualquer coisa. Ele descreve o que é o projeto, o que já está pronto, o porquê das decisões, e onde estão os fios soltos.

---

## 1. Quem é a cliente

**Elaine Narcizo** é educadora e facilitadora. O produto central dela é a oficina **PONTE — para elaboração de projetos de vida**, em português do Brasil. A oficina conduz a participante (texto endereçado no feminino) por três exercícios à mão, em onze áreas da vida, terminando numa carta de compromisso pessoal.

O material original é o arquivo `uploads/PONTE Revisado.docx` (extração limpa em `content/ponte-text.md`). Esse texto é a fonte de verdade para tom, vocabulário e estrutura. **Não invente conteúdo novo sem checar contra ele.**

---

## 2. O que o usuário pediu (resumo da conversa original)

1. Criar um sistema de design / brand kit completo a partir dos três fundos texturizados (`Fundo verde.jpg`, `Fundo laranja.jpg`, `Fundo roxo.jpg`) + o texto da oficina.
2. Montar uma experiência guiada da oficina em HTML — "minimalista, tipografia forte, espaçamento generoso, transições suaves, **HTML puro, sem frameworks pesados**".
3. Ver tudo lado a lado num canvas/mapa de telas.
4. Empacotar tudo para subir no Git + Vercel.

**Pedidos pendentes (perguntas em aberto para Elaine):**

- A fonte manuscrita usada nos fundos não é Caveat — Caveat é só uma substituição flagged. Pedir o arquivo `.ttf/.otf` original.
- Não foi fornecido logo oficial. O wordmark atual ("Elaine Narcizo" italic + PONTE espaçado) é uma proposta — confirmar.
- Existia um print `Captura de tela 2026-05-11 011250.png` mencionado no briefing que **não estava** na pasta uploads/. Pedir de novo.

---

## 3. Decisões de design (não desfazer sem motivo)

- **Três pares cromáticos**, nunca misturados na mesma superfície: Verde+Creme (Presente), Amarelo+Lilás (Futuro), Laranja+Rosa (Ponte). Tokens em `colors_and_type.css`.
- **Tipografia**: Newsreader (display, italic é o gesto principal), DM Sans (corpo), Caveat (acento manuscrito, flagged).
- **Sem emoji. Sem ícones decorativos. Sem gradientes modernos azul→roxo.** A textura da marca é granulada/risográfica.
- **PT-BR sempre. Endereçamento no feminino, segunda pessoa.**
- **Vanilla JS** no UI kit (`ui_kits/ponte/app.js`), sem React. Foi uma decisão explícita do usuário; manter.
- **Espaçamento generoso.** Saltos até `--space-10: 160px`. Não comprimir pra caber mais conteúdo.
- **Tinta nunca é #000.** Sempre `--ink-900: #1E1B16` (quase-preto quente). Branco também não — papel é `--cream-100`.
- **Hand letterforms** (Caveat por enquanto) só em rotação leve (-3° a -6°), em cor de acento, com parcimônia.

Todos os detalhes estão em `README.md` (fundamentos de conteúdo, fundamentos visuais, iconografia).

---

## 4. Arquitetura do repositório

```
/
├── index.html               ← landing (Olá! + 3 cartões de entrada)
├── colors_and_type.css      ← TOKENS — fonte de verdade do visual
├── README.md                ← guidelines completos do sistema
├── SKILL.md                 ← manifesto reutilizável como Agent Skill
├── DEPLOY.md                ← passo-a-passo Git + Vercel
├── HANDOFF.md               ← este arquivo
├── vercel.json              ← cache + redirects
├── .gitignore
│
├── assets/
│   ├── bg-green.jpg         ← fundo Presente
│   ├── bg-orange.jpg        ← fundo Ponte
│   ├── bg-purple.jpg        ← fundo Futuro (na verdade é amarelo+lilás)
│   └── logo.svg             ← wordmark proposto
│
├── content/
│   └── ponte-text.md        ← TEXTO ORIGINAL — fonte de verdade
│
├── ui_kits/ponte/           ← A EXPERIÊNCIA GUIADA
│   ├── index.html           ← entry; carrega data.js + app.js
│   ├── data.js              ← todo o conteúdo da oficina, estruturado
│   └── app.js               ← roteador + 10 telas em vanilla JS
│
├── canvas/
│   └── todas-as-telas.html  ← 10 iframes lado-a-lado (apresentação/decisão)
│
└── preview/                 ← cards do design system (review interno)
    ├── logo.html
    ├── brand-backgrounds.html
    ├── colors-pairs.html · colors-neutrals.html
    ├── colors-scale-{verde,laranja,rosa,amarelo,lilas}.html
    ├── type-{display,scale,families,body,hand}.html
    ├── spacing-scale.html · radii-shadows.html
    └── components-{buttons,field,stages,chips,quote,suggestion}.html
```

---

## 5. Como o UI kit funciona (importante)

`ui_kits/ponte/app.js` é um **roteador single-page em vanilla JS** com 10 telas. Não usa React, não usa build, não tem dependência externa além do CSS de tokens.

**Telas (em ordem):**

1. `welcome` — Olá! Capa.
2. `about` — Explicação do método.
3. `presente-intro` — Capa do exercício 1.
4. `presente` — Inventário do presente (11 áreas, textarea por área).
5. `futuro-intro` — Capa do exercício 2.
6. `futuro` — O que não desejar (mesmas 11 áreas).
7. `pilares` — Três pilares (relações / grupos / beleza).
8. `ponte-intro` — Capa do exercício 3.
9. `ponte` — Ponte de ações (11 áreas + sugestões).
10. `compromisso` — Carta final de compromisso + assinatura.

**Estado:**

- Persistido em `localStorage` sob a chave `ponte:v1`. Auto-save em cada keystroke.
- Indicador de etapa (Presente · Futuro · Ponte) no topo das telas de exercício.
- Navegação: barra inferior com "voltar" + "próximo". Suporta `?screen=ID` na URL para pular direto (útil pro canvas).

**Reset:** abrir o console e rodar `localStorage.removeItem('ponte:v1')` zera. (Implementar UI de reset talvez seja uma boa próxima tarefa.)

---

## 6. O que está deployment-ready

Site é 100% estático. Vercel detecta automaticamente. Build command vazio. Output directory vazio. As redirects úteis estão em `vercel.json`:

- `/ponte` → `/ui_kits/ponte/`
- `/telas` → `/canvas/todas-as-telas.html`

---

## 7. Próximos passos prováveis (em ordem de impacto)

1. **Receber e instalar a fonte manuscrita real** da Elaine (substituir Caveat). Provavelmente vai aparecer como upload — colocar em `assets/fonts/`, adicionar `@font-face` em `colors_and_type.css`, trocar `--font-hand`. Fazer um before/after pra ela aprovar.
2. **Mobile.** O UI kit foi composto pensando em desktop primeiro. Validar em < 480px: a barra de etapas, os textareas, os botões fixos no rodapé, o canvas de "todas as telas".
3. **Exportar a sessão da participante.** Botão na tela de Compromisso para baixar tudo que ela escreveu como PDF (ou pelo menos como `.txt`/`.md`). Hoje só fica no localStorage.
4. **Tela de "minha jornada" / progresso.** Não existe ainda — mostrar quais áreas das 11 ela já preencheu em cada etapa. Útil pra retomar.
5. **Modo facilitadora.** O documento original tem uma seção sobre conduzir o processo com grupos. Vale criar uma área separada (`/facilitadora`) com checklist de cronograma, sugestões de adaptação por público, e talvez compartilhamento de link.
6. **OG image + favicon.** O site não tem. Fazer com a textura verde e o lockup.
7. **Domínio próprio.** Configurar no painel Vercel quando Elaine indicar (`elainenarcizo.com.br` ou similar).
8. **Acessibilidade.** Auditoria: contraste dos textareas (cream-50 sobre cream-100 está borderline), foco visível em todos os controles, navegação por teclado nas chips, labels nos campos.

---

## 8. Coisas que NÃO devem virar próximo passo (anti-roadmap)

- ❌ Refatorar pra React/Next/Astro. O usuário pediu explicitamente vanilla. Resistir.
- ❌ Adicionar gradientes "modernos" ou glassmorphism. Quebra a marca.
- ❌ Comprimir espaçamento pra "caber mais". A marca **é** o espaço.
- ❌ Introduzir uma quarta cor. Trabalhar dentro dos três pares.
- ❌ Adicionar ícones do Lucide em larga escala. A marca é textual.
- ❌ Traduzir para inglês sem pedido explícito. PT-BR é o default.

---

## 9. Como se preparar antes de mexer

1. Ler `README.md` por inteiro (sistema de design).
2. Abrir `content/ponte-text.md` e dar uma corrida pelos primeiros 30%, pra calibrar o tom da Elaine.
3. Abrir `index.html`, depois `ui_kits/ponte/index.html`, depois `canvas/todas-as-telas.html` — nessa ordem.
4. Ler este arquivo (sim, de novo, antes de propor mudanças grandes).
5. Perguntar à Elaine o que ela quer atacar antes de propor.

Boa próxima sessão. Capricha.
