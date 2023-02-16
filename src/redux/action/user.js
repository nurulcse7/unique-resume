import axiosInstance from "../../utils/axiosInstance.js";
export const login = (userInfo) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });
    const { data } = await axiosInstance.post(`/api/login`, userInfo, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
    dispatch({ type: "loginSuccess", payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "loginFail", payload: error.response });
  }
};
export const register = (userInfo) => async (dispatch) => {
  try {
    dispatch({ type: "registerRequest" });
    const { data } = await axiosInstance.post(`/api/register`, userInfo, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    if (data.token) {
      localStorage.setItem("token", data.token);
    }
    dispatch({ type: "registerSuccess", payload: data });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: "registerFail", payload: error.response.data.message });
  }
};
export const signOut = () => async (dispatch) => {
  try {
    dispatch({ type: "logoutRequest" });
    const { data } = await axiosInstance.get(`/api/logout`, {
      withCredentials: true,
    });
    if (data) {
      localStorage.removeItem("token");
    }
    dispatch({ type: "logoutSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "logoutFail", payload: error.response.data.error });
  }
};
export const getMyProfile = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });
    const { data } = await axiosInstance.get(`/api/user-details`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });

    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loadUserFail" });
  }
};
export const updateProfile = (role) => async (dispatch) => {
  try {
    dispatch({ type: "updateProfileRequest" });
    const { data } = await axiosInstance.put(`/api/update-profile`, role, {
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });

    dispatch({ type: "updateProfileSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "updateProfileFail" });
  }
};
export const forgotPass = (userInfo) => async (dispatch) => {
  try {
    dispatch({ type: "forgotPassRequest" });
    const { data } = await axiosInstance.post(
      `/api/password/forgot`,
      userInfo,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }
    );

    dispatch({ type: "forgotPassSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "forgotPassFail", payload: error.response });
  }
};

export const userData = () => async (dispatch) => {
  try {
    dispatch({ type: "forgotPassRequest" });
    const { data } = await axiosInstance.get(`/api/allusers`, {
      withCredentials: true,
    });

    dispatch({ type: "forgotPassSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "forgotPassFail", payload: error.response });
  }
};

// Abdur Rahman
