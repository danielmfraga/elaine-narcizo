# Deploy — Git + Vercel

Este projeto é **100% estático** (HTML + CSS + JS, sem build). Pode subir em qualquer host estático; o caminho mais curto é o Vercel.

## 1. Subir no Git

```bash
# dentro da pasta do projeto
git init
git add .
git commit -m "PONTE — primeiro deploy"

# crie um repositório vazio no GitHub (ex.: ponte-elaine)
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/ponte-elaine.git
git push -u origin main
```

> O `.gitignore` já exclui `uploads/`, `ponte_raw.txt` e arquivos de editor — esses são só de trabalho, não precisam ir pro repositório.

## 2. Subir no Vercel

**Opção A — pelo painel (mais fácil):**

1. Entre em <https://vercel.com/new>
2. Conecte sua conta do GitHub
3. Selecione o repositório `ponte-elaine`
4. Em **Framework Preset**, deixe **"Other"** (ou "Static")
5. **Build Command:** deixe em branco
6. **Output Directory:** deixe em branco (raiz)
7. Clique em **Deploy**

Pronto. Em ~30 segundos você recebe uma URL tipo `https://ponte-elaine.vercel.app`. A cada `git push`, o Vercel redeploya automático.

**Opção B — pelo terminal:**

```bash
npm i -g vercel
vercel              # primeiro deploy (segue o assistente)
vercel --prod       # promove para produção
```

## 3. URLs que vão funcionar

- `/` → página inicial (este `index.html`)
- `/ponte` → redirect para a experiência guiada
- `/telas` → redirect para o mapa de telas
- `/ui_kits/ponte/` → experiência guiada (canônico)
- `/canvas/todas-as-telas.html` → mapa de telas (canônico)

## 4. Domínio próprio

No painel do Vercel: **Settings → Domains → Add**. Aponte o DNS do seu domínio (`elainenarcizo.com.br`, por exemplo) para o Vercel e fica online em alguns minutos com HTTPS automático.

## 5. O que cada arquivo faz

| Arquivo / pasta            | Para que serve                                   | Vai pro git? |
| -------------------------- | ------------------------------------------------ | :----------: |
| `index.html`               | Página inicial (landing)                         | ✓ |
| `colors_and_type.css`      | Tokens da marca                                  | ✓ |
| `vercel.json`              | Config de cache e redirects                      | ✓ |
| `assets/`                  | Fundos e logo                                    | ✓ |
| `content/ponte-text.md`    | Texto integral da oficina                        | ✓ |
| `ui_kits/ponte/`           | A experiência guiada                             | ✓ |
| `canvas/`                  | Mapa de todas as telas                           | ✓ |
| `preview/`                 | Cards do design system (review interno)          | ✓ |
| `README.md` · `SKILL.md`   | Documentação                                     | ✓ |
| `uploads/`                 | Materiais originais (privados)                   | ✗ |
| `ponte_raw.txt`            | Extração temporária do .docx                     | ✗ |
