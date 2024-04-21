import axios from "axios";
import { auth } from "../config";

const getToken = async () => {
  return await auth.currentUser?.getIdToken();
};

class AxiosApiService {
  constructor() {
    this.service = axios.create({
      baseURL: import.meta.env.VITE_APP_API + "/",
      // withCredentials: true,
    });
  }

  async get(endpoint, params = {}) {
    const response = await this.service.get(endpoint, {
      params,
      headers: { Authorization: `Bearer ${await getToken()}` },
    });
    return response.data;
  }

  async post(endpoint, data, params) {
    const response = await this.service.post(endpoint, data, {
      params,
      headers: { Authorization: `Bearer ${await getToken()}` },
    });
    return response.data;
  }

  async put(endpoint, data, params) {
    const response = await this.service.put(endpoint, data, {
      params,
      headers: { Authorization: `Bearer ${await getToken()}` },
    });
    return response.data;
  }

  async delete(endpoint, params) {
    const response = await this.service.delete(endpoint, {
      params,
      headers: { Authorization: `Bearer ${await getToken()}` },
    });
    return response.data;
  }
}
export const axiosservice = new AxiosApiService();
