import axios from "axios";

export const createPlan = async (planData) => {
  try {
    const response = await axios.post("/api/llm/create-plan", planData);
    return response.data;
  } catch (error) {
    console.error("Error creating plan:", error);
    throw error;
  }
};
