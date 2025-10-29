# Auditoria Técnica (Fase 0)

Data: YYYY-MM-DD
Responsáveis: Dev/SEO

## Como rodar localmente

- Instalar deps: `npm i`
- Build: `npm run build`
- Preview (produção local): `npm run preview`
  - Default: http://localhost:4173

## Lighthouse

- Rodar: `npx lighthouse http://localhost:4173 --view`
- Metas (orçamento inicial):
  - Performance ≥ 90 (mobile/desktop)
  - Accessibility ≥ 90
  - Best Practices ≥ 90
  - SEO ≥ 90
- Exportar relatório em HTML e salvar em `docs/audit-lighthouse.html`.

## PageSpeed Insights

- URL de produção: <preencher>
- Rodar e exportar PDFs/screenshots para `docs/`.

## Console/Erros

- Abrir devtools (F12) no preview e em produção.
- Capturar erros/warnings relevantes e registrar em issues.

## ‘Edit with lovable.dev’

- Verificação:
  - Plugin `lovable-tagger` está limitado a `mode === "development"` em `vite.config.ts`.
  - Não deve aparecer em produção.
- Ação:
  - Se aparecer em produção, abrir issue e revisar build/host (cache/CDN).

## Widgets/terceiros

- Script WhatsApp movido para `src/main.tsx` com guarda de ambiente.
  - Só carrega fora de `staging`.
- Revisar consentimento (LGPD) na Fase 5.

## Acessibilidade

- Verificar contraste, headings, `aria-*`, foco e navegação por teclado.
- Rodar checks automáticos (Lighthouse) e inspeção manual.

## Performance inicial (checklist)

- Imagens: WebP/AVIF, dimensões, `loading="lazy"` (quando aplicável)
- Fontes: subset, `preload` principais
- CSS/JS: minificação (Vite ok), tree‑shaking
- Critial path: avaliar split de componentes pesados
