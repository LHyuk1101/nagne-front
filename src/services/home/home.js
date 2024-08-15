import axiosInstance from "../common/axios.js";

export const fetchPopularDestinations = async () => {
  try {
    const response = await axiosInstance.get(`/api/populardestinations`);

    return response.data;
  } catch (error) {
    console.error("Error fetching popular destinations:", error);
    throw error;
  }
};
