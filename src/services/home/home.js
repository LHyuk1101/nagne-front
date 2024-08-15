import axios from 'axios';

const API_BASE_URL = '/api'; 

export const fetchPopularDestinations = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/popular-destinations`);
    
    return response.data;
  } catch (error) {
    console.error("Error fetching popular destinations:", error);
    throw error;  
  }
};

