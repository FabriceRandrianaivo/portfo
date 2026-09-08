/**
 * Google Analytics 4 pour la SPA.
 * Piloté par VITE_GA_ID (ex. "G-XXXXXXXXXX"). Si la variable est absente,
 * rien n'est chargé (utile en local : laisse VITE_GA_ID vide dans .env.local,
 * mets-la seulement sur Vercel pour ne suivre que le trafic de production).
 */
declare global {
	interface Window {
		dataLayer: unknown[];
		gtag: (...args: unknown[]) => void;
	}
}

const GA_ID = import.meta.env.VITE_GA_ID as string | undefined;

export const isAnalyticsEnabled = Boolean(GA_ID);

let initialized = false;

/** Charge gtag.js une seule fois (les page views sont envoyées manuellement au changement de route). */
export function initAnalytics(): void {
	if (!GA_ID || initialized || typeof document === "undefined") return;
	initialized = true;

	const script = document.createElement("script");
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
	document.head.appendChild(script);

	window.dataLayer = window.dataLayer || [];
	window.gtag = function gtag() {
		// eslint-disable-next-line prefer-rest-params
		window.dataLayer.push(arguments);
	};
	window.gtag("js", new Date());
	// send_page_view:false → on gère les vues manuellement (SPA)
	window.gtag("config", GA_ID, { send_page_view: false });
}

/** Envoie une vue de page (à appeler à chaque changement de route). */
export function trackPageview(path: string): void {
	if (!GA_ID || typeof window === "undefined" || typeof window.gtag !== "function") return;
	window.gtag("event", "page_view", {
		page_path: path,
		page_location: window.location.href,
		page_title: document.title,
	});
}
