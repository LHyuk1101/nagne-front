import axiosInstance from "../common/axios";

export const fetchPlans = async (userId) => {
  try {
    const response = await axiosInstance.get(`/api/users/${userId}/plans`);
    console.log("Fetched plans response:", response.data);
    if (response.data.result === "SUCCESS") {
      return response.data.items;
    } else {
      throw new Error(response.data.message || "Failed to fetch plans");
    }
  } catch (error) {
    console.error("Error fetching plans:", error.response || error);
    throw error;
  }
};

export const fetchPlanDetails = async (planId) => {
  try {
    const response = await axiosInstance.get(`/api/plans/${planId}`);
    console.log("Fetched plan details response:", response.data);
    if (response.data.result === "SUCCESS") {
      return response.data.items;
    } else if (response.data.result === "ERROR") {
      throw new Error(
        response.data.message?.message || "Failed to fetch plan details",
      );
    } else {
      throw new Error("Unexpected response format");
    }
  } catch (error) {
    console.error("Error fetching plan details:", error.response || error);
    if (error.response?.data?.message) {
      throw new Error(
        error.response.data.message.message || error.response.data.message,
      );
    }
    throw error;
  }
};
