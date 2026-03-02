import api from "../../api/axios";

export const getTasks = async (projectId) => {
  try {
    const { data } = await api.get(`/tasks/${projectId}`, {
      withCredentials: true,
    });
    return data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const createTask = async (projectId, taskData) => {
  try {
    const { data } = await api.post(`/tasks/${projectId}`, taskData);
    return data;
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};
