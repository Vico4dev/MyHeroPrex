import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Accueil from './components/Accueil';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import ListeHeros from './components/ListeHeros';
import Combat from './components/Combat';
import Navigation from './components/Navigation';
import AjouterHero from './components/AjouterHero';
import Dashboard from './components/Dashboard';
const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/connexion" />;
};

function App() {
  return (
    <Router>
      <div className="App bg-base-100 min-h-screen">
        <Navigation />
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/connexion" element={<Connexion />} />
            <Route path="/inscription" element={<Inscription />} />
            <Route path="/heros" element={<PrivateRoute><ListeHeros /></PrivateRoute>} />
            <Route path="/combat" element={<PrivateRoute><Combat /></PrivateRoute>} />
            <Route path="/AjouterHero" element={<PrivateRoute><AjouterHero /></PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;