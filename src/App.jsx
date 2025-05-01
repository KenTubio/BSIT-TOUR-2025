import CityTour from "./components/pages/cityTour";
import FirstSection from "./components/pages/landingpage"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SubicTour from "./components/pages/subicTour";
import MuseumTour from "./components/pages/museumTour";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FirstSection />} />
          <Route path="/city-tour" element={<CityTour />} />
          <Route path="/subic-tour" element={<SubicTour />} />
          <Route path="/museum-tour" element={<MuseumTour />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
