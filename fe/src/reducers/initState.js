const initState = {
    loading: false,
    error: false,
    user:localStorage.getItem("user") ? localStorage.getItem("user") : {},
    state_population:{},
    saved_graphs: localStorage.getItem("saved_graphs") ? localStorage.getItem("saved_graphs") : []
  };
  export default initState;