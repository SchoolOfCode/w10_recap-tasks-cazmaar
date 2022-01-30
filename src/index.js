import React from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-jpr90dts.us.auth0.com"
      clientId="Q5XIUqYFQBfSbecBfa4f9LgkZ79rIdW6"
      redirectUri="http://localhost:3000/article"
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
