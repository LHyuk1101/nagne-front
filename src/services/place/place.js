import axiosInstance from "../common/axios.js";
import { RESPONSE_STATUS_ERROR } from "../../constants/constant.js";

const getPlaceByArea = async ({
  selectedCategory,
  areaCode,
  page = 1,
  size = 10,
  searchTerm,
  signal,
}) => {
  let url = "/api/place";
  if (searchTerm) {
    url += `?searchTerm=${searchTerm}`;
  }
  const regions = selectedCategory.code;
  console.log(searchTerm);
  const response = await axiosInstance.get(url, {
    params: {
      regions,
      areaCode,
      page,
      size,
    },
    signal,
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
