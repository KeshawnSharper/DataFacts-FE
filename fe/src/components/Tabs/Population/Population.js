import React, { useState } from "react"
import { getStatePopulation } from "../../../actions/actions"
import { connect } from "react-redux";

const Population = ({state_population,getStatePopulation}) => {
   const [place,setPlace] = useState({city:"",state:""})
    const handleChange = e => {
        setPlace({
            ...place,
            [e.target.name]:e.target.value
        })
   }
//    const handleSubmit = e => {
       
//     getStatePopulation(e)
//    }
    return (
        <form>
        <div className="con">
          <header className="head-form">
            <h2>Find Population</h2>
            {/* If username or password is empty then send an error message, otherwise send a welcome message */}
            {/* <p>
              {submitted && error
                ? "Invalid Credentials, Please Try again"
                : submitted
                ? "Please provide a username and/or password"
                : "WELCOME, Login with your Datafacts credentials"}
            </p> */}
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
              name="State"
              type="text"
              placeholder="State"
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
              type="text"
              name="City"
              placeholder="City"
              id="pwd"
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
            <button className="log-in">
              {" "}
              Find Population{" "}
            </button>
          </div>
         
        </div>
      </form>
    )
}
function mapStateToProps(state) {
    return {
     state_population:state.state_population
    };
  }
const mapDispatchToProps = (dispatch) => {
    return {
      getStatePopulation: (state) => {
        dispatch(getStatePopulation(state));
      }
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Population);