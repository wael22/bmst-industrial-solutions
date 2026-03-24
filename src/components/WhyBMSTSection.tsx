import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Dumbbell, Award, Truck } from "lucide-react";
import { useT, translations } from "@/i18n/useT";

const WhyBMSTSection = () => {
  const { t } = useT();
  const tr = translations.why;

  const reasons = [
    { icon: MapPin, title: t(tr.items.tunisian.title), desc: t(tr.items.tunisian.desc) },
    { icon: ShieldCheck, title: t(tr.items.warranty.title), desc: t(tr.items.warranty.desc) },
    { icon: Dumbbell, title: t(tr.items.resistance.title), desc: t(tr.items.resistance.desc) },
    { icon: Award, title: t(tr.items.expertise.title), desc: t(tr.items.expertise.desc) },
    { icon: Truck, title: t(tr.items.delivery.title), desc: t(tr.items.delivery.desc) },
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display text-3xl md:text-4xl font-bold">
            {t(tr.title)}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((r, i) => (
            <motion.div key={r.title} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/15 hover:bg-white/15 transition-all duration-300">
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
