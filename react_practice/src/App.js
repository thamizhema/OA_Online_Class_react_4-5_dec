import MyLogin from "./components/Login/Login"; //default export
import { Home, Contact } from "./components/Home/Home"; // export
import MyButton from "./components/common/MyButton";
import MyInput from "./components/common/MyInput";
export default function App() {
  return (
    <div className="app">
      <Home />
      <MyLogin />
      <Contact />
      <MyButton cl="btn-red">Save</MyButton>
      <MyButton style={{ color: "white", background: "blue" }}>
        Download
      </MyButton>
      <MyButton>Cancel</MyButton>
      <br />
      <MyInput id="username" hintText="username" lable="Username" />
      <MyInput
        id={"pass"}
        hintText="Password"
        lable="Password"
        type="password"
      />
    </div>
  );
}
