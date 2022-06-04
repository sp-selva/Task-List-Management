import "./App.css";
import Jokesspot from "./components/Jokesspot";
import Login from "./components/Login";
import Edittask from "./components/Edittask";
import Viewtasks from "./components/Viewtasks";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// import PrivateRouter from "./components/Router/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="bg-light">
          <nav className="navbar navbar-expand-lg navbar-light container bg-light">
            <Link className="navbar-brand logo" to="/">
              Tasklist Management
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Edittask" className="nav-link">
                    Create Task
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Viewtasks" className="nav-link">
                    View Task
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/Jokesspot" className="nav-link">
                    Jokesspot
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          {/* <Route element={<PrivateRouter />}> */}
            <Route exact path="/Edittask" element={<Edittask />}></Route>
            <Route exact path="/Viewtasks" element={<Viewtasks />}></Route>
            <Route exact path="/Jokesspot" element={<Jokesspot />}></Route>
          {/* </Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
