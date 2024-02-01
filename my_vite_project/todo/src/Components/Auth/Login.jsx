import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Login</h1>
      <input type="text" />
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Login
      </button>
    </div>
  );
}
