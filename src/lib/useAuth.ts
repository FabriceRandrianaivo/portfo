import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "./supabase";

/** Suit la session Supabase (login admin). */
export function useAuth() {
	const [session, setSession] = useState<Session | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!supabase) {
			setLoading(false);
			return;
		}
		supabase.auth.getSession().then(({ data }) => {
			setSession(data.session);
			setLoading(false);
		});
		const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
			setSession(s);
		});
		return () => sub.subscription.unsubscribe();
	}, []);

	return { session, loading };
}

export async function signIn(email: string, password: string) {
	if (!supabase) throw new Error("Supabase non configuré");
	const { error } = await supabase.auth.signInWithPassword({ email, password });
	if (error) throw error;
}

export async function signOut() {
	if (!supabase) return;
	await supabase.auth.signOut();
}
