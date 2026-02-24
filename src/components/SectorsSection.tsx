import { motion } from "framer-motion";
import { Wheat, Fish, Factory, Truck, UtensilsCrossed } from "lucide-react";

const sectors = [
  { icon: Wheat, title: "Agriculture", desc: "Palox et caisses pour la récolte, le stockage et le transport de produits agricoles." },
  { icon: Fish, title: "Pêche", desc: "Bacs résistants à l'eau salée et aux conditions maritimes difficiles." },
  { icon: Factory, title: "Industrie", desc: "Solutions de manutention et stockage pour environnements industriels exigeants." },
  { icon: Truck, title: "Logistique", desc: "Conteneurs empilables et modulaires pour optimiser la chaîne logistique." },
  { icon: UtensilsCrossed, title: "Agroalimentaire", desc: "Produits conformes aux normes alimentaires pour la transformation et la distribution." },
];

const SectorsSection = () => {
  return (
    <section id="secteurs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-accent uppercase tracking-wider"
          >
            Secteurs d'activité
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3"
          >
            Au service de tous les professionnels
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {sectors.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
