import "./Main.css";
import { useContext } from "react";
import Login from "../login/Login";
import Home from "../home/Home";
import authContext from "../../context/AuthContext";
export function Main() {
  const { isLoggedIn } = useContext(authContext);
  return <div>{isLoggedIn ? <Home /> : <Login />}</div>;
}
