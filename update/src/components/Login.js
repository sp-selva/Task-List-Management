import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function Login({setIsLogin}) {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const adminLogin = {
    email: "task@gmail.com",
    password: "task@123",
  };

  const loginHandle = (e, details) => {
    const MySwal = withReactContent(Swal);
    e.preventDefault();
    if (name === adminLogin.email && password === adminLogin.password) {
      MySwal.fire({
        title: <strong>Welcome</strong>,
        html: <i>Your Login Successfully!</i>,
        icon: "success",
      }).then(function () {
        window.location = "/Edittask";
      });
    } else {
      MySwal.fire({
        title: <strong>Error</strong>,
        html: <i>Invalid Login Details</i>,
        icon: "error",
      }).then(function () {
        window.location = "/";
      });
    }
  };

  return (
    <div className="loginComp">
      <div className="logincard col-md-4">
        <div className="login_logo text-center mb-4">
          <h3>Task List Management</h3>
        </div>
        <div className="text-left">
          <form onSubmit={loginHandle}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
