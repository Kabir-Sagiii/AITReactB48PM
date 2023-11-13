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
import Products from "./components/redux-implementation/components/Products";
import Profile from "./components/profile/Profile";
import Home from "./components/routing/Home";
import Support from "./components/routing/Support";
import PageNotFound from "./components/routing/PageNotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Support />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
