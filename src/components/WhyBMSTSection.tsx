import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Dumbbell, Award, Truck } from "lucide-react";

const reasons = [
  { icon: MapPin, title: "Produit tunisien 100%", desc: "Fabrication locale, fierté nationale" },
  { icon: ShieldCheck, title: "Garantie jusqu'à 3 ans", desc: "Confiance totale dans nos produits" },
  { icon: Dumbbell, title: "Haute résistance", desc: "Matériaux premium pour usage intensif" },
  { icon: Award, title: "Expertise industrielle", desc: "14 ans de savoir-faire éprouvé" },
  { icon: Truck, title: "Livraison rapide", desc: "Disponibilité et réactivité garanties" },
];

const WhyBMSTSection = () => {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-bold"
          >
            Pourquoi choisir BMST ?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/15 hover:bg-white/15 transition-all duration-300"
            >
              <r.icon className="w-10 h-10 text-accent mx-auto mb-4" />
              <h3 className="font-display font-semibold text-sm mb-1">{r.title}</h3>
              <p className="text-white/70 text-xs">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBMSTSection;
