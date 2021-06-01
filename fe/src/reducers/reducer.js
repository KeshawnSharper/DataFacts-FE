import initState from "./initState";

export const StoreReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_LOADING":
      // Update total price of cart items
      // Subtract item base price + item quantity
      return {
        ...state,
        loading: true
      };
      case "LOGIN":
      // Update total price of cart items
      // Subtract item base price + item quantity
      return {
        ...state,
        loading: false,
        user:action.payload
      };
      case "LOGIN_FAIL":
      // Update total price of cart items
      // Subtract item base price + item quantity
      return {
        ...state,
        loading: false,
        error:true
      };
    default:
      return initState;
  }
};