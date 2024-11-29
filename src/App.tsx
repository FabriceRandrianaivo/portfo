import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
// import Homepage from './pages/home';
import TopHeader from './components/topHeader';
import './assets/modele/scss/pages/App.scss';
import Hero from "./components/hero";
import About from "./pages/about";
import Portfolio from "./pages/portfo";
import Contact from "./pages/contact";

const App: React.FC = () => {
  return (
    <Router>
      <header>
      <TopHeader />
      </header>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/home" element={<Homepage />}></Route> */}
        {/* <Route path="/home" element={<Homepage />}></Route> */}
        {/* <Route path="/home" element={<Homepage />}></Route> */}
      </Routes>
    </Router>
  );
};

export default App;
