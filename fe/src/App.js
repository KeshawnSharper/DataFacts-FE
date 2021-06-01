import logo from './logo.svg';
import './App.css';
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Link,
  withRouter
} from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Router>
    
        
    
    <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/register" component={Register} />
   
      {/* <ProtectedRoute exact path="/home" component={Content} /> */}
    </Switch>
    </Router>
    
    </div>
  );
}

export default App;
