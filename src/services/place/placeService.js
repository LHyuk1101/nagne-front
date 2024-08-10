import axiosInstance from "../common/axios.js";

const getByRegions = (regions) => {
  return axiosInstance
    .get("/api/place", {
      params: { regions: regions.join(",") },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching places by regions:", error);
      throw error;
    });
};

export { getByRegions };
