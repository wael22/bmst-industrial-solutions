export type Lang = "fr" | "en" | "ar";

export const translations = {
  // Header & Nav
  nav: {
    home: { fr: "Accueil", en: "Home", ar: "الرئيسية" },
    products: { fr: "Produits", en: "Products", ar: "المنتجات" },
    about: { fr: "À propos", en: "About", ar: "من نحن" },
    sectors: { fr: "Secteurs", en: "Sectors", ar: "القطاعات" },
    contact: { fr: "Contact", en: "Contact", ar: "اتصل بنا" },
    cta: { fr: "Demander un devis", en: "Request a quote", ar: "طلب عرض أسعار" },
  },

  // Hero
  hero: {
    badge: { fr: "Le nouveau né de YassinePlast", en: "The new brand of YassinePlast", ar: "العلامة الجديدة لياسين بلاست" },
    titleLine1: { fr: "BMST — Solutions plastiques", en: "BMST — Industrial plastic", ar: "BMST — حلول بلاستيكية" },
    titleLine2: { fr: "industrielles fiables", en: "solutions you can trust", ar: "صناعية موثوقة" },
    subtitle: {
      fr: "14 ans d'expertise au service des professionnels. Fabrication tunisienne 100% de produits plastiques robustes et durables.",
      en: "14 years of expertise serving professionals. 100% Tunisian manufacturing of robust and durable plastic products.",
      ar: "14 سنة من الخبرة في خدمة المحترفين. تصنيع تونسي 100% لمنتجات بلاستيكية متينة وقوية.",
    },
    ctaProducts: { fr: "Découvrir nos produits", en: "Discover our products", ar: "اكتشف منتجاتنا" },
    ctaContact: { fr: "Nous contacter", en: "Contact us", ar: "اتصل بنا" },
  },

  // About
  about: {
    label: { fr: "À propos", en: "About us", ar: "من نحن" },
    title: { fr: "BMST — L'excellence plastique tunisienne", en: "BMST — Tunisian plastic excellence", ar: "BMST — التميّز البلاستيكي التونسي" },
    desc: {
      fr: "Filiale de YassinePlast, BMST capitalise sur <strong>14 ans d'expérience</strong> dans la fabrication de produits plastiques industriels. 100% tunisienne, notre entreprise s'engage pour la qualité, la durabilité et l'innovation au service des professionnels.",
      en: "A subsidiary of YassinePlast, BMST capitalizes on <strong>14 years of experience</strong> in industrial plastic manufacturing. 100% Tunisian, our company is committed to quality, durability and innovation for professionals.",
      ar: "فرع من ياسين بلاست، تستفيد BMST من <strong>14 سنة من الخبرة</strong> في تصنيع المنتجات البلاستيكية الصناعية. شركة تونسية 100%، ملتزمة بالجودة والمتانة والابتكار لخدمة المحترفين.",
    },
    values: {
      innovation: { title: { fr: "Innovation", en: "Innovation", ar: "الابتكار" }, desc: { fr: "Recherche continue de solutions plastiques avancées", en: "Continuous research for advanced plastic solutions", ar: "بحث مستمر عن حلول بلاستيكية متطورة" } },
      quality: { title: { fr: "Qualité industrielle", en: "Industrial quality", ar: "جودة صناعية" }, desc: { fr: "Standards rigoureux à chaque étape de fabrication", en: "Rigorous standards at every manufacturing stage", ar: "معايير صارمة في كل مرحلة من مراحل التصنيع" } },
      reliability: { title: { fr: "Fiabilité", en: "Reliability", ar: "الموثوقية" }, desc: { fr: "Des produits qui résistent aux conditions les plus exigeantes", en: "Products that withstand the most demanding conditions", ar: "منتجات تقاوم أقسى الظروف" } },
      service: { title: { fr: "Service client", en: "Customer service", ar: "خدمة العملاء" }, desc: { fr: "Accompagnement personnalisé et réactif", en: "Personalized and responsive support", ar: "دعم شخصي وسريع الاستجابة" } },
    },
  },

  // Products
  products: {
    label: { fr: "Nos produits", en: "Our products", ar: "منتجاتنا" },
    title: { fr: "L'essentiel de nos produits", en: "Our product range", ar: "مجموعة منتجاتنا" },
    subtitle: {
      fr: "14 ans d'expérience dans l'industrie plastique — des solutions robustes et fiables pour chaque besoin professionnel.",
      en: "14 years of experience in the plastic industry — robust and reliable solutions for every professional need.",
      ar: "14 سنة من الخبرة في صناعة البلاستيك — حلول متينة وموثوقة لكل احتياج مهني.",
    },
    cta: { fr: "Demander un devis", en: "Request a quote", ar: "طلب عرض أسعار" },
    categories: {
      stockage: { fr: "Stockage & Transport", en: "Storage & Transport", ar: "التخزين والنقل" },
      agriculture: { fr: "Agriculture", en: "Agriculture", ar: "الفلاحة" },
      manutention: { fr: "Manutention", en: "Handling", ar: "المناولة" },
      conditionnement: { fr: "Conditionnement", en: "Packaging", ar: "التعبئة" },
      agroalimentaire: { fr: "Agroalimentaire", en: "Food industry", ar: "الصناعات الغذائية" },
      collectivites: { fr: "Collectivités", en: "Communities", ar: "الجماعات" },
    },
  },

  // Sectors
  sectors: {
    label: { fr: "Secteurs d'activité", en: "Business sectors", ar: "قطاعات النشاط" },
    title: { fr: "Au service de tous les professionnels", en: "Serving all professionals", ar: "في خدمة جميع المحترفين" },
    items: {
      agriculture: { title: { fr: "Agriculture", en: "Agriculture", ar: "الفلاحة" }, desc: { fr: "Palox et caisses pour la récolte, le stockage et le transport de produits agricoles.", en: "Palox and crates for harvesting, storing and transporting agricultural products.", ar: "صناديق بالوكس وأقفاص لحصاد وتخزين ونقل المنتجات الزراعية." } },
      fishing: { title: { fr: "Pêche", en: "Fishing", ar: "الصيد البحري" }, desc: { fr: "Bacs résistants à l'eau salée et aux conditions maritimes difficiles.", en: "Bins resistant to salt water and harsh maritime conditions.", ar: "حاويات مقاومة للمياه المالحة والظروف البحرية القاسية." } },
      industry: { title: { fr: "Industrie", en: "Industry", ar: "الصناعة" }, desc: { fr: "Solutions de manutention et stockage pour environnements industriels exigeants.", en: "Handling and storage solutions for demanding industrial environments.", ar: "حلول مناولة وتخزين للبيئات الصناعية المتطلبة." } },
      logistics: { title: { fr: "Logistique", en: "Logistics", ar: "اللوجستيك" }, desc: { fr: "Conteneurs empilables et modulaires pour optimiser la chaîne logistique.", en: "Stackable and modular containers to optimize the supply chain.", ar: "حاويات قابلة للتكديس ومعيارية لتحسين سلسلة التوريد." } },
      food: { title: { fr: "Agroalimentaire", en: "Food industry", ar: "الصناعات الغذائية" }, desc: { fr: "Produits conformes aux normes alimentaires pour la transformation et la distribution.", en: "Food-grade products for processing and distribution.", ar: "منتجات مطابقة لمعايير الغذاء للتحويل والتوزيع." } },
    },
  },

  // Why BMST
  why: {
    title: { fr: "Pourquoi choisir BMST ?", en: "Why choose BMST?", ar: "لماذا تختار BMST؟" },
    items: {
      tunisian: { title: { fr: "Produit tunisien 100%", en: "100% Tunisian product", ar: "منتج تونسي 100%" }, desc: { fr: "Fabrication locale, fierté nationale", en: "Local manufacturing, national pride", ar: "تصنيع محلي، فخر وطني" } },
      warranty: { title: { fr: "Garantie jusqu'à 3 ans", en: "Up to 3-year warranty", ar: "ضمان حتى 3 سنوات" }, desc: { fr: "Confiance totale dans nos produits", en: "Total confidence in our products", ar: "ثقة تامة في منتجاتنا" } },
      resistance: { title: { fr: "Haute résistance", en: "High resistance", ar: "مقاومة عالية" }, desc: { fr: "Matériaux premium pour usage intensif", en: "Premium materials for intensive use", ar: "مواد عالية الجودة للاستخدام المكثف" } },
      expertise: { title: { fr: "Expertise industrielle", en: "Industrial expertise", ar: "خبرة صناعية" }, desc: { fr: "14 ans de savoir-faire éprouvé", en: "14 years of proven know-how", ar: "14 سنة من الخبرة المثبتة" } },
      delivery: { title: { fr: "Livraison rapide", en: "Fast delivery", ar: "توصيل سريع" }, desc: { fr: "Disponibilité et réactivité garanties", en: "Guaranteed availability and responsiveness", ar: "توفر واستجابة مضمونة" } },
    },
  },

  // Gallery
  gallery: {
    label: { fr: "Galerie", en: "Gallery", ar: "معرض الصور" },
    title: { fr: "Nos réalisations", en: "Our achievements", ar: "إنجازاتنا" },
  },

  // Contact
  contact: {
    label: { fr: "Contact", en: "Contact", ar: "اتصل بنا" },
    title: { fr: "Parlons de votre projet", en: "Let's talk about your project", ar: "لنتحدث عن مشروعك" },
    address: { fr: "Adresse", en: "Address", ar: "العنوان" },
    phone: { fr: "Téléphone", en: "Phone", ar: "الهاتف" },
    email: { fr: "Email", en: "Email", ar: "البريد الإلكتروني" },
    website: { fr: "Site web", en: "Website", ar: "الموقع الإلكتروني" },
    form: {
      name: { fr: "Nom complet", en: "Full name", ar: "الاسم الكامل" },
      namePlaceholder: { fr: "Votre nom", en: "Your name", ar: "اسمك" },
      phone: { fr: "Téléphone", en: "Phone", ar: "الهاتف" },
      email: { fr: "Email", en: "Email", ar: "البريد الإلكتروني" },
      message: { fr: "Message", en: "Message", ar: "الرسالة" },
      messagePlaceholder: { fr: "Décrivez votre besoin...", en: "Describe your needs...", ar: "صف احتياجاتك..." },
      submit: { fr: "Envoyer le message", en: "Send message", ar: "إرسال الرسالة" },
      success: { fr: "Message envoyé", en: "Message sent", ar: "تم إرسال الرسالة" },
      successDesc: { fr: "Nous vous répondrons dans les plus brefs délais.", en: "We will respond as soon as possible.", ar: "سنرد عليك في أقرب وقت ممكن." },
    },
  },

  // Footer
  footer: {
    desc: {
      fr: "Le nouveau né de YassinePlast. 14 ans d'expertise dans la fabrication de produits plastiques industriels en Tunisie.",
      en: "The new brand of YassinePlast. 14 years of expertise in industrial plastic manufacturing in Tunisia.",
      ar: "العلامة الجديدة لياسين بلاست. 14 سنة من الخبرة في تصنيع المنتجات البلاستيكية الصناعية في تونس.",
    },
    quickLinks: { fr: "Liens rapides", en: "Quick links", ar: "روابط سريعة" },
    contact: { fr: "Contact", en: "Contact", ar: "اتصل بنا" },
    rights: { fr: "Tous droits réservés.", en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  },

  // WhatsApp
  whatsapp: {
    label: { fr: "Contacter via WhatsApp", en: "Contact via WhatsApp", ar: "تواصل عبر واتساب" },
  },
} as const;

export type Translations = typeof translations;
