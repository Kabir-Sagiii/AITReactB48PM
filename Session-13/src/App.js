import "./App.css";
import Counter from "./components/counter/Counter";
import Nav from "./components/nav/Nav";
import Image from "./components/imagecontainer/Image";
function App() {
  return (
    <div className="App">
      <Nav />
      <Image />
      <Counter />
    </div>
  );
}

export default App;
