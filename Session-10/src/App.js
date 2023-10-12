import "./App.css";
import Header from "./components/header/Header";
import { Main } from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <h2>App Component</h2>

      <Main />
      <Footer />
    </div>
  );
}

export default App;
