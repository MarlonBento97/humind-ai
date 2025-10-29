# Fase 4 — Testes, Ajustes e Lançamento

Data: YYYY-MM-DD
Responsáveis: PM, Dev, QA, SEO, Analytics

## A/B Test (CTA)

- Experimento implementado via `getCtaVariant()` (A/B) persistente por usuário.
- Param opcional: `?exp_cta=A|B` (força variante por URL).
- Eventos GA4: `lead_whatsapp_click`, `lead_agendar_demo` com parâmetro `cta_variant`.
- Verificar distribuição e conversões por variante no GA4 Explorations.

## Mobile-first & Performance

- Lighthouse (mobile/desktop) ≥ 90 para P/Acc/BP/SEO.
- Imagens com `loading=lazy` (equipe) e compressão em assets finais.
- Cache estático (hashes via Vite) e minificação ok.

## QA — Links, Formulários, Redirects

- Revisar todos links do Footer (rotas SPA): /privacidade, /termos, /cookies, /quem-somos, /blog.
- CTAs: WhatsApp, Agendar (Google Calendar) abrem em nova aba.
- Lead magnet: validação de e‑mail, evento GA4 `lead_magnet_submit`.

## SEO

- `public/sitemap.xml` e `public/robots.txt` com `Sitemap:` apontando para domínio de produção.
- `SEOHead` aplicado na Home e nas novas páginas.
- Imagem OG real (substituir `placeholder.svg`).

## Backup

- Script: `npm run backup` gera `backups/site-YYYYMMDDHHmm.zip` do `dist/`.
- Antes do Go‑Live: snapshot do site atual e DNS TTL reduzido.

## Lançamento

- Janela baixa de tráfego; congelar conteúdo 24h.
- Publicar via Lovable e apontar DNS.
- Smoke tests pós-publicação (home, blog, privacidade/termos/cookies, CTAs).

## Monitoramento (T+30 dias)

- GA4: leads/dia, taxa de conversão, bounce, origem tráfego.
- Erros JS e uptime.
- Reunião T+7 e T+30 com insights e ajustes.

