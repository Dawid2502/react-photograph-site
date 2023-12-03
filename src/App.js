import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Aboutme from './components/Aboutme/Aboutme';
import Sessions from './components/Sessions/Sessions';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
import Portfolio from './components/Portfolio/Portfolio';
import WeddingSession from './components/Sessions/TypeSession/WeddingSession';
import ChildSession from './components/Sessions/TypeSession/ChildSession';
import OutdoorSession from './components/Sessions/TypeSession/OutdoorSession';
import ModelSession from './components/Sessions/TypeSession/ModelSession';
import BabySession from './components/Sessions/TypeSession/BabySession';
import OccasionalSession from './components/Sessions/TypeSession/OccasionalSession';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/aboutme" element={<Aboutme />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/wedding-session" element={<WeddingSession />} />
          <Route path="/child-session" element={<ChildSession />} />
          <Route path="/outdoor-session" element={<OutdoorSession />} />
          <Route path="/model-session" element={<ModelSession />} />
          <Route path="/baby-session" element={<BabySession />} />
          <Route path="/occasional-session" element={<OccasionalSession />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
