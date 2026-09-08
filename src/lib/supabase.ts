import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Client Supabase.
 * Les valeurs viennent de .env.local (VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY).
 * La clé "anon" est publique par conception : la sécurité repose sur les règles RLS
 * définies côté Supabase (lecture publique pour les projets, écriture réservée à l'admin,
 * documents privés accessibles uniquement via liens signés).
 *
 * Si les variables ne sont pas configurées, `supabase` vaut null et le site public
 * retombe automatiquement sur les données statiques (aucune casse).
 */
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
	? createClient(url as string, anonKey as string, {
			auth: {
				persistSession: true,
				autoRefreshToken: true,
				detectSessionInUrl: true,
			},
		})
	: null;

/** Nom des buckets de stockage (créés via le SQL de setup). */
export const BUCKETS = {
	/** Public — images de galerie des projets. */
	projectImages: "project-images",
	/** Privé — certificats & lettres de recommandation. */
	documents: "documents",
} as const;
