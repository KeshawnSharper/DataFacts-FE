import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home"
import ProtectedRoute from "./ProtectedRoute"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <ProtectedRoute exact path="/home/:tab" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
