import React, { useState, useEffect } from "react";
import axios from "axios";

export default function APICall() {
  const [userData, setUserData] = useState([]);
  const [test, setTest] = useState(true);
  function getData() {
    // const res = await fetch("https://reqres.in/api/users/");
    // const data = await res.json();
    // console.log(data);

    fetch("https://reqres.in/api/users/")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((mydata) => {
        console.log(mydata);
        setUserData([...mydata.data]);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  function axiosFunction() {
    axios
      .get("https://reqres.in/api/users/")
      .then((res) => {
        console.log(res.data);
        setUserData([...res.data.data]);
      })
      .catch((e) => {
        console.log(e);
      });
  }
  useEffect(() => {
    axiosFunction();
    console.log("use effect called");
  }, [test]);
  return (
    <div>
      <h1>{test ? "Good" : "Bad"}</h1>
      <button onClick={() => setTest(!test)}>toggel</button>
      <button onClick={axiosFunction}>axiosFunction</button>
      <button onClick={getData}>Call API</button>
      {userData.map((user, ind) => {
        return (
          <div key={ind}>
            <h1>{user.first_name}</h1>
            <img src={user.avatar} alt="" height={50} width={50} />
            <span>{user.email}</span>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
