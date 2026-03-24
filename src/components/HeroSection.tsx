import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useT, translations } from "@/i18n/useT";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { t } = useT();
  const tr = translations.hero;

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/70 to-industrial-dark/80" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full bg-white/15 text-white/90 text-sm font-medium backdrop-blur-sm border border-white/20">
            {t(tr.badge)}
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            {t(tr.titleLine1)}
            <br />
            <span className="text-accent">{t(tr.titleLine2)}</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10">
            {t(tr.subtitle)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base font-semibold px-8">
              <a href="#produits">{t(tr.ctaProducts)}</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20 text-base px-8 font-semibold bg-white/10 backdrop-blur-sm">
              <a href="#contact">{t(tr.ctaContact)}</a>
            </Button>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
