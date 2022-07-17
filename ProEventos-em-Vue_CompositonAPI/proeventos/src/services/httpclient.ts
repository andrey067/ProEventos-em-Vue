import axios, { AxiosInstance } from "axios";
const apiClient: AxiosInstance = axios.create({
    baseURL: "https://localhost:44374/api/",
    headers: {
        "Content-type": "application/json",
    },
});
export default apiClient;