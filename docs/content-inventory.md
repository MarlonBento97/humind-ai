# Inventário de Conteúdo (Fase 0)

Data: YYYY-MM-DD
Auditor: Equipe Conteúdo/PM

## Páginas/Seções

- Home (`src/pages/Index.tsx`)
  - Hero (`src/components/Hero.tsx`)
    - Título: “Conversas que viram negócios”
    - Subtítulo: “Um chatbot realmente humanizado que atende no WhatsApp, agenda, responde dúvidas e encaminha para o humano certo quando precisa. Rápido, educado e sempre no tom da sua marca.”
    - CTAs: “Testar no WhatsApp”; “Agendar demonstração”
    - Nota: Corrigir acentuação/encoding no arquivo (garbled chars).
  - SocialProof (`src/components/SocialProof.tsx`)
    - Conteúdo: revisar logos/claims.
  - HowItWorks (`src/components/HowItWorks.tsx`)
    - Conteúdo: passos e descrições.
  - Features (`src/components/Features.tsx`)
    - Cabeçalho: “Recursos que fazem a diferença”
    - Sub: “Tudo que você precisa para atendimento de alto nível”
    - Itens: Atendimento humanizado; Triage inteligente; Agendamento automático; WhatsApp oficial; Base de conhecimento; Handoff com contexto (todas com descrições — revisar acentuação).
  - Integrations (`src/components/Integrations.tsx`)
    - Conteúdo: provedores (Zenvia, 360Dialog, Twilio etc.).
  - UseCases (`src/components/UseCases.tsx`)
    - Conteúdo: segmentos e exemplos.
  - Pricing (`src/components/Pricing.tsx`)
    - Cabeçalho: “Planos e preços”; Sub: “Escolha o plano ideal…”
    - Planos: Start, Pro, Enterprise (features — corrigir acentuação).
    - CTA: “Começar agora”.
  - FAQ (`src/components/FAQ.tsx`)
    - Perguntas/Respostas: WhatsApp oficial, erros da IA, base de conteúdo, agendamento automático, sem programador, atendentes, LGPD, tempo de implantação (corrigir acentos).
  - FinalCTA (`src/components/FinalCTA.tsx`)
    - Título: “Pronto para dar escala ao seu atendimento?”
    - Sub: “Converse com nosso time ou agende uma demonstração de 15 minutos”.
    - CTAs: WhatsApp; Demonstração 15 min.
  - Footer (`src/components/Footer.tsx`)
    - Slogan: “Conversas que viram negócios. Atendimento humanizado com IA.”
    - Navegação: Recursos, Integrações, Casos de uso, Preços; Empresa: Sobre nós, Blog, Suporte, Contato; Contato: e‑mail, telefone, São Paulo — Brasil; Copyright; Políticas.

## Metadados

- `index.html`
  - `<title>`; `description`; OG/Twitter (corrigir acentos).
  - JSON‑LD `SoftwareApplication` OK.

## Assets

- Imagens públicas: `public/favicon.ico`, `public/placeholder.svg` (sem logos reais).
- OG Image: `/og-image.jpg` referenciado, arquivo não presente — criar.

## Branding

- Nome: humind.ia
- Tipografia: Google Fonts (Space Grotesk, Inter)
- Cores: definidas via CSS vars/Tailwind (ver `src/index.css` e `tailwind.config.ts`).

## Pendências/Notas

- Corrigir encoding/acentuação em vários componentes.
- Substituir placeholders (logos, OG image).
- Validar números/links (WhatsApp, Calendly, e-mail, telefone).
