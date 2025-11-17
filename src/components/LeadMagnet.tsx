import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";
const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return;
    try {
      const webhook = import.meta.env.VITE_LEAD_WEBHOOK_URL;
      if (webhook) {
        await fetch(webhook, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            source: "lead_magnet",
            ts: Date.now()
          })
        });
      } else {
        // Placeholder: integrate com CRM/ESP/GTM
        localStorage.setItem("lead_magnet_email", email);
      }
      trackEvent("lead_magnet_submit", {
        category: "lead",
        label: "ebook"
      });
      setSent(true);
    } catch (_) {}
  };
  return <section className="py-24 bg-card/30 backdrop-blur-sm">
      
    </section>;
};
export default LeadMagnet;