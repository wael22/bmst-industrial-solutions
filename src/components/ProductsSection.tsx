import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Package, Ruler, Weight, Thermometer, Layers } from "lucide-react";
import { useT, translations } from "@/i18n/useT";

import paloxGris from "@/assets/products/palox-gris.jpg";
import paloxJaune from "@/assets/products/palox-jaune.jpg";
import paloxAjoure from "@/assets/products/palox-ajoure.jpg";
import paloxAjoureRoulettes from "@/assets/products/palox-ajoure-roulettes.jpg";
import caissePlastique from "@/assets/products/caisse-plastique.jpg";
import caisse4Carreaux from "@/assets/products/caisse-4carreaux.jpg";
import caisseDattes from "@/assets/products/caisse-dattes.jpg";
import mini2kg from "@/assets/products/mini-2kg.jpg";
import mini1kg from "@/assets/products/mini-1kg.jpg";
import mini5kg from "@/assets/products/mini-5kg.jpg";
import poubelle770 from "@/assets/products/poubelle-770l-clean.jpg";

const products = [
  {
    image: paloxGris, titleKey: "Palox — Parois pleines (Gris)", categoryKey: "stockage" as const,
    desc: { fr: "Conteneur grand volume à parois pleines. Structure renforcée, résistante aux chocs et aux UV.", en: "Large volume container with solid walls. Reinforced structure, resistant to shocks and UV.", ar: "حاوية كبيرة الحجم بجدران صلبة. هيكل معزز مقاوم للصدمات والأشعة فوق البنفسجية." },
    highlights: [{ icon: Package, label: "690 L" }, { icon: Ruler, label: "1200 × 1000 × 772 mm" }, { icon: Weight, label: "38 kg" }, { icon: Layers, label: "5000 kg" }, { icon: Thermometer, label: "-20°C / +50°C" }],
    colors: ["#808080"],
  },
  {
    image: paloxJaune, titleKey: "Palox — Parois pleines (Jaune)", categoryKey: "stockage" as const,
    desc: { fr: "Conteneur grand volume à parois pleines. Charge dynamique 500 kg, idéal pour le stockage intensif.", en: "Large volume solid-wall container. 500 kg dynamic load, ideal for intensive storage.", ar: "حاوية كبيرة بجدران صلبة. حمولة ديناميكية 500 كجم، مثالية للتخزين المكثف." },
    highlights: [{ icon: Package, label: "690 L" }, { icon: Ruler, label: "1200 × 1000 × 772 mm" }, { icon: Weight, label: "38 kg" }, { icon: Layers, label: "5000 kg" }, { icon: Thermometer, label: "-20°C / +50°C" }],
    colors: ["Jaune"],
  },
  {
    image: paloxAjoure, titleKey: "Palox — Parois ajourées", categoryKey: "agriculture" as const,
    desc: { fr: "Version ventilée pour produits agricoles. Parois ajourées pour une meilleure circulation d'air.", en: "Ventilated version for agricultural products. Perforated walls for better air circulation.", ar: "نسخة مهواة للمنتجات الزراعية. جدران مثقبة لتهوية أفضل." },
    highlights: [{ icon: Package, label: "690 L" }, { icon: Ruler, label: "1200 × 1000 × 772 mm" }, { icon: Weight, label: "34,5 kg" }, { icon: Layers, label: "5000 kg" }, { icon: Thermometer, label: "-20°C / +50°C" }],
    colors: ["Vert"],
  },
  {
    image: paloxAjoureRoulettes, titleKey: "Palox — Sur roulettes", categoryKey: "manutention" as const,
    desc: { fr: "Palox ajouré équipé de roulettes pour une manutention facile. Idéal pour les entrepôts.", en: "Perforated palox equipped with wheels for easy handling. Ideal for warehouses.", ar: "بالوكس مثقب مجهز بعجلات لسهولة المناولة. مثالي للمستودعات." },
    highlights: [{ icon: Package, label: "690 L" }, { icon: Ruler, label: "1200 × 1000 × 772 mm" }, { icon: Weight, label: "34,5 kg" }, { icon: Layers, label: "500 kg" }],
    colors: ["Vert"],
  },
  {
    image: caissePlastique, titleKey: "Caisse plastique", categoryKey: "manutention" as const,
    desc: { fr: "Caisse robuste pour la manutention professionnelle. Grande contenance et solidité.", en: "Robust crate for professional handling. Large capacity and solidity.", ar: "صندوق متين للمناولة المهنية. سعة كبيرة ومتانة." },
    highlights: [{ icon: Ruler, label: "54 × 35 × 28,5 cm" }, { icon: Weight, label: "1,8 kg" }],
    colors: ["#2980B9", "#F4D03F", "#27AE60", "#E74C3C"],
  },
  {
    image: caisse4Carreaux, titleKey: "Caisse 4 Carreaux", categoryKey: "agriculture" as const,
    desc: { fr: "Caisse basse ajourée, parfaite pour le transport de fruits et légumes frais.", en: "Low perforated crate, perfect for transporting fresh fruits and vegetables.", ar: "صندوق منخفض مثقب، مثالي لنقل الفواكه والخضروات الطازجة." },
    highlights: [{ icon: Ruler, label: "50 × 30 × 12 cm" }, { icon: Weight, label: "0,8 kg" }],
    colors: ["#2980B9", "#2C3E50", "#27AE60", "#E74C3C", "#F4D03F"],
  },
  {
    image: caisseDattes, titleKey: "Caisse pour dattes", categoryKey: "agroalimentaire" as const,
    desc: { fr: "Caisse spéciale pour le conditionnement et le transport des dattes.", en: "Special crate for packaging and transporting dates.", ar: "صندوق خاص لتعبئة ونقل التمور." },
    highlights: [{ icon: Ruler, label: "50 × 30 × 22 cm" }, { icon: Weight, label: "0,6 kg" }],
    colors: ["#2980B9", "#27AE60", "#F4D03F"],
  },
  {
    image: mini2kg, titleKey: "Mini 2 kg", categoryKey: "conditionnement" as const,
    desc: { fr: "Caissette compacte pour la vente directe de fruits, dattes et produits frais.", en: "Compact crate for direct sale of fruits, dates and fresh products.", ar: "صندوق صغير للبيع المباشر للفواكه والتمور والمنتجات الطازجة." },
    highlights: [{ icon: Ruler, label: "28 × 17 × 7 cm" }, { icon: Weight, label: "0,125 kg" }],
    colors: ["#2980B9", "#F4D03F", "#27AE60", "#E74C3C", "#E67E22"],
  },
  {
    image: mini1kg, titleKey: "Mini 1 kg", categoryKey: "conditionnement" as const,
    desc: { fr: "Plus petite caissette pour portions individuelles et vente au détail.", en: "Smallest crate for individual portions and retail sale.", ar: "أصغر صندوق للحصص الفردية والبيع بالتجزئة." },
    highlights: [{ icon: Ruler, label: "28 × 17 × 7 cm" }, { icon: Weight, label: "0,1 kg" }],
    colors: ["Jaune"],
  },
  {
    image: mini5kg, titleKey: "Mini 5 kg", categoryKey: "conditionnement" as const,
    desc: { fr: "Caissette moyenne pour le conditionnement en gros de fruits et produits frais.", en: "Medium crate for bulk packaging of fruits and fresh products.", ar: "صندوق متوسط لتعبئة الفواكه والمنتجات الطازجة بالجملة." },
    highlights: [{ icon: Ruler, label: "39 × 27,5 × 11 cm" }, { icon: Weight, label: "0,29 kg" }],
    colors: ["#27AE60", "#F4D03F"],
  },
  {
    image: poubelle770, titleKey: "Poubelle 770 L", categoryKey: "collectivites" as const,
    desc: { fr: "Poubelle HDPE haute résistance par injection plastique. Compatible lève-conteneurs normalisés EN 840.", en: "High-resistance HDPE bin by plastic injection. Compatible with EN 840 standardized container lifters.", ar: "حاوية HDPE عالية المقاومة بالحقن البلاستيكي. متوافقة مع رافعات الحاويات المعيارية EN 840." },
    highlights: [{ icon: Package, label: "770 L" }, { icon: Ruler, label: "1330 × 1366 × 814 mm" }, { icon: Weight, label: "35 kg" }, { icon: Layers, label: "EN 840" }],
    colors: ["#27AE60"],
  },
];

const ProductsSection = () => {
  const { t } = useT();
  const tr = translations.products;

  return (
    <section id="produits" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm font-semibold text-accent uppercase tracking-wider">
            {t(tr.label)}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            {t(tr.title)}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t(tr.subtitle)}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <motion.div
              key={p.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img src={p.image} alt={p.titleKey} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <span className="absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wider bg-primary text-primary-foreground px-3 py-1 rounded-full">
                  {t(tr.categories[p.categoryKey])}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-lg font-bold text-foreground mb-1.5">{p.titleKey}</h3>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{t(p.desc)}</p>

                <div className="grid grid-cols-2 gap-1.5 mb-3">
                  {p.highlights.map((h) => (
                    <div key={h.label} className="flex items-center gap-1.5 text-[11px] text-muted-foreground bg-muted/60 rounded-lg px-2.5 py-1.5">
                      <h.icon className="w-3 h-3 text-primary shrink-0" />
                      <span>{h.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.colors.map((c) => (
                    <span key={c} className="w-5 h-5 rounded-full border border-border shadow-sm" style={{ backgroundColor: c }} title={c} />
                  ))}
                </div>

                <div className="mt-auto">
                  <Button asChild size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-xs">
                    <a href="#contact">{t(tr.cta)}</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
