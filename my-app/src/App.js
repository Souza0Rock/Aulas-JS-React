// import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Guitars from "./pages/Querry";
import PlatformVideoGame from "./pages/Split"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/platform-video-game" element={<PlatformVideoGame />} />
      </Routes>
      <Routes>
        <Route path="/guitars" element={<Guitars />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;