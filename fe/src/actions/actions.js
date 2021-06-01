import axios from "axios";
export function login(user) {

  return (dispatch) => {
    dispatch({ type: "LOGIN_LOADING" });
    axios
      .post(
        `https://datafacts-be.herokuapp.com/users/login`,user
      )
      .then((response) => {
        dispatch({
          type: "LOGIN",
          payload: response.data.properties
        });
        console.log(21, response.data);
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_FAIL", payload: err });
      });
  };
}