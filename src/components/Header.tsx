import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import { useT, translations } from "@/i18n/useT";
import type { Lang } from "@/i18n/translations";

const langOptions: { code: Lang; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
  { code: "ar", label: "عربي" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const { t } = useT();
  const tr = translations.nav;

  const navLinks = [
    { label: t(tr.home), href: "#accueil" },
    { label: t(tr.products), href: "#produits" },
    { label: t(tr.about), href: "#a-propos" },
    { label: t(tr.sectors), href: "#secteurs" },
    { label: t(tr.contact), href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#accueil" className="font-display text-2xl font-bold text-primary tracking-tight">
          BMST
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Language switcher */}
          <div className="flex items-center gap-1 border border-border rounded-full px-1 py-0.5">
            {langOptions.map((opt) => (
              <button
                key={opt.code}
                onClick={() => setLang(opt.code)}
                className={`text-xs font-semibold px-2.5 py-1 rounded-full transition-colors ${
                  lang === opt.code
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <a href="#contact">{t(tr.cta)}</a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <div className="flex items-center gap-0.5 border border-border rounded-full px-1 py-0.5">
            {langOptions.map((opt) => (
              <button
                key={opt.code}
                onClick={() => setLang(opt.code)}
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full transition-colors ${
                  lang === opt.code
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <button
            className="text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-card border-b border-border px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <a href="#contact" onClick={() => setMobileOpen(false)}>{t(tr.cta)}</a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
