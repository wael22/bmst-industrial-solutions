import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { useT, translations } from "@/i18n/useT";

const Footer = () => {
  const { t } = useT();
  const tr = translations.footer;
  const nav = translations.nav;

  const links = [
    { label: t(nav.home), href: "#accueil" },
    { label: t(nav.products), href: "#produits" },
    { label: t(nav.about), href: "#a-propos" },
    { label: t(nav.sectors), href: "#secteurs" },
    { label: t(nav.contact), href: "#contact" },
  ];

  return (
    <footer className="bg-industrial-dark text-white/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-4">BMST</h3>
            <p className="text-white/60 text-sm leading-relaxed">{t(tr.desc)}</p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">{t(tr.quickLinks)}</h4>
            <ul className="space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-accent transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">{t(tr.contact)}</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Teboulba, Tunisie 5080</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>+216 46 998 888</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>commercial@bmst.tn</span>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} BMST — {t(tr.rights)}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
