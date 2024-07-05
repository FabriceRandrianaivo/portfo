import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Homepage from './pages/home';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Homepage />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
