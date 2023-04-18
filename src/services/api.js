import axios from "axios";

const api = axios.create({
  baseURL: "https://6331b08acff0e7bf70f443d4.mockapi.io/test-users",
});

export const getAllUsers = async () => {
  try {
    const { data } = await api.get();
    // console.log(data);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
