import axios, { AxiosError, AxiosResponse } from "axios";

export const ApiReq = axios.create({
  baseURL: "/api",
});

ApiReq.interceptors.request.use((config) => {
  return config;
});

ApiReq.interceptors.response.use(
  (res: AxiosResponse) => {
    console.log("res", res);
    return res;
  },
  async (error: AxiosError) => {
    console.log("error", error);

    return Promise.reject(error);
  }
);

export default ApiReq;
