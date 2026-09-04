import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { profile, socials } from "../data/profile";
import { useLang } from "@/lib/LanguageContext";

interface ContactForm {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const initialForm: ContactForm = { name: "", email: "", subject: "", message: "" };

const inputClass =
	"w-full rounded-xl border border-charcoal/15 bg-white px-4 py-2.5 text-sm text-charcoal outline-none transition placeholder:text-charcoal/35 focus:border-charcoal";

const Contact: React.FC = () => {
	const [form, setForm] = useState<ContactForm>(initialForm);
	const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
	const [errorMsg, setErrorMsg] = useState<string | null>(null);
	const { t } = useLang();

	const onChange =
		(key: keyof ContactForm) =>
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
			setForm((f) => ({ ...f, [key]: e.target.value }));

	const onSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!form.name || !form.email || !form.message) {
			setErrorMsg(t("contact.form.error.required"));
			setStatus("error");
			return;
		}

		const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
		const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
		const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID as string | undefined;

		setStatus("sending");
		setErrorMsg(null);

		try {
			if (SERVICE_ID && TEMPLATE_ID && USER_ID) {
				await emailjs.send(
					SERVICE_ID,
					TEMPLATE_ID,
					{
						from_name: form.name,
						from_email: form.email,
						subject: form.subject || "Portfolio contact",
						message: form.message,
					},
					USER_ID
				);
			} else {
				const subject = encodeURIComponent(form.subject || "Portfolio contact");
				const body = encodeURIComponent(`From: ${form.name} <${form.email}>\n\n${form.message}`);
				window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
			}
			setStatus("success");
			setForm(initialForm);
		} catch {
			setStatus("error");
			setErrorMsg(t("contact.form.error.generic"));
		}
	};

	const channels = [
		{
			icon: <Mail className="h-5 w-5" />,
			label: t("contact.channel.email"),
			value: profile.email,
			href: `mailto:${profile.email}`,
		},
		{
			icon: <Phone className="h-5 w-5" />,
			label: t("contact.channel.phone"),
			value: profile.phone,
			href: "https://wa.me/261347865670",
		},
		{ icon: <MapPin className="h-5 w-5" />, label: t("contact.channel.location"), value: profile.location },
	];

	const socialIcon = (name: string) => {
		if (name === "GitHub") return <FaGithub />;
		if (name === "LinkedIn") return <FaLinkedin />;
		if (name === "WhatsApp") return <FaWhatsapp />;
		return <Mail />;
	};

	return (
		<div className="relative min-h-screen bg-cream pb-24 pt-28 text-charcoal">
			<div className="mx-auto max-w-6xl px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<p className="font-mono text-xs uppercase tracking-[0.25em] text-charcoal/50">
						{t("contact.eyebrow")}
					</p>
					<h1 className="mt-3 text-5xl font-bold tracking-tight md:text-7xl">
						{t("contact.title.before")}{" "}
						<span className="text-lime [text-shadow:0_2px_24px_rgba(110,147,174,0.35)]">
							{t("contact.title.gradient")}
						</span>
					</h1>
					<p className="mt-4 max-w-2xl font-mono text-sm text-charcoal/55">
						{t("contact.subtitle")}
					</p>
				</motion.div>

				<div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
					{/* LEFT — channels (charcoal) */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="space-y-5"
					>
						<div className="rounded-2xl border border-charcoal/10 bg-white p-6">
							<div>
								<h2 className="text-xl font-bold tracking-tight text-charcoal">{t("contact.talk.title")}</h2>
								<p className="mt-1 font-mono text-sm text-charcoal/50">{t("contact.talk.subtitle")}</p>

								<div className="mt-6 space-y-4">
									{channels.map((c) => (
										<div key={c.label} className="flex items-start gap-3">
											<div className="grid h-10 w-10 place-items-center rounded-xl bg-lime/10 text-lime">
												{c.icon}
											</div>
											<div className="flex-1">
												<p className="font-mono text-[11px] uppercase tracking-widest text-charcoal/40">
													{c.label}
												</p>
												{c.href ? (
													<a
														href={c.href}
														target="_blank"
														rel="noopener noreferrer"
														className="text-sm font-medium text-charcoal transition hover:text-lime"
													>
														{c.value}
													</a>
												) : (
													<p className="text-sm font-medium text-charcoal">{c.value}</p>
												)}
											</div>
										</div>
									))}
								</div>

								<div className="mt-6 flex gap-2 border-t border-charcoal/10 pt-5">
									{socials.map((s) => (
										<a
											key={s.name}
											href={s.url}
											target="_blank"
											rel="noopener noreferrer"
											aria-label={s.name}
											className="grid h-10 w-10 place-items-center rounded-full border border-charcoal/10 text-charcoal/60 transition hover:border-lime hover:text-lime"
										>
											{socialIcon(s.name)}
										</a>
									))}
								</div>
							</div>
						</div>

						<div className="flex items-center gap-2.5 rounded-2xl border border-lime bg-lime/10 p-4">
							<span className="relative flex h-2.5 w-2.5">
								<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
								<span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
							</span>
							<p className="font-mono text-sm text-charcoal">{t("contact.availability")}</p>
						</div>
					</motion.div>

					{/* RIGHT — form (white) */}
					<motion.form
						onSubmit={onSubmit}
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="space-y-5 rounded-2xl border border-charcoal/10 bg-white p-6 md:p-8"
					>
						<div className="grid gap-4 sm:grid-cols-2">
							<label className="block">
								<span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-charcoal/50">
									{t("contact.form.name")}
								</span>
								<input
									value={form.name}
									onChange={onChange("name")}
									placeholder={t("contact.form.namePlaceholder")}
									required
									className={inputClass}
								/>
							</label>
							<label className="block">
								<span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-charcoal/50">
									{t("contact.form.email")}
								</span>
								<input
									type="email"
									value={form.email}
									onChange={onChange("email")}
									placeholder={t("contact.form.emailPlaceholder")}
									required
									className={inputClass}
								/>
							</label>
						</div>

						<label className="block">
							<span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-charcoal/50">
								{t("contact.form.subject")}
							</span>
							<input
								value={form.subject}
								onChange={onChange("subject")}
								placeholder={t("contact.form.subjectPlaceholder")}
								className={inputClass}
							/>
						</label>

						<label className="block">
							<span className="mb-1.5 block font-mono text-[11px] uppercase tracking-widest text-charcoal/50">
								{t("contact.form.message")}
							</span>
							<textarea
								value={form.message}
								onChange={onChange("message")}
								placeholder={t("contact.form.messagePlaceholder")}
								rows={6}
								required
								className={inputClass}
							/>
						</label>

						{status === "error" && errorMsg && (
							<p className="font-mono text-sm text-rose-500">{errorMsg}</p>
						)}

						{status === "success" && (
							<div className="flex items-center gap-2 rounded-xl border border-lime bg-lime/10 p-3 text-sm text-charcoal">
								<CheckCircle2 className="h-4 w-4" />
								{t("contact.form.success")}
							</div>
						)}

						<button
							type="submit"
							disabled={status === "sending"}
							className="inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110 disabled:opacity-60"
						>
							{status === "sending" ? (
								<>
									<Loader2 className="h-4 w-4 animate-spin" />
									{t("contact.form.sending")}
								</>
							) : (
								<>
									<Send className="h-4 w-4" />
									{t("contact.form.send")}
								</>
							)}
						</button>
					</motion.form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
