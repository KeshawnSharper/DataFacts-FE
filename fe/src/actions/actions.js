import axios from "axios";
function loginUser(user, dispatch) {
  return axios
    .post(`https://datafacts-be.herokuapp.com/users/login`, user)
    .then((response) =>
      dispatch({
        type: "LOGIN",
        payload: { username: response.data.username, id: response.data.id }
      })
    )
    .catch((err) => dispatch({ type: "LOGIN_FAIL", payload: err }));
}
export function login(user) {
  return (dispatch) => {
    //   Load Login
    dispatch({ type: "LOGIN_LOADING" });
    // send login credentials from Login page to the backend
    loginUser(user, dispatch);
  };
}
export function register(user) {
  return (dispatch) => {
    //   Load Login
    dispatch({ type: "REGISTER_LOADING" });
    // send login credentials from Login page to the backend
    axios
      .post(`https://datafacts-be.herokuapp.com/users/register`, user)
      .then((response) => {
        dispatch({
          // set the user object from redux state to the email and id from the response
          type: "REGISTER",
          payload: { username: response.data.username, id: response.data.id }
        });
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
