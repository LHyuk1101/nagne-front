import { RESPONSE_STATUS_ERROR } from "../../constants/constant.js";
import axiosInstance from "../common/axios.js";

export const fetchTemplates = async (area) => {
  const response = await axiosInstance(`/api/templates?area=${area}`);

  if (response.data.result === RESPONSE_STATUS_ERROR) {
    const error = new Error("An error occurred while fetching the place");
    error.code = response.status;
    error.info = await response;
    throw error;
  }

  const { data } = response;

  return data;
};
