import { useContext } from "react";
import "./Nav.css";
import authContext from "../../context/AuthContext";

function Nav() {
  const { isLoggedIn, logout } = useContext(authContext);
  return (
    <div className="navContainer">
      <h2>React State</h2>
      <div>
        <a href="">Home</a>
        <a href="">Products</a>
        <a href="">Profile</a>
        {isLoggedIn ? (
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Nav;
