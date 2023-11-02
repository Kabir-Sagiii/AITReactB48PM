import "./App.css";
import { useState } from "react";

import Nav from "./components/nav/Nav";
import { Main } from "./components/main/Main";
import authContext from "./context/AuthContext";

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
      <authContext.Provider value={{ isLoggedIn, login, logout }}>
        <Nav />
        <Main />
      </authContext.Provider>

      {/* <Nav isLoggedIn={isLoggedIn} logout={logout} /> */}
      {/* <Main isLoggedIn={isLoggedIn} login={login} /> */}
    </div>
  );
}

export default App;
