import axios from "axios";
import States from "../data/States"
// loop through years
let states = States()
function loopThroughYears(tab,place,dispatch){
  let res = []
  if(place.city === ""){
  dispatch({
    type:'GET_POPULATION_LOADING',
    state:place.state,
    city:null,
  })

  for (let year = 2015;year < 2020;year++){
    axios.get(`https://api.census.gov/data/${year}/pep/${tab}?get=POP&for=state:${states[place.state.toUpperCase()]}&key=b4f1226e4e527db3a8c7fe012fc73663bb98bf3f`)
    .then(data => {
      console.log(data)
      dispatch({
        type: "GET_POPULATION",
        payload: {"year":year,"population":Number(data.data[1][0])}
      })
    })
  }

}
  else{
    dispatch({
      type:'GET_POPULATION_LOADING',
      state:place.state,
      city:place.city
    })
    axios.get(`https://api.census.gov/data/2019/pep/population?get=NAME,POP&for=place:*&in=state:${states[place.state.toUpperCase()]}`)
    .then(data => {
      console.log(data.data)
      let place_code = data.data.filter(setting => setting[0].toUpperCase() === `${place.city } City, ${place.state}`.toUpperCase() )[0][3]
      for (let year = 2015;year < 2020;year++){
        axios.get(`https://api.census.gov/data/${year}/pep/population?get=POP&for=place:${place_code}&in=state:${Number(states[place.state.toUpperCase()])}`)
        .then(data => {
          dispatch({
            type: "GET_POPULATION",
            payload: {"year":year,"population":Number(data.data[1][0])}
          })
        })
      }
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
      localStorage.setItem("username",response.data.username)
      localStorage.setItem("id",response.data.id)
    })
    .catch((err) => dispatch({ type: "LOGIN_FAIL", payload: err }));
}
// 
function saveGraphData(data, tab,dispatch) {
  return axios
    .post(`http://localhost:5000/facts`, data)
    .then((response) => {
      dispatch({
        type: "SAVE_DATA",
        payload: data,
        tab:tab
      })
      console.log(response)
    })
    .catch((err) => dispatch({ type: "SAVE_DATA_FAIL", payload: err }));
}
// Get population by state
export function getPopulation(place){
  return (dispatch) => {
  loopThroughYears("population",place,dispatch)
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
export function getPoverty(year){
  return (dispatch) => {
    dispatch({
      type:'GET_POVERTY_LOADING',
      year:year,
    })
    [1,3,8,11,12].map(race => {
      axios.get(`https://api.census.gov/data/timeseries/poverty/histpov2?get=PCTPOV&time=${year}&RACE=${race}`).then(
        data => {
          dispatch({
            // Loggs that the user is successfully registered
            type: "GET_POVERTY",
            payload:data.data[1][0]
          });
        }
      )
    })
    
}
  }
