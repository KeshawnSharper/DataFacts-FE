import React,{useState} from "react"
import "../Login/Login.css"
import {
  register
 } from "../../actions/actions";
import { connect } from "react-redux";

const Register = ({user,register,error,loading}) => {
    // Set login state
let [registerUser,setRegisterUser] = useState({username:"",password:"",re_password:""})
let [submitted,setSubmitted] = useState(false)
// Handle login state change
const handleChange = e => {
    setRegisterUser({
    ...registerUser,
    [e.target.name]:e.target.value
})
}
const Register = e => {
    e.preventDefault()
    // change submit state to true
    setSubmitted(true)
    // if both the login credentials aren't empty strings execute the login action
    if (registerUser.username !== "" && registerUser.password !== ""){
        register(registerUser)
    }
    
}
return(
    // Not going to lie I copied some code to template so most of the code here I cant explain I just worked on the state and functions
    <div className="overlay">
        {loading ? 
        <div class="loader"></div>
        :
    <form>
      <div className="con">
        <header className="head-form">
          <h2>Register</h2>
          {/* If username or password is empty then send an error message, otherwise send a welcome message */}
          <p>{submitted && error ? "Invalid Credentials, Please Try again" : submitted  ? "Please provide a username and/or password": "WELCOME, sign up for a free Datafacts account"}</p>
        </header>
        <br />
        <div className="field-set">
          <span className="input-item">
            <i className="fa fa-user-circle" />
          </span>
          {/* When the value changes the state will change based on property */}
          <input className="form-input" id="txt-input" name="username" type="text" placeholder="Email" required onChange={e => handleChange(e)}/>
          <br />
          <span className="input-item">
            <i className="fa fa-key" />
          </span>
        {/* When the value changes the state will change based on property */}

          <input className="form-input" type="password" name="password" placeholder="Password" id="pwd" name="password" required onChange={e => handleChange(e)} />
          <span>
            <i className="fa fa-eye" aria-hidden="true" type="button" id="eye" />
          </span>
          <input className="form-input" type="password" name="password" placeholder="Password" id="pwd" name="password" required onChange={e => handleChange(e)} />
          <span>
            <i className="fa fa-eye" aria-hidden="true" type="button" id="eye" />
          </span>
          <br />
          {/* Submits the login credentials if form is filled to be checked by the backend  */}
          <button className="log-in" onClick={e =>Register(e)}> Sign Up </button>
        </div>
        <div className="other">
          <button className="btn submits frgt-pass">Forgot Password</button>
          <button className="btn submits sign-up">Log In 
            <i className="fa fa-user-plus" aria-hidden="true" />
          </button>
        </div>
      </div>
    </form>
}
  </div>
)
}
// state variables from the redux store 
function mapStateToProps(state) {
    return {
      user: state.user,
      loading: state.loading,
      error:state.error
    };
  }
// Login action will send the registerUser state to the redux store to adjust the store based on the response from the backend
  const mapDispatchToProps = (dispatch) => {
    return {
      register: (user) => {
        dispatch(register(user));
      }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Register);
