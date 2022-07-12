import { useState, useEffect } from "react";
import { useMutation, gql } from "@apollo/client";
import'./Login.css'

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LOGIN = gql`
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password)
    }
  `;

  const CREATE_USER = gql`
    mutation Mutation($email: String!, $password: String!) {
      createUser(email: $email, password: $password) {
        token
      }
    }
  `;

  const [
    loginFunction,
    { data: loginData, loading: loginLoading, error: loginError },
  ] = useMutation(LOGIN);
  useEffect(() => {
    if (loginData && loginData.login) {
      console.log(loginData.login);
      localStorage.setItem("token", loginData.login);
      window.location.href = "/";
    }
  }, [loginData]);

  const [
    createUserFunction,
    {
      data: createUserData,
      loading: createUserLoading,
      error: createUserError,
    },
  ] = useMutation(CREATE_USER);

  useEffect(() => {
    if (createUserData && createUserData.createUser) {
      console.log(createUserData.createUser);
      localStorage.setItem("token", createUserData.createUser.token);
      window.location.href = "/";
    }
  }, [createUserData]);

  return (
    <div className="loginContainer">
      <h1>Welcome to Emoji Hero 🦸🏻‍♀️✨</h1>
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
        <button className="loginBtn"
          onClick={() => {
            console.log({ email, password });
            loginFunction({ variables: { email, password } });
          }}
          type="button"
        >
          Login
        </button>
        <button className="loginBtn"
          type="button"
          onClick={() => {
            createUserFunction({ variables: { email, password } });
          }}
        >
          Create New Account
        </button>
      </form>
    </div>
  );
};
