import { BrowserRouter, Route, Routes } from "react-router-dom";

import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="overflow-x-hidden bg-primaryWhite">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:name" element={<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
