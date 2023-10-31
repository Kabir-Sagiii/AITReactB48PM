import "./App.css";

import Nav from "./components/nav/Nav";
import Input from "./components/Parent-Child/Input";
import Text from "./components/Child-Parent/Text";
import A from "./components/context-api/A";

function App() {
  return (
    <div className="App">
      <Nav />
      <A />
      {/* <Text /> */}
      {/* <Input /> */}
    </div>
  );
}

export default App;
