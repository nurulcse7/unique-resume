import axios from "axios";

export const login = (userInfo) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });
    const { data } = await axios.post(
      `https://unique-resume.onrender.com/api/login`,
      userInfo,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: "loginFail", payload: error.response.data.error });
  }
};
export const register = (userInfo) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });
    const { data } = await axios.post(
      `https://unique-resume.onrender.com/api/register`,
      userInfo,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "registerFail", payload: error.response.data.error });
  }
};
export const signOut = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });
    const { data } = await axios.get(
      `https://unique-resume.onrender.com/api/logout`,
      {
        withCredentials: true,
      }
    );

    dispatch({ type: "logoutSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "logoutFail", payload: error.response.data.error });
  }
};
export const getMyProfile = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });
    const { data } = await axios.get(
      `https://unique-resume.onrender.com/api/user-details`,
      {
        withCredentials: true,
      }
    );

    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loadUserFail", payload: error.response.data });
  }
};
