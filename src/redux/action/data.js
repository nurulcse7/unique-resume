import axiosInstance from "../../utils/axiosInstance.js";

export const cvData = () => async (dispatch) => {
  try {
    dispatch({ type: "cvDataRequest" });
    const { data } = await axiosInstance.get(`/api/cv`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });
    dispatch({ type: "cvDataSuccess", payload: data });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: "cvDataFail", payload: error.response.data });
  }
};

export const cvTemplate = () => async (dispatch) => {
  try {
    dispatch({ type: "cvTemplateReq" });
    const { data } = await axiosInstance.get(`/api/getcv`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch({ type: "cvTemplateSuccess", payload: data });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: "cvTemplateFail", payload: error.response.data });
  }
};
export const coverTemplate = () => async (dispatch) => {
  try {
    dispatch({ type: "coverTemplateReq" });
    const { data } = await axiosInstance.get(`/api/getcoverletter`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch({ type: "coverTemplateSuccess", payload: data });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: "coverTemplateFail", payload: error.response.data });
  }
};
// Abdur Rahman

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "getAllUsersReq" });
    const { data } = await axiosInstance.get(`/api/allusers`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch({ type: "getAllUsersSuccess", payload: data });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: "getAllUsersFail", payload: error.response.data });
  }
};
