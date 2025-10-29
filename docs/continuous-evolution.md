# Fase 5 — Evolução contínua

## Conteúdo (Blog)
- Cadência: 1–2 artigos/mês.
- Pauta: termos com intenção (WhatsApp, atendimento, agendamento, IA) + dores dos ICPs.
- Formato: 800–1200 palavras, exemplo real, CTA suave (lead magnet / WhatsApp / demo).
- SEO: título (<=60), descrição (<=160), H2/H3, links internos, imagem OG.
- Publicação: adicionar no `src/content/posts.ts` e gerar capa/OG.

## Palavras‑chave & GSC
- Configurar propriedade no Search Console.
- Enviar `sitemap.xml` e monitorar cobertura.
- Relatório semanal: consultas, páginas, CTR, posição média; ajustar títulos/âncoras.

## UX orientada a dados
- Hotjar ativo via env (`VITE_HOTJAR_ID`, `VITE_HOTJAR_SV`).
- Mapas de calor e recordings nas páginas principais.
- Formular hipóteses → A/B de CTA/texto/seção (ver `experiments.ts`).

## Funcionalidades futuras
- Chat em tempo real no site; widget de chat (guardado por env, similar ao WhatsApp/Hotjar).
- Chatbot on‑site: fluxo de triagem + handoff humano.
- Case studies: criar `src/pages/cases/[slug]` com histórias e métricas.

## Automação de marketing
- `VITE_LEAD_WEBHOOK_URL` para integração com ESP/CRM (LeadMagnet já envia POST JSON).
- Fluxos: boas‑vindas, nutrição (3–5 e‑mails), reengajamento.

## Revisão trimestral
- Relatório completo (GA4 + GSC + CRM): leads, taxa de conversão, LCP/CLS, páginas top.
- Roadmap v2.0: priorizar melhorias com base em impacto x esforço.

