import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import Flights from "./pages/Flights";
import Packages from "./pages/Packages";
import Header from "./components/Header";
import Hotel from "./pages/Hotel";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<Hotels />}>
          <Route path=":hotelId" element={<Hotel />} />
        </Route>
        <Route path="/flights" element={<Flights />} />
        <Route path="/packages" element={<Packages />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
