import { useLanguage } from "./LanguageContext";
import { translations, type Lang } from "./translations";

/** Helper: get translated string from a { fr, en, ar } record */
export const useT = () => {
  const { lang } = useLanguage();
  const t = (record: Record<Lang, string>) => record[lang];
  return { t, lang };
};

export { translations };
