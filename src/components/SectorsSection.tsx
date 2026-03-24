import { motion } from "framer-motion";
import { Wheat, Fish, Factory, Truck, UtensilsCrossed } from "lucide-react";
import { useT, translations } from "@/i18n/useT";

const SectorsSection = () => {
  const { t } = useT();
  const tr = translations.sectors;

  const sectors = [
    { icon: Wheat, title: t(tr.items.agriculture.title), desc: t(tr.items.agriculture.desc) },
    { icon: Fish, title: t(tr.items.fishing.title), desc: t(tr.items.fishing.desc) },
    { icon: Factory, title: t(tr.items.industry.title), desc: t(tr.items.industry.desc) },
    { icon: Truck, title: t(tr.items.logistics.title), desc: t(tr.items.logistics.desc) },
    { icon: UtensilsCrossed, title: t(tr.items.food.title), desc: t(tr.items.food.desc) },
  ];

  return (
    <section id="secteurs" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm font-semibold text-accent uppercase tracking-wider">
            {t(tr.label)}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            {t(tr.title)}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {sectors.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }} className="bg-card rounded-xl border border-border p-6 text-center hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
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
