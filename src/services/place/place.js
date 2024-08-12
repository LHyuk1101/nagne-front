import axiosInstance from "../common/axios.js";
import { RESPONSE_STATUS_ERROR } from "../../constants/constant.js";

const getPlaceByArea = async (regions, areaCode, page, size) => {
  const response = await axiosInstance.get(
    "/api/place?regions=76&page=1&size=1000&areaCode=1",
  );

  if (response.data.result === RESPONSE_STATUS_ERROR) {
    const error = new Error("An error occurred while fetching the place");
    error.code = response.status;
    error.info = await response;
  }

  const { data } = response;

  return data;
};

export { getPlaceByArea };
