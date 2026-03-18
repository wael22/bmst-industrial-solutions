import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Package, Ruler, Weight, Thermometer, Layers } from "lucide-react";

import paloxGrisJaune from "@/assets/products/palox-gris-jaune.jpg";
import paloxVert from "@/assets/products/palox-vert.jpg";
import caissesPlastique from "@/assets/products/caisses-plastique.jpg";
import caissesMini from "@/assets/products/caisses-mini.jpg";
import poubelle770 from "@/assets/products/poubelle-770l.jpg";

const products = [
  {
    image: paloxGrisJaune,
    title: "Palox — Parois pleines",
    category: "Stockage & Transport",
    desc: "Conteneur grand volume pour le stockage et le transport. Structure renforcée, résistante aux chocs et aux UV.",
    highlights: [
      { icon: Package, label: "690 L" },
      { icon: Ruler, label: "1200 × 1000 × 772 mm" },
      { icon: Weight, label: "38 kg" },
      { icon: Layers, label: "5000 kg gerbé" },
      { icon: Thermometer, label: "-20°C / +50°C" },
    ],
    colors: ["Gris", "Jaune"],
  },
  {
    image: paloxVert,
    title: "Palox — Parois ajourées",
    category: "Agriculture",
    desc: "Version ventilée idéale pour les produits agricoles. Disponible avec roulettes pour une manutention facile.",
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
    image: caissesPlastique,
    title: "Caisses plastique",
    category: "Manutention",
    desc: "Gamme complète de caisses robustes pour la manutention professionnelle. Plusieurs tailles disponibles.",
    highlights: [
      { icon: Ruler, label: "54 × 35 × 28,5 cm" },
      { icon: Weight, label: "à partir de 0,6 kg" },
      { icon: Package, label: "3 formats" },
    ],
    colors: ["Bleu", "Jaune", "Vert", "Rouge", "Noir"],
  },
  {
    image: caissesMini,
    title: "Caisses Mini",
    category: "Conditionnement",
    desc: "Caisses compactes pour le conditionnement et la vente directe de fruits, dattes et produits frais.",
    highlights: [
      { icon: Package, label: "1 kg / 2 kg / 5 kg" },
      { icon: Ruler, label: "28 × 17 × 7 cm" },
      { icon: Weight, label: "à partir de 0,1 kg" },
    ],
    colors: ["Bleu", "Jaune", "Vert", "Rouge", "Orange"],
  },
  {
    image: poubelle770,
    title: "Poubelle 770 L",
    category: "Collectivités",
    desc: "Poubelle HDPE haute résistance par injection plastique. Usage intensif en collectivités et zones industrielles.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
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

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {p.desc}
                </p>

                {/* Specs grid */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {p.highlights.map((h) => (
                    <div
                      key={h.label}
                      className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/60 rounded-lg px-3 py-2"
                    >
                      <h.icon className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{h.label}</span>
                    </div>
                  ))}
                </div>

                {/* Colors */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.colors.map((c) => (
                    <span
                      key={c}
                      className="text-[11px] font-medium bg-accent/10 text-accent px-2.5 py-0.5 rounded-full"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-auto">
                  <Button
                    asChild
                    size="sm"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
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
