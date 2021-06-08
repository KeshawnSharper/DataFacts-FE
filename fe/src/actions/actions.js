import axios from "axios";
import States from "../data/States"
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
// Get population by state
export function getStatePopulation(state){
return States[`${state}`]
}
// login action
export function login(user) {
  return (dispatch) => {
    //   Load Login
    dispatch({ type: "LOGIN_LOADING" });
    // send login credentials from Login page to the backend
    loginUser(user, dispatch);
  };
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
