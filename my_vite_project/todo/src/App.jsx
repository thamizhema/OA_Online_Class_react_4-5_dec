import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Appbar from "./Components/Dashboard/Appbar/Appbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from "./Components/Dashboard/AddTask/AddTask";
import Home from "./Components/Dashboard/Home/Home";
import ViewTask from "./Components/Dashboard/AddTask/ViewTask/ViewTask";
import Login from "./Components/Auth/Login";
import StateTask from "./Components/StateTask/StateTask";

// creatting a context
export const CountContext = createContext();

function App() {
  const [state, setState] = useState({
    username: "javaScript",
    count: 2,
    email: "js@gmail.com",
  });

  console.log("main state");

  return (
    <BrowserRouter>
      <CountContext.Provider value={{ state, setState }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />}>
            <Route path="" element={<Home />} />
            <Route path="/add_task" element={<AddTask />} />
          </Route>
          <Route path="state_task" element={<StateTask />} />
          {/* <Route path="/add_task" element={<AddTask />} />
        <Route path="/view_task" element={<ViewTask />} /> */}
        </Routes>
      </CountContext.Provider>
    </BrowserRouter>
  );
}

export default App;
