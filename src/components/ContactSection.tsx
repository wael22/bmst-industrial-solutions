import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useT, translations } from "@/i18n/useT";

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useT();
  const tr = translations.contact;
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: t(tr.form.success), description: t(tr.form.successDesc) });
    setForm({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm font-semibold text-accent uppercase tracking-wider">
            {t(tr.label)}
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-display text-3xl md:text-4xl font-bold text-foreground mt-3">
            {t(tr.title)}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-foreground">{t(tr.address)}</p>
                <p className="text-muted-foreground text-sm">Bir Amich, Cité El Fadhline, Teboulba, Tunisie 5080</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-foreground">{t(tr.phone)}</p>
                <p className="text-muted-foreground text-sm">+216 46 998 888</p>
                <p className="text-muted-foreground text-sm">+216 46 990 990</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-foreground">{t(tr.email)}</p>
                <p className="text-muted-foreground text-sm">commercial@bmst.tn</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Globe className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="font-semibold text-foreground">{t(tr.website)}</p>
                <p className="text-muted-foreground text-sm">www.bmst.tn</p>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-border mt-6">
              <iframe
                title="BMST Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25832.74!2d10.95!3d35.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x130275c7e3b9a1bf%3A0x3b!2sTeboulba!5e0!3m2!1sfr!2stn!4v1700000000000"
                className="w-full h-56"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>

          <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-card rounded-xl border border-border p-8 space-y-5">
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t(tr.form.name)}</label>
              <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder={t(tr.form.namePlaceholder)} required />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t(tr.form.phone)}</label>
              <Input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+216 XX XXX XXX" type="tel" />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t(tr.form.email)}</label>
              <Input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="votre@email.com" type="email" required />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-1.5 block">{t(tr.form.message)}</label>
              <Textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder={t(tr.form.messagePlaceholder)} rows={4} required />
            </div>
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              {t(tr.form.submit)}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
