import axiosInstance from "../../utils/axiosInstance";

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
// Abdur Rahman
