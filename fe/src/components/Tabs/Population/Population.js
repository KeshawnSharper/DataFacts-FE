import React, { useState } from "react"
import { getPopulation,reset,saveData } from "../../../actions/actions"
import { connect } from "react-redux";
import Graphs from "../../Graphs/Graphs";
import States from "../../../data/States"
const Population = ({population,getPopulation,error,loading,reset,saveData}) => {
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
    getPopulation(place)
       }
    
      
   const handleSave = e => {
     e.preventDefault()
     if (!place.city){
       let data = {"user_id":localStorage.getItem("id"),
      "data":population,
      "id":`${localStorage.getItem("id")}_population_${States()[population[0].toUpperCase()]}_null`
      }
      saveData(data,"state_population")
     }
   }
   
    return (
        <div>
          { !loading && population.length === 6 && !error  ? 
          <div>
            {population.length === 6 ?
            <div style={{"width":"80%"}}>
            <Graphs population={population}/>
            <button className="log-in" onClick={e => handleSave(e)}>
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
     population:state.population,
     error:state.error,
     loading:state.loading
    };
  }
const mapDispatchToProps = (dispatch) => {
    return {
      getPopulation: (state) => {
        dispatch(getPopulation(state));
      },
      reset: (tab) => {
        dispatch(reset(tab))
      },
      saveData: (data,tab) => {
        dispatch(saveData(data,tab))
      }
    }
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Population);