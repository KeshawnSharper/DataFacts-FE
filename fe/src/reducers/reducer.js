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
        case "GET_POPULATION_LOADING":
          return {
            ...state,
            loading: true,
            population:[action.payload]
          };
          case "GET_POPULATION":
          return {
            ...state,
            loading: false,
            population:[...state.population,action.payload]
          };
          case "GET_POPULATION_FAIL":
          return {
            ...state,
            loading: false,
            error:true
          };
          case "RESET":
            if (action.payload === "population"){
              return {
                ...state,
                loading: false,
                error:false,
                population:[]
              }
            }
            case "SAVE_DATA_LOADING":
            
              return {
                ...state,
                loading: true,
              }
              case "SAVE_DATA":
            
                return {
                  ...state,
                  loading: false,
                  saved_graphs:[...state.saved_graphs,action.payload]
                }
                case "SAVE_DATA_FAIL":
            
                  return {
                    ...state,
                    loading: false,
                    error:true
                  }

           
    default:
      return initState;
  }
};
