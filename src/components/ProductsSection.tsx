import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Package, Box, Archive, Wrench } from "lucide-react";

const products = [
  {
    icon: Package,
    title: "Palox plastique",
    desc: "Conteneurs grand volume pour le stockage et le transport de produits agricoles et industriels. Résistants aux chocs et aux intempéries.",
    advantages: ["Grande capacité", "Résistance UV", "Empilable"],
  },
  {
    icon: Box,
    title: "Caisses industrielles",
    desc: "Caisses robustes conçues pour la manutention et le stockage intensif en environnement professionnel.",
    advantages: ["Multi-usages", "Haute durabilité", "Nettoyage facile"],
  },
  {
    icon: Archive,
    title: "Bacs de stockage",
    desc: "Solutions de rangement optimisées pour entrepôts, ateliers et lignes de production.",
    advantages: ["Modulaires", "Légers", "Conformes HACCP"],
  },
  {
    icon: Wrench,
    title: "Solutions sur mesure",
    desc: "Développement de produits plastiques personnalisés selon vos spécifications techniques et opérationnelles.",
    advantages: ["Design dédié", "Prototypage rapide", "Flexibilité totale"],
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
            Des solutions pour chaque besoin
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Placeholder image area */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <p.icon className="w-16 h-16 text-primary/40 group-hover:text-primary/60 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.advantages.map((a) => (
                    <span key={a} className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {a}
                    </span>
                  ))}
                </div>
                <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
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
