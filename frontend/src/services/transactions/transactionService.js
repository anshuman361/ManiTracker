import axios from "axios";
import { BASE_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/getUserFromStore";

//! Add
export const addTransactionAPI = async ({
  type,
  category,
  date,
  description,
  amount,
}) => {
  const token = getUserFromStorage();
  const response = await axios.post(
    `${BASE_URL}/transactions/create`,
    {
      category,
      date,
      description,
      amount,
      type,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    },
  );
  //Return a promise
  return response.data;
};
//! update
export const updateTransactionAPI = async ({ name, type, id }) => {
  const token = getUserFromStorage();
  const response = await axios.put(
    `${BASE_URL}/transactions/update/${id}`,
    {
      name,
      type,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  //Return a promise
  return response.data;
};
//! delete
export const deleteTransactionAPI = async (id) => {
  const token = getUserFromStorage();
  const response = await axios.delete(`${BASE_URL}/transactions/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //Return a promise
  return response.data;
};
//! lists
export const listTransactionsAPI = async ({
  category,
  type,
  startDate,
  endDate,
}) => {
  const token = getUserFromStorage();
  const response = await axios.get(`${BASE_URL}/transactions/lists`, {
    params: { category, endDate, startDate, type },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //Return a promise
  return response.data;
};
