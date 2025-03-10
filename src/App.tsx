import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
// import Homepage from './pages/home';
import TopHeader from './components/topHeader';
import './assets/modele/scss/pages/App.scss';
import Hero from "./components/hero";
// import About from "./pages/about";
import Project from "./pages/portfo";
// import Contact from "./pages/contact";
import NotFund from "./pages/notFund"
import SocialMediaLinks from './components/navReseau';

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(true);

  useEffect(() => {
    const body = document.body;
    // Appliquer la classe en fonction du thème choisi
    if (isDarkTheme) {
      body.classList.add('theme-dark');
      body.classList.remove('theme-light');
    } else {
      body.classList.add('theme-light');
      body.classList.remove('theme-dark');
    }
  }, [isDarkTheme]);

  return (
    <Router>
      <header>
        <TopHeader theme={isDarkTheme} setTheme={setIsDarkTheme} />
        <SocialMediaLinks/>
      </header>
      <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/project" element={<Project theme={isDarkTheme} />} />
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<NotFund/>} />
      </Routes>
    </Router>
  );
};

export default App;
