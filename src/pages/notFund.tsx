import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const NotFundPage = () => {
	const navigate = useNavigate();
	const { t } = useLang();

	return (
		<div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream px-6 text-charcoal">
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-lime/[0.07] blur-[120px]" />
				<div className="absolute bottom-0 right-1/4 h-[420px] w-[420px] rounded-full bg-lime/[0.05] blur-[120px]" />
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="relative text-center"
			>
				<p className="text-[8rem] font-black leading-none tracking-tight text-lime md:text-[13rem]">
					404
				</p>
				<h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">{t("notFound.title")}</h1>
				<p className="mx-auto mt-3 max-w-md text-charcoal/60">{t("notFound.subtitle")}</p>

				<div className="mt-8 flex flex-wrap justify-center gap-3">
					<button
						onClick={() => navigate("/")}
						className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-lime/20 transition hover:brightness-110"
					>
						<Home className="h-4 w-4" />
						{t("notFound.home")}
					</button>
					<button
						onClick={() => navigate(-1)}
						className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-6 py-3.5 text-sm font-semibold text-charcoal transition hover:border-lime hover:text-lime"
					>
						<ArrowLeft className="h-4 w-4" />
						{t("notFound.back")}
					</button>
				</div>
			</motion.div>
		</div>
	);
};

export default NotFundPage;
