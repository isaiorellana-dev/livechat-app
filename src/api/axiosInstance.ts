import axios from "axios"
import { AuthToken } from "./services/AuthTokenService"

const tokenService = new AuthToken()

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL_API,
})

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${tokenService.getToken}`
  return config
})
