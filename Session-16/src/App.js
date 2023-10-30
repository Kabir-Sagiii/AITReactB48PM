import "./App.css";

import Nav from "./components/nav/Nav";
import Input from "./components/Parent-Child/Input";
import Text from "./components/Child-Parent/Text";

function App() {
  return (
    <div className="App">
      <Nav />
      <Text />
      {/* <Input /> */}
    </div>
  );
}

export default App;
