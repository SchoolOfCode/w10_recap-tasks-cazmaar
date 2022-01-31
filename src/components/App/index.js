import css from "./App.module.css";
import Display from "../Display";
import { Routes, Route } from "react-router-dom";
import Welcome from "../Welcome";

function App() {
  return (
    <main className={css.App}>
      <Display />
    </main>
  );
}

export default App;
