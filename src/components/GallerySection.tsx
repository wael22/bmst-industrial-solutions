import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const placeholders = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  label: `Photo ${i + 1}`,
}));

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-accent uppercase tracking-wider"
          >
            Galerie
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3"
          >
            Nos réalisations
          </motion.h2>
          <p className="text-muted-foreground mt-4 text-sm">
            Espaces réservés — uploadez vos images réelles via le chat pour les remplacer.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {placeholders.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl border border-border flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300 group"
              onClick={() => setLightbox(p.id)}
            >
              <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                {p.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-8"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>
          <div className="bg-card rounded-xl w-full max-w-2xl aspect-[4/3] flex items-center justify-center">
            <span className="text-muted-foreground">Photo {lightbox}</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
