import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { PackageProvider } from './context/PackageContext';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import BasicPackage from './pages/packages/BasicPackage';
import ProPackage from './pages/packages/ProPackage';
import AdvancedPackage from './pages/packages/AdvancedPackage';
import PremiumPackage from './pages/packages/PremiumPackage';
import PremiumMaxPackage from './pages/packages/PremiumMaxPackage';

import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <PackageProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900">
            <Navbar />
            <main className="flex-grow pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/packages">
                  <Route index element={<Navigate to="/" replace />} />
                  <Route path="basic" element={<BasicPackage />} />
                  <Route path="pro" element={<ProPackage />} />
                  <Route path="advanced" element={<AdvancedPackage />} />
                  <Route path="premium" element={<PremiumPackage />} />
                  <Route path="premium-max" element={<PremiumMaxPackage />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </PackageProvider>
    </AuthProvider>
  );
}

export default App;
