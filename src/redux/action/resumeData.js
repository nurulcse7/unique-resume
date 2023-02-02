import axiosInstance from "../../utils/axiosInstance";

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
    console.log(error.response);
    dispatch({ type: "resumeDataFail", payload: error.response.data });
  }
};
