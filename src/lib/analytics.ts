import { getCtaVariant } from "@/lib/experiments";

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    gtag: (...args: any[]) => void;
  }
}

let gaInitialized = false;

export const initGA = () => {
  if (gaInitialized) return;
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!id) return;
  try {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      // @ts-ignore
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag as any;
    gtag("js", new Date());
    gtag("config", id);

    const s = document.createElement("script");
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(s);
    gaInitialized = true;
  } catch (_) {}
};

export const trackPageview = (path: string) => {
  const id = import.meta.env.VITE_GA_MEASUREMENT_ID;
  if (!id || !window.gtag) return;
  window.gtag("config", id, { page_path: path });
};

export const trackEvent = (
  action: string,
  params?: { category?: string; label?: string; value?: number | string }
) => {
  if (!window.gtag) return;
  window.gtag("event", action, params || {});
};

// Basic delegated click tracking for primary CTAs
export const attachCTATracking = () => {
  if ((attachCTATracking as any)._bound) return;
  (attachCTATracking as any)._bound = true;
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const link = target?.closest?.("a") as HTMLAnchorElement | null;
    if (!link) return;
    const href = link.getAttribute("href") || "";
    const variant = getCtaVariant();
    if (/wa\.me\//.test(href)) {
      trackEvent("lead_whatsapp_click", { category: "cta", label: "auto", cta_variant: variant as any });
    } else if (/calendar\.google\.com\/calendar\//.test(href)) {
      trackEvent("lead_agendar_demo", { category: "cta", label: "auto", cta_variant: variant as any });
    }
  });
};
