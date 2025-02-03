import axios from "axios";
import { isTokenExpired } from "./isTokenExpired";
import { logQueryApi } from "./logQueryApi";
const api = axios.create({
  baseURL: import.meta.env.VITE_API_PATH,
  withCredentials: true,
});

api.interceptors.request.use(
  async (modify) => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      await newTokenAccess();
    }
    if (token) {
      modify.headers.authorization = `${
        import.meta.env.VITE_API_SECRET
      } ${token}`;
    } else {
      console.log("Sorry, you are not authorized.");
    }
    if (token && isTokenExpired(token) === true) {
      await newTokenAccess();
    }
    return modify;
  },
  (error) => {
    return new Error(error.message);
  }
);

const newTokenAccess = async () => {
  try {
    const response = await logQueryApi.post("/admin/token");
    if (response && response.data) {
      const newToken = response.data;
      sessionStorage.setItem("token", newToken);
      alert("Your token has been expire");
      window.location.reload();
    } else {
      return new Error("Not Found !");
    }
  } catch (e) {
    console.error(e);
  }
};

export { api, newTokenAccess };
