import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Appbar from "./Components/Dashboard/Appbar/Appbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from "./Components/Dashboard/AddTask/AddTask";
import Home from "./Components/Dashboard/Home/Home";
import ViewTask from "./Components/Dashboard/AddTask/ViewTask/ViewTask";

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add_task" element={<AddTask />} />
        <Route path="/view_task" element={<ViewTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
