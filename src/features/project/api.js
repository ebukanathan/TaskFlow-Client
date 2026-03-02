import api from "../../api/axios";

export const getProject = async () => {
  try {
    const { data } = await api.get("/projects");
    return data;
  } catch (error) {
    console.log("there is an error:", error);
    throw error;
  }
};

export const createProject = async (name) => {
  try {
    const { data } = await api.post("/projects", { name });
    return data;
  } catch (error) {
    console.log("error creating project:", error);
    throw error;
  }
};
