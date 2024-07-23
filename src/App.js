import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./Components/Home";
import Academy from './Components/Academy';
import WhyChooseUs from './Components/WhyChooseUs';
import OurService from './Components/OurService';
import Blog from './Components/Blog';
import Careers from './Components/Careers';
import FAQ from './Components/FAQ';
// import NavBar from './Components/Tools/NavBar';

function App() {
  return (
    <Router>
      <div style={{ width: "100vw", height: "100vh", overflowY: "hidden" }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/our-service" element={<OurService />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
