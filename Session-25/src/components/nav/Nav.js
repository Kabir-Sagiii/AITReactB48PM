import { useContext } from "react";
import "./Nav.css";
import authContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

function Nav() {
  // const { isLoggedIn, logout } = useContext(authContext);
  return (
    <div className="navContainer">
      <h3>React Routing</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/support">Support</Link>
        {/* {isLoggedIn ? (
          <button
            className="btn btn-outline-danger"
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        ) : null} */}
      </div>
    </div>
  );
}

export default Nav;
