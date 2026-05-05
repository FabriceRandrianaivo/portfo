import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/LanguageContext";

const NotFundPage = () => {
  const navigate = useNavigate();
  const { t } = useLang();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/15 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-purple-500/15 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-[12rem] font-black leading-none text-transparent md:text-[16rem]">
          404
        </p>
        <h1 className="mt-2 text-3xl font-bold md:text-4xl">{t("notFound.title")}</h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">{t("notFound.subtitle")}</p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button variant="gradient" size="lg" onClick={() => navigate("/")}>
            <Home className="mr-2 h-4 w-4" />
            {t("notFound.home")}
          </Button>
          <Button
            size="lg"
            onClick={() => navigate(-1)}
            className="border-2 border-cyan-400/60 bg-transparent text-cyan-300 hover:bg-cyan-400/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("notFound.back")}
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFundPage;
