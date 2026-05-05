import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, MapPin, Phone, Send, CheckCircle2, Loader2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { profile, socials } from "../data/profile";
import { useLang } from "@/lib/LanguageContext";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: ContactForm = { name: "", email: "", subject: "", message: "" };

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const { t } = useLang();

  const onChange =
    (key: keyof ContactForm) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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
    { icon: <Mail className="h-5 w-5" />, label: t("contact.channel.email"), value: profile.email, href: `mailto:${profile.email}` },
    { icon: <Phone className="h-5 w-5" />, label: t("contact.channel.phone"), value: profile.phone, href: "https://wa.me/261328454355" },
    { icon: <MapPin className="h-5 w-5" />, label: t("contact.channel.location"), value: profile.location },
  ];

  const socialIcon = (name: string) => {
    if (name === "GitHub") return <FaGithub />;
    if (name === "LinkedIn") return <FaLinkedin />;
    if (name === "WhatsApp") return <FaWhatsapp />;
    return <Mail />;
  };

  return (
    <div className="relative min-h-screen bg-background pb-24 pt-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-0 h-[400px] w-[400px] rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/15 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <Badge variant="outline" className="mb-4 border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
            {t("contact.eyebrow")}
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            {t("contact.title.before")}{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
              {t("contact.title.gradient")}
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">{t("contact.subtitle")}</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur">
              <h2 className="text-xl font-semibold">{t("contact.talk.title")}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{t("contact.talk.subtitle")}</p>

              <div className="mt-6 space-y-4">
                {channels.map((c) => (
                  <div key={c.label} className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-300">
                      {c.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-foreground hover:text-cyan-300"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium">{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex gap-2 border-t border-white/10 pt-5">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    {socialIcon(s.name)}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.04] p-5">
              <div className="flex items-center gap-2 text-sm font-medium text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {t("common.available")}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t("contact.availability")}</p>
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {t("contact.form.name")}
                </span>
                <Input
                  value={form.name}
                  onChange={onChange("name")}
                  placeholder={t("contact.form.namePlaceholder")}
                  required
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  {t("contact.form.email")}
                </span>
                <Input
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  placeholder={t("contact.form.emailPlaceholder")}
                  required
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {t("contact.form.subject")}
              </span>
              <Input
                value={form.subject}
                onChange={onChange("subject")}
                placeholder={t("contact.form.subjectPlaceholder")}
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {t("contact.form.message")}
              </span>
              <textarea
                value={form.message}
                onChange={onChange("message")}
                placeholder={t("contact.form.messagePlaceholder")}
                rows={6}
                required
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
              />
            </label>

            {status === "error" && errorMsg && (
              <p className="text-sm text-rose-400">{errorMsg}</p>
            )}

            {status === "success" && (
              <div className="flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-400/10 p-3 text-sm text-emerald-300">
                <CheckCircle2 className="h-4 w-4" />
                {t("contact.form.success")}
              </div>
            )}

            <Button
              type="submit"
              variant="gradient"
              size="lg"
              disabled={status === "sending"}
              className="w-full sm:w-auto"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {t("contact.form.sending")}
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  {t("contact.form.send")}
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
