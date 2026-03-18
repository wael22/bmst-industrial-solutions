import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Package, Ruler, Weight, Thermometer, Layers } from "lucide-react";

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
    image: paloxGris,
    title: "Palox — Parois pleines (Gris)",
    category: "Stockage & Transport",
    desc: "Conteneur grand volume à parois pleines. Structure renforcée, résistante aux chocs et aux UV.",
    highlights: [
      { icon: Package, label: "690 L" },
      { icon: Ruler, label: "1200 × 1000 × 772 mm" },
      { icon: Weight, label: "38 kg" },
      { icon: Layers, label: "5000 kg gerbé" },
      { icon: Thermometer, label: "-20°C / +50°C" },
    ],
    colors: ["Gris"],
  },
  {
    image: paloxJaune,
    title: "Palox — Parois pleines (Jaune)",
    category: "Stockage & Transport",
    desc: "Conteneur grand volume à parois pleines. Charge dynamique 500 kg, idéal pour le stockage intensif.",
    highlights: [
      { icon: Package, label: "690 L" },
      { icon: Ruler, label: "1200 × 1000 × 772 mm" },
      { icon: Weight, label: "38 kg" },
      { icon: Layers, label: "5000 kg gerbé" },
      { icon: Thermometer, label: "-20°C / +50°C" },
    ],
    colors: ["Jaune"],
  },
  {
    image: paloxAjoure,
    title: "Palox — Parois ajourées",
    category: "Agriculture",
    desc: "Version ventilée pour produits agricoles. Parois ajourées pour une meilleure circulation d'air.",
    highlights: [
      { icon: Package, label: "690 L" },
      { icon: Ruler, label: "1200 × 1000 × 772 mm" },
      { icon: Weight, label: "34,5 kg" },
      { icon: Layers, label: "5000 kg gerbé" },
      { icon: Thermometer, label: "-20°C / +50°C" },
    ],
    colors: ["Vert"],
  },
  {
    image: paloxAjoureRoulettes,
    title: "Palox — Sur roulettes",
    category: "Manutention",
    desc: "Palox ajouré équipé de roulettes pour une manutention facile. Idéal pour les entrepôts.",
    highlights: [
      { icon: Package, label: "690 L" },
      { icon: Ruler, label: "1200 × 1000 × 772 mm" },
      { icon: Weight, label: "34,5 kg" },
      { icon: Layers, label: "500 kg dynamique" },
    ],
    colors: ["Vert"],
  },
  {
    image: caissePlastique,
    title: "Caisse plastique",
    category: "Manutention",
    desc: "Caisse robuste pour la manutention professionnelle. Grande contenance et solidité.",
    highlights: [
      { icon: Ruler, label: "54 × 35 × 28,5 cm" },
      { icon: Weight, label: "1,8 kg" },
    ],
    colors: ["Bleu", "Jaune", "Vert", "Rouge"],
  },
  {
    image: caisse4Carreaux,
    title: "Caisse 4 Carreaux",
    category: "Agriculture",
    desc: "Caisse basse ajourée, parfaite pour le transport de fruits et légumes frais.",
    highlights: [
      { icon: Ruler, label: "50 × 30 × 12 cm" },
      { icon: Weight, label: "0,8 kg" },
    ],
    colors: ["Bleu", "Noir", "Vert", "Rouge", "Jaune"],
  },
  {
    image: caisseDattes,
    title: "Caisse pour dattes",
    category: "Agroalimentaire",
    desc: "Caisse spéciale pour le conditionnement et le transport des dattes.",
    highlights: [
      { icon: Ruler, label: "50 × 30 × 22 cm" },
      { icon: Weight, label: "0,6 kg" },
    ],
    colors: ["Bleu", "Vert", "Jaune"],
  },
  {
    image: mini2kg,
    title: "Mini 2 kg",
    category: "Conditionnement",
    desc: "Caissette compacte pour la vente directe de fruits, dattes et produits frais.",
    highlights: [
      { icon: Ruler, label: "28 × 17 × 7 cm" },
      { icon: Weight, label: "0,125 kg" },
    ],
    colors: ["Bleu", "Jaune", "Vert", "Rouge", "Orange"],
  },
  {
    image: mini1kg,
    title: "Mini 1 kg",
    category: "Conditionnement",
    desc: "Plus petite caissette pour portions individuelles et vente au détail.",
    highlights: [
      { icon: Ruler, label: "28 × 17 × 7 cm" },
      { icon: Weight, label: "0,1 kg" },
    ],
    colors: ["Jaune"],
  },
  {
    image: mini5kg,
    title: "Mini 5 kg",
    category: "Conditionnement",
    desc: "Caissette moyenne pour le conditionnement en gros de fruits et produits frais.",
    highlights: [
      { icon: Ruler, label: "39 × 27,5 × 11 cm" },
      { icon: Weight, label: "0,29 kg" },
    ],
    colors: ["Vert", "Jaune"],
  },
  {
    image: poubelle770,
    title: "Poubelle 770 L",
    category: "Collectivités",
    desc: "Poubelle HDPE haute résistance par injection plastique. Compatible lève-conteneurs normalisés EN 840.",
    highlights: [
      { icon: Package, label: "770 L" },
      { icon: Ruler, label: "1330 × 1366 × 814 mm" },
      { icon: Weight, label: "35 kg" },
      { icon: Layers, label: "Norme EN 840" },
    ],
    colors: ["Vert", "Personnalisable"],
  },
];

const ProductsSection = () => {
  return (
    <section id="produits" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-accent uppercase tracking-wider"
          >
            Nos produits
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3"
          >
            L'essentiel de nos produits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground mt-4 max-w-2xl mx-auto"
          >
            14 ans d'expérience dans l'industrie plastique — des solutions robustes et fiables pour chaque besoin professionnel.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wider bg-primary text-primary-foreground px-3 py-1 rounded-full">
                  {p.category}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-lg font-bold text-foreground mb-1.5">
                  {p.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                  {p.desc}
                </p>

                <div className="grid grid-cols-2 gap-1.5 mb-3">
                  {p.highlights.map((h) => (
                    <div
                      key={h.label}
                      className="flex items-center gap-1.5 text-[11px] text-muted-foreground bg-muted/60 rounded-lg px-2.5 py-1.5"
                    >
                      <h.icon className="w-3 h-3 text-primary shrink-0" />
                      <span>{h.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {p.colors.map((c) => (
                    <span
                      key={c}
                      className="text-[10px] font-medium bg-accent/10 text-accent px-2 py-0.5 rounded-full"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-xs"
                  >
                    <a href="#contact">Demander un devis</a>
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
