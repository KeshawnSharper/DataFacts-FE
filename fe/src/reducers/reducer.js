import initState from "./initState";

export const StoreReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_LOADING":
      return {
        ...state,
        loading: true
      };
      case "LOGIN":

      return {
        ...state,
        loading: false,
        user:action.payload
      };
      case "LOGIN_FAIL":
      return {
        ...state,
        loading: false,
        error:true
      };
    default:
      return initState;
  }
};