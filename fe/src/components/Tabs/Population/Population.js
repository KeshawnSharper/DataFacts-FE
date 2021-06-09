import React, { useState } from "react"
import { getStatePopulation,reset } from "../../../actions/actions"
import { connect } from "react-redux";
import Graphs from "../../Graphs/Graphs";

const Population = ({state_population,getStatePopulation,error,loading,reset}) => {
   const [place,setPlace] = useState({city:"",state:""})
   const [show,setShow] = useState(false)
    const handleChange = e => {
        console.log(place)
        setPlace({
            ...place,
            [e.target.name]:e.target.value
        })
   }
   const handleSubmit = e => {
    e.preventDefault()
    console.log(error)
    if (place.state !== ""){
        
           if (place.city !== ""){

           }
           else{
               console.log(place.state)

            getStatePopulation(place.state)
           
           }
       }
    
      
      console.log(show)
    
   }
   
    return (
        <div>
          { !loading && state_population.length === 6 && !error  ? 
          <div>
            {state_population.length === 6 ?
            <div style={{"width":"80%"}}>
            <Graphs state_population={state_population}/>
            <button className="log-in" onClick={e => handleSubmit(e)}>
              {" "}
              Save Population{" "}
            </button>
            <button className="log-in" onClick={e => reset("state_population")} style={{"margin-left":"20px"}}>
              {" "}
              Back{" "}
            </button>
            </div>
            :
            null
        }
        </div>
  :
        
        <form>
        <div className="con">
          <header className="head-form">
            <h2>Find Population</h2>
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
              name="state"
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
              name="city"
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
            <button className="log-in" onClick={e => {
              setShow(true)
              handleSubmit(e)}}>
              {" "}
              Find Population{" "}
            </button>
          </div>
         
        </div>
        
      </form>
}
      </div>
    )
}
function mapStateToProps(state) {
    return {
     state_population:state.state_population,
     error:state.error,
     loading:state.loading
    };
  }
const mapDispatchToProps = (dispatch) => {
    return {
      getStatePopulation: (state) => {
        dispatch(getStatePopulation(state));
      },
      reset: (tab) => {
        dispatch(reset(tab))
      }
    }
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Population);