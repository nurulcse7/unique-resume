import axiosInstance from "../../utils/axiosInstance.js";

export const resumeData = () => async (dispatch) => {
  try {
    dispatch({ type: "resumeDataRequest" });
    const { data } = await axiosInstance.get(`/api/getresume`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
      withCredentials: true,
    });
    dispatch({ type: "resumeDataSuccess", payload: data });
  } catch (error) {
    dispatch({ type: "resumeDataFail", payload: error.response });
  }
};
