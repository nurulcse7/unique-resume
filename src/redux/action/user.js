import axios from "axios";

export const login = (userInfo) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });
    const { data } = await axios.post(`/api/login`, userInfo, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: "loginFail", payload: error.response.data.error });
  }
};
export const register = (userInfo) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });
    const { data } = await axios.post(`/api/register`, userInfo, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "registerFail", payload: error.response.data.error });
  }
};
export const signOut = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });
    const { data } = await axios.get(`/api/logout`, {
      withCredentials: true,
    });

    dispatch({ type: "logoutSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "logoutFail", payload: error.response.data.error });
  }
};
export const getMyProfile = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });
    const { data } = await axios.get(`/api/user-details`, {
      withCredentials: true,
    });

    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error.response.data });
  }
};
export const forgotPass = (userInfo) => async (dispatch) => {
  try {
    dispatch({ type: "forgotPassRequest" });
    const { data } = await axios.post(`api/password/forgot`, userInfo, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    dispatch({ type: "forgotPassSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "forgotPassFail", payload: error.response });
  }
};

export const userData = () => async (dispatch) => {
  try {
    dispatch({ type: "forgotPassRequest" });
    const { data } = await axios.get(`api/allusers`, {
      withCredentials: true,
    });

    dispatch({ type: "forgotPassSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "forgotPassFail", payload: error.response });
  }
};
