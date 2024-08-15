import axiosInstance from "../common/axios";

export const fetchPlans = async (userId) => {
  try {
    const response = await axiosInstance.get(`/api/users/${userId}/plans`);
    return response.data.items; // API 응답 구조에 맞춰 items 반환
  } catch (error) {
    console.error("Error fetching plans:", error);
    throw error;
  }
};

export const fetchPlanDetails = async (planId) => {
  try {
    const response = await axiosInstance.get(`/api/plans/${planId}`);
    return response.data.items; // API 응답 구조에 맞춰 items 반환
  } catch (error) {
    console.error("Error fetching plan details:", error);
    throw error;
  }
};
