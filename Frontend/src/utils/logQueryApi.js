import axios from "axios";

const logQueryApi = axios.create({
  baseURL: import.meta.env.VITE_API_PATH,
  withCredentials: true,
  headers: {
    Authorization: `${import.meta.env.VITE_API_SECRET}`,
  },
});
export { logQueryApi };
