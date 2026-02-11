import api from "../api/axios";

const getItemFromDb = async (endpoint) => {
  try {
    const response = await api.get(endpoint, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

const postItemToDb = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    throw error;
  }
};

export { getItemFromDb, postItemToDb };
