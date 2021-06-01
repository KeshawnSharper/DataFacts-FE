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
          payload: {username:response.data.username,id:response.data.id}
        });
        localStorage.setItem("token",response.data.token)
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_FAIL", payload: err });
      });
  };
}