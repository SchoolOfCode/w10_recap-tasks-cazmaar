import css from "./App.module.css";
import PageHeader from "../PageHeader";
import Display from "../Display";


function App() {
  return (
    <main className={css.App}>
      <PageHeader heading="WikiPigeon" />
      <Display />
    </main>
  );
}

export default App;

