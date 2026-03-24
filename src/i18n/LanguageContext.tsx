import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { type Lang } from "./translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dir: "ltr" | "rtl";
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  setLang: () => {},
  dir: "ltr",
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("bmst-lang");
    return (saved === "en" || saved === "ar" || saved === "fr") ? saved : "fr";
  });

  const dir = lang === "ar" ? "rtl" : "ltr";

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem("bmst-lang", newLang);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};
