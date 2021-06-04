import React, { useState } from "react";
import "../Login/Login.css";
import { register } from "../../actions/actions";
import { connect } from "react-redux";
import HomeDrawer from "../HomeDrawer/HomeDrawer";
const Home = ({ user, register, error, loading }) => {
  // Set login state
  let [registerUser, setRegisterUser] = useState({
    username: "",
    password: "",
    re_password: ""
  });
  let [submitted, setSubmitted] = useState(false);
  // Handle login state change
  const handleChange = (e) => {
    setRegisterUser({
      ...registerUser,
      [e.target.name]: e.target.value
    });
  };

  return (
    // Not going to lie I copied some code to template so most of the code here I cant explain I just worked on the state and functions
    <div className="overlay">
      {loading ? (
        <div class="loader"></div>
      ) : (
        <>
          <HomeDrawer />
        </>
      )}
    </div>
  );
};
// state variables from the redux store
function mapStateToProps(state) {
  return {
    user: state.user,
    loading: state.loading,
    error: state.error
  };
}
// Login action will send the loginUser state to the redux store to adjust the store based on the response from the backend
const mapDispatchToProps = (dispatch) => {
  return {
    register: (user) => {
      dispatch(register(user));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
