import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
} from "../data/portfolioData";

const STORAGE_KEY = "portfolio-language";
const supportedLanguages = Object.values(LANGUAGES);

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    if (typeof window === "undefined") {
      return DEFAULT_LANGUAGE;
    }

    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    if (storedLanguage && supportedLanguages.includes(storedLanguage)) {
      return storedLanguage;
    }

    return DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, language);
    }

    document.documentElement.lang = language;
  }, [language]);

  function setLanguage(nextLanguage) {
    if (supportedLanguages.includes(nextLanguage)) {
      setLanguageState(nextLanguage);
    }
  }

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider.");
  }

  return context;
}
