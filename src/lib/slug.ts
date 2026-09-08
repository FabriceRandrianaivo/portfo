/** Marques diacritiques combinantes (U+0300–U+036F) — construites sans littéral fragile. */
const DIACRITICS = new RegExp("[\\u0300-\\u036f]", "g");

/** Transforme un nom de projet en slug stable (clé de rattachement des images). */
export function slugify(input: string): string {
	return input
		.toLowerCase()
		.normalize("NFD")
		.replace(DIACRITICS, "") // retire les accents
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

/** Nettoie un nom de fichier pour l'utiliser comme clé de stockage. */
export function safeFileName(name: string): string {
	const dot = name.lastIndexOf(".");
	const base = dot > 0 ? name.slice(0, dot) : name;
	const ext = dot > 0 ? name.slice(dot + 1).toLowerCase() : "";
	const cleanBase = slugify(base) || "file";
	return ext ? `${cleanBase}.${ext.replace(/[^a-z0-9]/g, "")}` : cleanBase;
}
