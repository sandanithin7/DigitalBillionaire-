import React from 'react';
import { 
  createBrowserRouter, 
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet 
} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './auth/Login';
import Signup from './auth/Signup';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './pages/Dashboard';
import './App.css';
import Packages from './pages/Packages';

// Create router with future flags
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <AuthProvider>
          <div className="min-h-screen bg-gradient-to-br from-black via-gray-700 to-purple-800 flex flex-col">
            <Navbar />
            <main className="flex-grow pt-20">
              <Outlet />
            </main>
            <Footer />
          </div>
        </AuthProvider>
      }
    >
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/packages/pro" element={<Packages type="pro" />} />
      <Route path="/packages/supreme" element={<Packages type="supreme" />} />
      <Route path="/packages/premium" element={<Packages type="premium" />} />
      <Route path="/packages/premium-plus" element={<Packages type="premium-plus" />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Route>
  ),
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true
    }
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
