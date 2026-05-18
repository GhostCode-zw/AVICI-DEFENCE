import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./pages/navbar";
import Hero from "./pages/hero";
import HomeFeature from "./pages/HomeFeature";
import SecuritySolutions from "./pages/SecuritySolutions";
import BusinessServices from "./pages/BusinessServices";
import SmartAccess from "./pages/Smartaccess";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <Router>
      <Navbar /> 
      <Hero />
      <HomeFeature />
      <SecuritySolutions />
      <BusinessServices /> 
      <SmartAccess /> 
      <Footer />  
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<Hero />} />
        {/* Add more routes as needed */}   
      </Routes>
    </Router> 
  );
};

export default App;


