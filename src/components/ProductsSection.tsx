import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

import paloxGrisJaune from "@/assets/products/palox-gris-jaune.jpg";
import paloxVert from "@/assets/products/palox-vert.jpg";
import caissesPlastique from "@/assets/products/caisses-plastique.jpg";
import caissesMini from "@/assets/products/caisses-mini.jpg";
import poubelle770 from "@/assets/products/poubelle-770l.jpg";

const products = [
  {
    image: paloxGrisJaune,
    title: "Palox Plastique — Parois pleines",
    desc: "Conteneur grand volume pour le stockage et le transport. Structure renforcée, résistante aux chocs et aux UV.",
    specs: [
      "Capacité : 690 litres",
      "Dimensions : 1200 × 1000 × 772 mm",
      "Poids : 38 kg",
      "Charge dynamique : 500 kg",
      "Charge gerbée : 5000 kg",
      "Température : -20°C / +50°C",
    ],
    colors: ["Gris", "Jaune"],
  },
  {
    image: paloxVert,
    title: "Palox Plastique — Parois ajourées",
    desc: "Version ventilée idéale pour les produits agricoles. Disponible avec roulettes pour une manutention facile.",
    specs: [
      "Capacité : 690 litres",
      "Dimensions : 1200 × 1000 × 772 mm",
      "Poids : 34,5 kg",
      "Charge dynamique : 500 kg",
      "Charge gerbée : 5000 kg",
      "Température : -20°C / +50°C",
    ],
    colors: ["Vert"],
  },
  {
    image: caissesPlastique,
    title: "Caisses en plastique",
    desc: "Gamme complète de caisses robustes pour la manutention professionnelle. Plusieurs tailles et usages disponibles.",
    specs: [
      "Caisse standard : 54 × 35 × 28,5 cm — 1,800 kg",
      "4 Carreaux : 50 × 30 × 12 cm — 0,800 kg",
      "Caisses pour dattes : 50 × 30 × 22 cm — 0,600 kg",
    ],
    colors: ["Bleu", "Jaune", "Vert", "Rouge", "Noir"],
  },
  {
    image: caissesMini,
    title: "Caisses Mini",
    desc: "Caisses compactes pour le conditionnement et la vente directe de fruits, dattes et produits frais.",
    specs: [
      "Mini 1 kg : 28 × 17 × 7 cm — 0,100 kg",
      "Mini 2 kg : 28 × 17 × 7 cm — 0,125 kg",
      "Mini 5 kg : 39 × 27,5 × 11 cm — 0,290 kg",
    ],
    colors: ["Bleu", "Jaune", "Vert", "Rouge", "Orange"],
  },
  {
    image: poubelle770,
    title: "Poubelle Plastique 770 L",
    desc: "Poubelle HDPE haute résistance par injection plastique. Conçue pour usage intensif en collectivités et zones industrielles.",
    specs: [
      "Dimensions cuve : 1130 × 1366 × 814 mm",
      "Dimensions avec roues : 1330 × 1366 × 814 mm",
      "Poids : 35 kg (structure renforcée)",
      "Résistante aux chocs et aux UV",
      "Compatible lève-conteneurs (EN 840)",
      "4 roues de 200 mm (2 avec frein)",
    ],
    colors: ["Vert", "Personnalisable"],
  },
];

const ProductsSection = () => {
  return (
    <section id="produits" className="py-24 bg-muted/50">
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

        <div className="space-y-12">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300`}
            >
              {/* Image */}
              <div className="lg:w-1/2 relative overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover min-h-[300px] lg:min-h-[420px]"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {p.title}
                </h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  {p.desc}
                </p>

                {/* Specs */}
                <div className="mb-5 space-y-1.5">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    Spécifications
                  </span>
                  <ul className="space-y-1">
                    {p.specs.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Colors */}
                <div className="mb-6">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    Couleurs disponibles
                  </span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {p.colors.map((c) => (
                      <span
                        key={c}
                        className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

                <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-fit">
                  <a href="#contact">Demander un devis</a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
