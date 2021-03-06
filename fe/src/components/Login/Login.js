import React, { useState } from "react";
import "./Login.css";
import { login } from "../../actions/actions";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Link } from 'react-router-dom'

const Login = (props) => {
  // Set login state
  let [loginUser, setLoginUser] = useState({ username: "", password: "" });
  let [submitted, setSubmitted] = useState(false);
  let { user, login, error, loading } = props
  // Handle login state change
  const handleChange = (e) => {
    setLoginUser({
      ...loginUser,
      [e.target.name]: e.target.value
    });
  };
  const Login = (e) => {
    e.preventDefault();
    // change submit state to true
    setSubmitted(true);
    // if both the login credentials aren't empty strings execute the login action
    if (loginUser.username !== "" && loginUser.password !== "") {
      login(loginUser);
      
    }
  };
  return (
    // Not going to lie I copied some code to template so most of the code here I cant explain I just worked on the state and functions
    <>
    {
      localStorage.getItem("id") ?
      <Redirect to={`/home/population`} />
    :
    <div className="overlay">
      {loading ? (
        <div class="loader"></div>
      ) : (
        <form>
          <div className="con">
            <header className="head-form">
              <h2>Log In</h2>
              {/* If username or password is empty then send an error message, otherwise send a welcome message */}
              <p>
                {submitted && error
                  ? "Invalid Credentials, Please Try again"
                  : submitted
                  ? "Please provide a username and/or password"
                  : "WELCOME, Login with your Datafacts credentials"}
              </p>
            </header>
            <br />
            <div className="field-set">
              <span className="input-item">
                <i className="fa fa-user-circle" />
              </span>
              {/* When the value changes the state will change based on property */}
              <input
                className="form-input"
                id="txt-input"
                name="username"
                type="text"
                placeholder="Email"
                required
                onChange={(e) => handleChange(e)}
              />
              <br />
              <span className="input-item">
                <i className="fa fa-key" />
              </span>
              {/* When the value changes the state will change based on property */}

              <input
                className="form-input"
                type="password"
                name="password"
                placeholder="Password"
                id="pwd"
                name="password"
                required
                onChange={(e) => handleChange(e)}
              />
              <span>
                <i
                  className="fa fa-eye"
                  aria-hidden="true"
                  type="button"
                  id="eye"
                />
              </span>
              <br />
              {/* Submits the login credentials if form is filled to be checked by the backend  */}
              <button className="log-in" onClick={(e) => Login(e)}>
                {" "}
                Log In{" "}
              </button>
            </div>
            <div className="other">
              <button className="btn submits frgt-pass">Forgot Password</button>
              <Link to={`/register`}><button className="btn submits sign-up">
                Sign Up
                <i className="fa fa-user-plus" aria-hidden="true" />
              </button>
              </Link>
            </div>
          </div>
        </form>
      )}
    </div>
}
    </>
  );
};
// state variables from the redux store
function mapStateToProps(state) {
  return {
    user: state.user,
    loading: state.loading,
    error: state.error
  };
}
// Login action will send the loginUser state to the redux store to adjust the store based on the response from the backend
const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(login(user));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
