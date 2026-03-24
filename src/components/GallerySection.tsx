import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useT, translations } from "@/i18n/useT";

import caissesPalettes from "@/assets/gallery/caisses-palettes.jpg";
import paloxPeche from "@/assets/gallery/palox-peche.jpg";
import paloxJaune from "@/assets/gallery/palox-jaune.jpg";
import paloxStockage from "@/assets/gallery/palox-stockage.jpg";
import poubelleVerte from "@/assets/gallery/poubelle-verte.jpg";
import paloxRoulettes from "@/assets/gallery/palox-roulettes.jpg";

const galleryImages = [
  { id: 1, src: caissesPalettes, alt: "Caisses palettes pliables BMST" },
  { id: 2, src: paloxPeche, alt: "Palox plastique pour la pêche" },
  { id: 3, src: paloxJaune, alt: "Palox jaune pour l'industrie oléicole" },
  { id: 4, src: paloxStockage, alt: "Palox empilés pour stockage" },
  { id: 5, src: poubelleVerte, alt: "Poubelle 770L verte BMST" },
  { id: 6, src: paloxRoulettes, alt: "Palox plastique sur roulettes" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const currentImage = galleryImages.find((img) => img.id === lightbox);
  const { t } = useT();
  const tr = translations.gallery;

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm font-semibold text-accent uppercase tracking-wider">
            {t(tr.label)}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            {t(tr.title)}
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div key={img.id} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="aspect-[4/3] rounded-xl border border-border overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 group" onClick={() => setLightbox(img.id)}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </motion.div>
          ))}
        </div>
      </div>

      {lightbox !== null && currentImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-8" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 text-white/80 hover:text-white" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <img src={currentImage.src} alt={currentImage.alt} className="max-w-full max-h-[85vh] rounded-xl object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
