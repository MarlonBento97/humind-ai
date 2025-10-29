import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const STORAGE_KEY = "theme";

const DayNightToggle = () => {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light") {
      document.body.classList.add("light");
      setLight(true);
    }
  }, []);

  const onChange = () => {
    document.body.classList.add("toggle");
    setTimeout(() => {
      document.body.classList.toggle("light");
      const isLight = document.body.classList.contains("light");
      setLight(isLight);
      localStorage.setItem(STORAGE_KEY, isLight ? "light" : "dark");
      setTimeout(() => document.body.classList.remove("toggle"), 10);
    }, 5);
  };

  return (
    <div
      className="fixed z-[9998] right-4 bottom-4 md:top-4 md:bottom-auto inline-flex items-center gap-2 px-3 py-2 rounded-full border border-border bg-card hover:border-primary/50 hover-lift"
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      <span className="sr-only">Alternar tema</span>
      <button
        onClick={onChange}
        aria-label="Alternar tema claro/escuro"
        className="inline-flex items-center gap-2 text-sm"
      >
        {light ? (
          <Sun className="w-4 h-4 text-primary" />
        ) : (
          <Moon className="w-4 h-4 text-primary" />
        )}
        <span className="text-muted-foreground">{light ? "Claro" : "Escuro"}</span>
      </button>
    </div>
  );
};

export default DayNightToggle;

