import axiosInstance from "../common/axios.js";
import { RESPONSE_STATUS_ERROR } from "../../constants/constant.js";

const getPlaceByArea = async (areaCode, regions, page) => {
  const response = await axiosInstance.get("/api/place?page=1&size=1000", {
    params: {
      regions,
      areaCode,
    },
  });

  if (response.data.result === RESPONSE_STATUS_ERROR) {
    const error = new Error("An error occurred while fetching the place");
    error.code = response.status;
    error.info = await response;
  }

  const { data } = response;

  return data;
};

export { getPlaceByArea };
