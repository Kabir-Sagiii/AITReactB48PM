import "./App.css";
import { useState } from "react";

import Nav from "./components/nav/Nav";
import { Main } from "./components/main/Main";
import authContext from "./context/AuthContext";
import Dom from "./components/useref-concept/Dom";
import TaskRef from "./components/useref-concept/TaskRef";
import UseReducerComp from "./components/UseReducer-hook/UseReducerComp";
import Counter from "./components/UseReducer-hook/Counter";
import Input from "./components/redux-implementation/components/Input";
import Result from "./components/redux-implementation/components/Result";
import City from "./components/redux-implementation/components/City";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <Input />
        <City />
      </div>
      <hr />
      <Result />
    </div>
  );
}

export default App;
