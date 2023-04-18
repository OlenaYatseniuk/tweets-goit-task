import axios from "axios";

const api = axios.create({
  baseURL: "https://6331b08acff0e7bf70f443d4.mockapi.io/test-users",
});

export const getAllUsers = async () => {
  try {
    const { data } = await api.get();
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const followUser = async (id, followers) => {
  try {
    await api.put(`/${id}`, {
      followers,
      isFollowed: true,
    });
  } catch (err) {
    console.error(err);
  }
};

export const unFollowUser = async (id, followers) => {
  try {
    await api.put(`/${id}`, {
      followers,
      isFollowed: false,
    });
  } catch (err) {
    console.error(err);
  }
};
