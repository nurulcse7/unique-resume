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
