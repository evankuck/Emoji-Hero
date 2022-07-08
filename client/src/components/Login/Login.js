import { useState, useEffect } from "react";
import { useMutation, gql } from "@apollo/client";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password)
    }
  `;

  const [loginFunction, { data, loading, error }] = useMutation(LOGIN);
  useEffect(() => {
    if (data && data.login) {
      console.log(data.login);
      localStorage.setItem("token", data.login);
    }
  }, [data]);

  return (
    <div>
      <h1>Enter Email and Password</h1>
      <form>
        <input
          name="email"
          placeholder="email"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          onClick={() => {
            console.log({ email, password });
            loginFunction({ variables: { email, password } });
          }}
          type="button"
        >
          Login
        </button>
        <button>
          Create Account
        </button>
      </form>
    </div>
  );
};
