import "./App.css";
import { useState } from "react";

import Nav from "./components/nav/Nav";
import { Main } from "./components/main/Main";
import authContext from "./context/AuthContext";
import Dom from "./components/useref-concept/Dom";
import TaskRef from "./components/useref-concept/TaskRef";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="App">
      <Dom />
      <TaskRef />
      {/* <authContext.Provider value={{ isLoggedIn, login, logout }}>
        {isLoggedIn ? <Nav /> : null}
        <Main />
      </authContext.Provider> */}
    </div>
  );
}

export default App;
