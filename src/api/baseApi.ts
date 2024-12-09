import axios from "axios";

const baseApi = axios.create({
  baseURL: "https://findwork.dev/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer 7b9b2bb2bb8e8bdcee439aa6f9bfdcd1cf19c4f3",
  },
});

export default baseApi;
