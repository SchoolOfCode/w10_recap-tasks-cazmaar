import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import css from "./loginbutton.module.css"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className={css.loginButton} onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
