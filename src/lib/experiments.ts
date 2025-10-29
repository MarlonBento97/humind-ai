const STORAGE_KEY = "exp_cta_variant";

export type Variant = "A" | "B";

export function getCtaVariant(): Variant {
  try {
    const url = new URL(window.location.href);
    const qp = url.searchParams.get("exp_cta");
    if (qp === "A" || qp === "B") {
      localStorage.setItem(STORAGE_KEY, qp);
      return qp;
    }
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "A" || stored === "B") return stored;
    const variant: Variant = Math.random() < 0.5 ? "A" : "B";
    localStorage.setItem(STORAGE_KEY, variant);
    return variant;
  } catch {
    return "A";
  }
}

export function describeCtaVariant(v: Variant) {
  // Example mapping for CTA experiments
  // A: texto padrão; B: copy alternativa
  return v === "A" ? "Agende conversa no WhatsApp" : "Falar com especialista";
}

