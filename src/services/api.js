import axios from 'axios';

const BASE_URL = 'https://faff-backend-z5mh.onrender.com/api';

export const fetchTasksForAssignee = async (assignee) => {
  const res = await axios.get(`${BASE_URL}/tasks/${assignee}`);
  return res.data;
};

export const updateTask = async (id, updates) => {
  const res = await axios.put(`${BASE_URL}/tasks/update/${id}`, updates);
  return res.data;
};
