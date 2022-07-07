import { useState } from "react";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Enter Username and password</h1>
      <form>
        <input name="username" placeholder="username" type="text" />
        <input name="password" placeholder="password" type="password" />
        <button onClick={() => loginFunction({ username, password })} type="button">
          Login
        </button>
      </form>
    </div>
  );
};

const loginFunction = async ({ username, password }) => {
  // uncomment thiis fetch
  //   const response = await fetch("http://localhost:3000/api/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username,
  //       password,
  //     }),
  //   });
  const data = {
    token: "HELLO WORLD",
  }; // change to: await response.json();
  console.log(data);
  if (data.token) {
    localStorage.setItem("token", data.token);
    window.location.href = "/";
  }
};
