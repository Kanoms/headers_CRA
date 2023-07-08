import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Startup1 from "./pages/Startup1";
import Startup2 from "./pages/Startup2";
import Startup3 from "./pages/Startup3";
import Startup4 from "./pages/Startup4";
import Startup5 from "./pages/Startup5";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Startup1 />} />
            <Route path="Startup2" element={<Startup2 />} />
            <Route path="Startup3" element={<Startup3 />} />
            <Route path="Startup4" element={<Startup4 />} />
            <Route path="Startup5" element={<Startup5 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
