import "./App.css";

import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Flights from "./components/Flights";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Flights
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Intro />
        <div className="class">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/flights" element={<Flights />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
