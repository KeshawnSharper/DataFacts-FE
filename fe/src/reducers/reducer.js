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
        user: action.payload
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        loading: false,
        error: true
      };
    case "REGISTER_LOADING":
      return {
        ...state,
        loading: true
      };
    case "REGISTER":
      return {
        ...state
      };
    case "REGISTER_FAIL":
      return {
        ...state,
        loading: false,
        error: true
      };
      case "REGISTER_LOADING":
        return {
          ...state,
          loading: true
        };
        case "REGISTER":
        return {
          ...state,
          loading: false,
          user:action.payload
        };
        case "REGISTER_FAIL":
        return {
          ...state,
          loading: false,
          error:true
        };
        case "GET_STATE_POPULATION_LOADING":
          return {
            ...state,
            loading: true
          };
          case "GET_STATE_POPULATION":
          return {
            ...state,
            loading: false,
            state_population:action.payload
          };
          case "GET_STATE_POPULATION_FAIL":
          return {
            ...state,
            loading: false,
            error:true
          };
    default:
      return initState;
  }
};
