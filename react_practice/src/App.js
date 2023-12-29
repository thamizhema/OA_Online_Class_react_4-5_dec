import MyLogin from "./components/Login/Login"; //default export
import { Home } from "./components/Home/Home"; // export
export default function App() {
  return (
    <div className="app">
      <Home />
      <MyLogin />
    </div>
  );
}
