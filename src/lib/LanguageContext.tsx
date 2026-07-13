import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { dictionaries, Lang, TranslationKey } from "./i18n";

const STORAGE_KEY = "portfo.lang";

interface LanguageContextValue {
	lang: Lang;
	setLang: (lang: Lang) => void;
	toggle: () => void;
	t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

const detectInitial = (): Lang => {
	if (typeof window === "undefined") return "fr";
	const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
	if (stored === "fr" || stored === "en") return stored;
	const navLang = window.navigator.language?.toLowerCase() ?? "";
	return navLang.startsWith("en") ? "en" : "fr";
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [lang, setLangState] = useState<Lang>(detectInitial);

	useEffect(() => {
		try {
			window.localStorage.setItem(STORAGE_KEY, lang);
		} catch {
			/* ignore */
		}
		document.documentElement.setAttribute("lang", lang);
	}, [lang]);

	const setLang = useCallback((l: Lang) => setLangState(l), []);
	const toggle = useCallback(() => setLangState((l) => (l === "fr" ? "en" : "fr")), []);

	const t = useCallback(
		(key: TranslationKey) => {
			const dict = dictionaries[lang] as Record<string, string>;
			return dict[key] ?? dictionaries.en[key] ?? key;
		},
		[lang]
	);

	const value = useMemo(() => ({ lang, setLang, toggle, t }), [lang, setLang, toggle, t]);

	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLang = () => {
	const ctx = useContext(LanguageContext);
	if (!ctx) throw new Error("useLang must be used within LanguageProvider");
	return ctx;
};
