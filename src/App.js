import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acerca from "./pages/Acerca";
import Cartera from "./pages/Cartera";
import Contacto from "./pages/Contacto";
import Curriculum from "./pages/Curriculum";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Acerca />} />
          <Route path="/cartera" element={<Cartera />} />
          <Route path="/cartera/:id" element={<ProjectDisplay />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/curriculum" element={<Curriculum />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
