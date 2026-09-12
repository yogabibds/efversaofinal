# Edney Fernandes — Site Next.js

Stack: **Next.js 14 · TypeScript · Tailwind CSS · Framer Motion**  
Hospedagem: **Netlify** (build estático via `output: 'export'`)

---

## Setup local

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build e deploy

```bash
npm run build      # gera a pasta /out
```

O Netlify já está configurado via `netlify.toml`:
- Comando: `npm run build`
- Publish: `out`

Basta conectar o repositório no painel Netlify — o deploy acontece automaticamente a cada push.

---

## Estrutura

```
src/
├── app/
│   ├── layout.tsx          # Fontes, metadata global, noise overlay
│   ├── globals.css         # Tailwind + componentes CSS base
│   ├── page.tsx            # Home
│   ├── biografia/page.tsx
│   ├── musica/page.tsx
│   ├── catalogo/page.tsx
│   ├── acervo/page.tsx
│   ├── instituto/page.tsx
│   └── contato/page.tsx
└── components/
    ├── Header.tsx           # Navegação com mobile menu + scroll state
    ├── Footer.tsx
    ├── Reveal.tsx           # Animação de entrada (scroll-triggered)
    ├── Counter.tsx          # Contador animado com spring
    └── MailtoForm.tsx       # Formulário sem backend (abre cliente de e-mail)
```

---

## Assets

Copie a pasta `assets/` do repositório atual (EDNEYF.DEV) para dentro de `public/`:

```
public/
└── assets/
    ├── img/
    │   └── memorial/       ← todas as fotos
    └── audios/             ← mp3s do Projeto Despedida
```

---

## Pendências antes do deploy

1. **E-mail da curadoria** — substituir `TROCAR-PELO-EMAIL-DA-CURADORIA@dominio.com` em:
   - `src/app/page.tsx`
   - `src/app/catalogo/page.tsx`
   - `src/app/contato/page.tsx`

2. **Favicon** — copiar `favicon.svg` do repo atual para `public/favicon.svg`

3. **Sitemap** — já gerado via `next-sitemap` ou criar `public/sitemap.xml` manualmente

---

## Design tokens

| Token | Valor |
|-------|-------|
| Dourado | `#C9A84C` |
| Fundo | `#080808` |
| Texto | `#f8f6f1` |
| Mutado | `#c8c1b5` |
| Display | Cormorant Garamond |
| Corpo | Inter |
