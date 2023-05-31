import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import de from "./de";
import en from "./en";

export const defaultLanguage = "en";

i18n
	// detect user language
	// learn more: https://github.com/i18next/i18next-browser-languageDetector
	.use(LanguageDetector)
	// pass the i18n instance to react-i18next.
	.use(initReactI18next)
	// init i18next
	// for all options read: https://www.i18next.com/overview/configuration-options
	.init({
		detection: {
			order: ["cookie", "querystring", "localStorage", "navigator", "htmlTag", "path", "subdomain"],
		},
		debug: true,
		fallbackLng: defaultLanguage,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
		react: {
			transSupportBasicHtmlNodes: true,
		},
		ns: ["common", "components", "pages", "meta"],
		defaultNS: "common",
		resources: {
			de: {
				common: {...de().common},
				components: {...de().components},
				pages: {...de().pages},
				meta: {...de().meta},
			},
			en: {
				common: {...en().common},
				components: {...en().components},
				pages: {...en().pages},
				meta: {...en().meta},
			},
		},
	});

export default i18n;

export const languages = [
	{code: "de", name: "Deutsch"},
	{code: "en", name: "English"},
];
