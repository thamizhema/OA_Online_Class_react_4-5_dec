import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { myRoutes } from "./Components/constent/myRoutes";
import Work from "./Components/Work/Work";
import Appbar from "./Components/Appbar/Appbar";

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path={myRoutes.home} element={<Home />} />
        <Route path={myRoutes.about} element={<About />} />
        <Route path={myRoutes.work} element={<Work />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
