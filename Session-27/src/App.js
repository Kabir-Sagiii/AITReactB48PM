import "./App.css";
import ClassDemo from "./components/ClassComp";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App mt-5">
      <ClassDemo />
      <Header />
      <Footer />
    </div>
  );
}

export default App;
