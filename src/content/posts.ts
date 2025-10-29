export type Post = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  content: string; // simple HTML/markdown-like string for now
};

export const posts: Post[] = [
  {
    slug: "chatbot-whatsapp-agendar-servicos",
    title: "Como usar chatbot WhatsApp para agendar serviços",
    date: "2025-01-10",
    excerpt: "Práticas para reduzir no-shows e ganhar velocidade no agendamento.",
    content:
      "<p>Neste artigo, cobrimos estratégias para configurar fluxos de agendamento no WhatsApp, confirmação automática e lembretes para reduzir faltas.</p>",
  },
  {
    slug: "erros-atendimento-que-custam-vendas",
    title: "5 erros no atendimento que custam vendas",
    date: "2025-01-05",
    excerpt: "Erros comuns e como evitá-los com um fluxo inteligente.",
    content:
      "<p>Do tempo de resposta ao handoff tardio — veja como mitigar os principais erros e aumentar sua taxa de conversão.</p>",
  },
];

