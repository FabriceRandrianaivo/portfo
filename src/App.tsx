import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import TopHeader from "./components/topHeader";
import Footer from "./components/footer";
import "./assets/modele/scss/pages/App.scss";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Experience from "./pages/experience";
import ProjectsV2 from "./pages/projects-v2";
import Contact from "./pages/contact";
import NotFund from "./pages/notFund";
import { LanguageProvider } from "./lib/LanguageContext";
import { LenisProvider } from "./components/lenis-provider";
import ClickSpark from "./components/ui/clickSpark";

const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: 0.3 },
};

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div {...pageTransition}>
              <About />
            </motion.div>
          }
        />
        <Route
          path="/skills"
          element={
            <motion.div {...pageTransition}>
              <Skills />
            </motion.div>
          }
        />
        <Route
          path="/experience"
          element={
            <motion.div {...pageTransition}>
              <Experience />
            </motion.div>
          }
        />
        <Route
          path="/projects-v2"
          element={
            <motion.div {...pageTransition}>
              <ProjectsV2 />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div {...pageTransition}>
              <Contact />
            </motion.div>
          }
        />
        <Route path="*" element={<NotFund />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const body = document.body;
    if (isDarkTheme) {
      body.classList.add("theme-dark");
      body.classList.remove("theme-light");
    } else {
      body.classList.add("theme-light");
      body.classList.remove("theme-dark");
    }
  }, [isDarkTheme]);

  return (
    <LanguageProvider>
      <LenisProvider>
        <ClickSpark sparkColor="#6E93AE" sparkSize={12} sparkRadius={18} sparkCount={8} duration={400} easing="ease-out">
          <Router>
            <TopHeader theme={isDarkTheme} setTheme={setIsDarkTheme} />
            <main className="min-h-screen bg-cream text-charcoal">
              <AnimatedRoutes />
            </main>
            <Footer />
          </Router>
        </ClickSpark>
      </LenisProvider>
    </LanguageProvider>
  );
};

export default App;
