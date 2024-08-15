import axios from "axios";

export const fetchPlans = async (userId) => {
  const response = await axios.get(`/api/users/${userId}/plans`);
  return response.data;
};

export const fetchPlanDetails = async (planId) => {
  try {
    const response = await axios.get(`/api/plans/${planId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching plan details:", error);
    throw error;
  }
};
