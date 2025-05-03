import CityTour from "./components/pages/cityTour";
import FirstSection from "./components/pages/landingpage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubicTour from "./components/pages/subicTour";
import MuseumTour from "./components/pages/museumTour";
import BspHytecTour from "./components/pages/bspHytecTour";
import LrtMmdaTour from "./components/pages/lrtMmdaTour";
import BaguioTour from "./components/pages/baguioTour";
import BaguioParkTour from "./components/pages/baguio-parks";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FirstSection />} />
          <Route path="/city-tour" element={<CityTour />} />
          <Route path="/subic-tour" element={<SubicTour />} />
          <Route path="/museum-tour" element={<MuseumTour />} />
          <Route path="/bsp-hytec" element={<BspHytecTour />} />
          <Route path="/lrt-mmda" element={<LrtMmdaTour />} />
          <Route path="/baguio-tour" element={<BaguioTour />} />
          <Route path="/baguio-parks" element={<BaguioParkTour />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
