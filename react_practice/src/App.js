import MyLogin from "./components/Login/Login"; //default export
import { Home, Contact } from "./components/Home/Home"; // export
import MyButton from "./components/common/MyButton";
import MyInput from "./components/common/MyInput";
import About from "./components/About/About";
import Card from "./components/Card";
import { myData } from "./components/constents";
export default function App() {
  return (
    <div className="app">
      <div class="all-card" style={{ display: "flex", flexWrap: "wrap" }}>
        {myData.map((item) => {
          console.log(item);
          return (
            <Card
              logo={item.logo}
              title={item.title}
              subtitle={item.description}
              color={item.color}
            />
          );
        })}
      </div>
      <About name="JavaScript" />
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
