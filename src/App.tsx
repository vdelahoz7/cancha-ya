import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import FieldsPage from './pages/FieldsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import PricingPage from './pages/PricingPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FieldDetailPage from './pages/FieldDetailPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout><HomePage /></Layout>} />
                <Route path="/canchas" element={<Layout><FieldsPage /></Layout>} />
                <Route path="/canchas/:id" element={<Layout><FieldDetailPage /></Layout>} />
                <Route path="/como-funciona" element={<Layout><HowItWorksPage /></Layout>} />
                <Route path="/precios" element={<Layout><PricingPage /></Layout>} />
                <Route path="/contacto" element={<Layout><ContactPage /></Layout>} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
}

export default App;