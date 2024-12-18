import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from './Components/Header';
import Home from "./Components/Home";
import About from "./Components/About"; // Import About page
import Contact from "./Components/Contact"; // Import Contact page
import LoginPage from "./Components/login";
import Footer from "./Components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to manage dark mode
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track login status

  // Add or remove the 'dark' class on the root <html> element based on the `isDarkMode` state
  useEffect(() => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Function to toggle the dark mode state
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <Router>
      <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        {/* Header will only show when authenticated */}
        {isAuthenticated && (
          <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        )}

        <Routes>
          {/* Login Page Route */}
          <Route
            path="/"
            element={
              !isAuthenticated ? (
                <LoginPage setIsAuthenticated={setIsAuthenticated} />
              ) : (
                <Navigate to="/home" replace />
              )
            }
          />

          {/* Home Page Route */}
          <Route
            path="/home"
            element={
              isAuthenticated ? (
                <Home />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          {/* About Page Route */}
          <Route
            path="/about"
            element={
              isAuthenticated ? (
                <About />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />

          {/* Contact Page Route */}
          <Route
            path="/contact"
            element={
              isAuthenticated ? (
                <Contact />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>

        {/* Footer will only show when authenticated */}
        {isAuthenticated && <Footer />}
      </div>
    </Router>
  );
}

export default App;
