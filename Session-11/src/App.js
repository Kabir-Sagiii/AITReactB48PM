import "./App.css";
import Header from "./components/header/Header";
import { Main } from "./components/main/Main";

function App() {
  //parent Component
  return (
    <div className="App">
      <Header />
      <Main title="First Title" />
      <h2>App Component</h2>

      <Main title="Second Title" />
    </div>
  );
}

export default App;
