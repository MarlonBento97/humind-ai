import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Inject external widgets only outside staging
function injectExternalWidgets() {
  const env = import.meta.env.VITE_ENV || import.meta.env.MODE;
  if (env === "staging") return;
  try {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://w.app/widget-v1/br3fem.js";
    document.head.appendChild(script);
  } catch (e) {
    // no-op
  }
}

injectExternalWidgets();

// Hotjar (mapa de calor) - ativado se VITE_HOTJAR_ID e VITE_HOTJAR_SV estiverem definidos
function injectHotjar() {
  const env = import.meta.env.VITE_ENV || import.meta.env.MODE;
  if (env === "staging") return;
  const hjid = import.meta.env.VITE_HOTJAR_ID as string | undefined;
  const hjsv = import.meta.env.VITE_HOTJAR_SV as string | undefined;
  if (!hjid || !hjsv) return;
  try {
    (function(h: any, o: any, t: any, j: any, a?: any, r?: any) {
      // eslint-disable-next-line
      // @ts-ignore
      h.hj = h.hj || function() { (h.hj.q = h.hj.q || []).push(arguments) };
      h._hjSettings = { hjid: Number(hjid), hjsv: Number(hjsv) };
      a = o.getElementsByTagName('head')[0];
      r = o.createElement('script'); r.async = 1; r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
      a.appendChild(r);
    })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
  } catch (_) {}
}

injectHotjar();

createRoot(document.getElementById("root")!).render(<App />);
