import React, { useState } from "react"
import { getPopulation,reset,saveData } from "../../../actions/actions"
import { connect } from "react-redux";
import Graphs from "../../Graphs/Graphs";
import States from "../../../data/States"
const Poverty = ({population,getPopulation,error,loading,reset,saveData}) => {
    const [year,setYear] = useState(null)
    const [show,setShow] = useState(false)
    const handleChange = e => {
        console.log(year)
        // setYear({
        //     ...year,
        //     [e.target.name]:e.target.value
        // })
   }
   const handleSubmit = e => {
    e.preventDefault()
    // getPopulation(place)
       }
    
      
   const handleSave = e => {
     e.preventDefault()
     if (!population[1]){
       let data = {"user_id":localStorage.getItem("id"),
      "data":population,
      "id":`${localStorage.getItem("id")}_population_${States()[population[0].toUpperCase()]}_null`
      }
      saveData(data,"state_population")
     }
     else{
      let data = {"user_id":localStorage.getItem("id"),
      "data":population,
      "id":`${localStorage.getItem("id")}_population_${States()[population[0].toUpperCase()]}_${population[1].toUpperCase()}`
      }
      saveData(data,"state_population")
     }
   }
   
    return (
        <div>
          { !loading && population.length === 7 && !error  ? 
          <div>
            {population.length === 7 ?
            <div style={{"width":"80%"}}>
            <Graphs population={population}/>
            <button className="log-in" onClick={e => handleSave(e)}>
              {" "}
              Save Population{" "}
            </button>
            <button className="log-in" onClick={e => reset("population")} style={{"margin-left":"20px"}}>
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
            <h2>Find Poverty Rate</h2>
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
              placeholder="Select year from 1959 to 2019"
              required
              onChange={(e) => handleChange(e)}
            />
            <br />
            
            {/* When the value changes the state will change based on property */}

            <br />
            {/* Submits the login credentials if form is filled to be checked by the backend  */}
            <button className="log-in" onClick={e => {
              setShow(true)
              handleSubmit(e)}}>
              {" "}
              Find {" "}
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
// const mapDispatchToProps = (dispatch) => {
//     return {
//       getPoverty: (tab) => {
//         dispatch(getPopulation(state));
//       },
//       reset: (tab) => {
//         dispatch(reset(tab))
//       },
//       saveData: (data,tab) => {
//         dispatch(saveData(data,tab))
//       }
//     }
//   };
  export default connect(mapStateToProps )(Poverty);