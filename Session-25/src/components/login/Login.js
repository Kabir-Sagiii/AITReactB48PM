import { useContext } from "react";
import authContext from "../../context/AuthContext";

function Login() {
  const { login } = useContext(authContext);

  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row ">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="card p-2 shadow">
            <div className="card-header">
              <h3>Login form</h3>
            </div>
            <div className="card-body">
              <input
                type="text"
                className="form-control my-3"
                placeholder="Username"
              />
              <input
                type="password"
                className="form-control my-3"
                placeholder="Password"
              />

              <button
                className="btn btn-outline-primary px-5"
                onClick={() => {
                  login();
                }}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
