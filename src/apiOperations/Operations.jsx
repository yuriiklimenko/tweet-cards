import axios from "axios";

axios.defaults.baseURL = "https://648bd40b8620b8bae7ebd606.mockapi.io/";

export const getUsers = async (page) => {
  const response = await axios.get(`/users/?page=${page}&limit=3`);
  return response.data;
};

export const updateUsersData = async (id, followers) => {
  const response = await axios.put(`users/${id}`, followers);
  return response.data;
};
