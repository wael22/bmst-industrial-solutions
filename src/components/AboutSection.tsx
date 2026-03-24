import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Handshake, HeadphonesIcon } from "lucide-react";
import { useT, translations } from "@/i18n/useT";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const AboutSection = () => {
  const { t } = useT();
  const tr = translations.about;

  const values = [
    { icon: Lightbulb, ...{ title: t(tr.values.innovation.title), desc: t(tr.values.innovation.desc) } },
    { icon: ShieldCheck, ...{ title: t(tr.values.quality.title), desc: t(tr.values.quality.desc) } },
    { icon: Handshake, ...{ title: t(tr.values.reliability.title), desc: t(tr.values.reliability.desc) } },
    { icon: HeadphonesIcon, ...{ title: t(tr.values.service.title), desc: t(tr.values.service.desc) } },
  ];

  return (
    <section id="a-propos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm font-semibold text-accent uppercase tracking-wider">
            {t(tr.label)}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
            {t(tr.title)}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t(tr.desc) }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div key={v.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-card rounded-xl p-8 text-center border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <v.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
