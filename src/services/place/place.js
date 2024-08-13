import axiosInstance from "../common/axios.js";
import { RESPONSE_STATUS_ERROR } from "../../constants/constant.js";

const getPlaceByArea = async (areaCode, regions, page = 1, size = 10) => {
  const response = await axiosInstance.get("/api/place", {
    params: {
      regions,
      areaCode,
      page,
      size,
    },
  });

  if (response.data.result === RESPONSE_STATUS_ERROR) {
    const error = new Error("An error occurred while fetching the place");
    error.code = response.status;
    error.info = await response;
    throw error;
  }

  const { data } = response;

  const items = data.items.placeList;
  const totalCount = data.items.totalCount;

  const hasNextPage = page * size < totalCount;

  return {
    items,
    nextPage: hasNextPage ? page + 1 : undefined,
    totalCount,
    currentPage: page,
  };
};

export { getPlaceByArea };
