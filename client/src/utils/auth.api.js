import axios from "axios";
const api = axios.create({
  baseURL: "http://localhost:4000/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = async ({username, email, password}) => {
  try {
    const response = await api.post("/register", {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (data) => {
  try {
    const {email, password} = data;
    const response = await api.post("/login", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export const verifyEmail = async ({token,id}) => {
  try {
    const response = await api.get(`/${id}/verify/${token}`);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
export const verifyOTP = async ({otp,id}) => {
  try {
    const response = await api.post(`/verify2FA/${id}`, {otp});
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
