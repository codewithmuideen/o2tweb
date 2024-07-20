import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  CloudSolutions,
  Contact,
  CorporateTraining,
  DataAnalysis,
  DataEngineering,
  DevSecOps,
  HandsOnTraining,
  MachineLearning,
  Services,
} from "./pages";

function App() {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0);
  }, [location.pathname]); // Listen to changes in location.pathname
  return (
    <div className=" overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/dev-sec-ops" element={<DevSecOps />} />
        <Route path="/cloud-solutions" element={<CloudSolutions />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="/data-engineering" element={<DataEngineering />} />
        <Route path="/data-analysis" element={<DataAnalysis />} />
        <Route path="/corporate-trainings" element={<CorporateTraining />} />
        <Route path="/hands-on-training" element={<HandsOnTraining />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
