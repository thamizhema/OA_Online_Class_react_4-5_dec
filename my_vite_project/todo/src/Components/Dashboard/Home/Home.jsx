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

  const downloadImage = () => {
    const imageUrl =
      "https://firebasestorage.googleapis.com/v0/b/oceanlivereact.appspot.com/o/E_certificate%2F2024%2Fe_certificate%2FAkash%20Ram%20Softcopy_.jpg?alt=media&token=ac512e85-37eb-4503-8923-52704ffb6139";
    fetch(imageUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "image.jpg");
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
      });
  };
  return (
    <div>
      <h1>Home</h1>
      {users.map((u, i) => {
        return <div key={i}>{`${u.name}=====${u.age}`}</div>;
      })}
      <button onClick={getUser}>Get Users</button>
      <button onClick={sendMsg}>Post Users</button>
      <a
        href="https://firebasestorage.googleapis.com/v0/b/oceanlivereact.appspot.com/o/E_certificate%2F2024%2Fe_certificate%2FAkash%20Ram%20Softcopy_.jpg?alt=media&token=ac512e85-37eb-4503-8923-52704ffb6139"
        download={true}
      >
        Download Image
      </a>
      <div>
        <button onClick={downloadImage}>Download Image</button>
      </div>
    </div>
  );
}
