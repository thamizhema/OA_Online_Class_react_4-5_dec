import React, { useState } from "react";
import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);

  async function getUser() {
    const res = await axios.get("http://localhost:8000/users");
    setUsers(res.data);
  }

  function sendMsg() {
    axios.post("http://localhost:8000/users", { name: "CSS", age: 36 });
  }

  return (
    <div>
      <h1>Home</h1>
      {users.map((u, i) => {
        return <div key={i}>{`${u.name}=====${u.age}`}</div>;
      })}
      <button onClick={getUser}>Get Users</button>
      <button onClick={sendMsg}>Post Users</button>
    </div>
  );
}
