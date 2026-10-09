import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWidget } from './components/layout/FloatingWidget';
import { 
  Home, 
  Packages, 
  PackageDetail, 
  Destinations, 
  PilgrimageTours, 
  TravelPlanning, 
  About, 
  Contact 
} from './pages';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/packages/:slug" element={<PackageDetail />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/pilgrimage-tours" element={<PilgrimageTours />} />
            <Route path="/travel-planning" element={<TravelPlanning />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWidget />
      </div>
    </Router>
  );
}

export default App;
