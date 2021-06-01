import axios from "axios";
export function login(user) {
  return (dispatch) => {
    //   Load Login 
    dispatch({ type: "LOGIN_LOADING" })
    // send login credentials from Login page to the backend 
    axios
      .post(
        `https://datafacts-be.herokuapp.com/users/login`,user
      )
      .then((response) => {
        dispatch({
            // set the user object from redux state to the email and id from the response 
          type: "LOGIN",
          payload: {username:response.data.username,id:response.data.id}
        });
        // send the token to local storage 
        localStorage.setItem("token",response.data.token)
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_FAIL", payload: err });
      });
  };
}