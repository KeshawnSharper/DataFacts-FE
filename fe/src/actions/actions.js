import axios from "axios";
import States from "../data/States"
// loop through years
let states = States()
function loopThroughYears(tab,state,dispatch,state_name){
  let res = []
  dispatch({
    type:'GET_STATE_POPULATION_LOADING',
    payload:state_name
  })
  
  for (let year = 2015;year < 2020;year++){
    axios.get(`https://api.census.gov/data/${year}/pep/${tab}?get=POP&for=state:${Number(state)}&key=b4f1226e4e527db3a8c7fe012fc73663bb98bf3f`)
    .then(data => {
      dispatch({
        type: "GET_STATE_POPULATION",
        payload: {"year":year,"population":Number(data.data[1][0])}
      })
    })
  }

}
// function to login users for register and login actions

function loginUser(user, dispatch) {
  return axios
    .post(`https://datafacts-be.herokuapp.com/users/login`, user)
    .then((response) => {
      dispatch({
        type: "LOGIN",
        payload: { username: response.data.username, id: response.data.id }
      })
      console.log(response)
      localStorage.setItem("token",response.data.token)
    })
    .catch((err) => dispatch({ type: "LOGIN_FAIL", payload: err }));
}
// 
function saveGraphData(data, dispatch) {
  return axios
    .post(`http://localhost:3000/facts`, data)
    .then((response) => {
      dispatch({
        type: "SAVE_DATA",
        payload: data
      })
      console.log(response)
      localStorage.setItem("token",response.data.token)
    })
    .catch((err) => dispatch({ type: "SAVE_DATA_FAIL", payload: err }));
}
// Get population by state
export function getStatePopulation(state){
  return (dispatch) => {
  loopThroughYears("population",states[state.toUpperCase()],dispatch,state)
}
}
// login action
export function login(user) {
  return (dispatch) => {
    //   Load Login
    dispatch({ type: "LOGIN_LOADING" });
    // send login credentials from Login page to the backend
    loginUser(user, dispatch);
  }
}
// register action that logs user in once registered
export function register(user) {
  return (dispatch) => {
    //   Load register
    dispatch({ type: "REGISTER_LOADING" });
    // send register credentials to backend
    axios
      .post(`https://datafacts-be.herokuapp.com/users/register`, user)
      .then((response) => {
        dispatch({
          // Loggs that the user is successfully registered
          type: "REGISTER"
        });
        // Use the login user action to login the registered user
        loginUser(
          { username: user.username, password: user.password },
          dispatch
        );
      })
      .catch((err) => {
        dispatch({ type: "REGISTER_FAIL", payload: err });
      });
  };
}
// reset the array 
export function reset(tab) {
  return (dispatch) => {
    dispatch({
      // Loggs that the user is successfully registered
      type: "RESET",
      payload:tab
    });
  }
}
export function saveData(data,tab) {
  return (dispatch) => {
    //   Load Login
    dispatch({ type: "SAVE_DATA_LOADING" });
    // send login credentials from Login page to the backend
    saveGraphData(data, tab,dispatch);
  }
}

