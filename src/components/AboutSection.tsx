import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Handshake, HeadphonesIcon } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "Recherche continue de solutions plastiques avancées" },
  { icon: ShieldCheck, title: "Qualité industrielle", desc: "Standards rigoureux à chaque étape de fabrication" },
  { icon: Handshake, title: "Fiabilité", desc: "Des produits qui résistent aux conditions les plus exigeantes" },
  { icon: HeadphonesIcon, title: "Service client", desc: "Accompagnement personnalisé et réactif" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const AboutSection = () => {
  return (
    <section id="a-propos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-accent uppercase tracking-wider"
          >
            À propos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6"
          >
            BMST — L'excellence plastique tunisienne
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Filiale de YassinePlast, BMST capitalise sur <strong className="text-foreground">14 ans d'expérience</strong> dans
            la fabrication de produits plastiques industriels. 100% tunisienne, notre entreprise s'engage pour la qualité,
            la durabilité et l'innovation au service des professionnels.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-xl p-8 text-center border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
            >
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
