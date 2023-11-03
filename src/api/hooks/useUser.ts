import { login as loginT } from "@/types/credentials"
import { AxiosError, AxiosResponse } from "axios"
import { axiosInstance } from "../axiosInstance"
import { signUpRes, token, userData } from "@/types/api"
import { message } from "../../types/api"

function useUser() {
  const login = async (credentials: loginT): Promise<token> => {
    try {
      const res = await axiosInstance.post<token>("/login", credentials)
      return res.data
    } catch (error: any) {
      if (error.response) {
        throw { status: error.response.status }
      } else {
        throw new Error(`Error during login: ${error}`)
      }
    }
  }

  const getUserData = async (): Promise<userData> => {
    const res = await axiosInstance.get("/auth/user")
    return res.data
  }

  const signUp = async (credentials: loginT): Promise<signUpRes> => {
    try {
      const res = await axiosInstance.post<signUpRes>("/signup", credentials)
      return res.data
    } catch (error: any) {
      if (error.response) {
        throw { status: error.response.status }
      } else {
        throw new Error(`Error during signup: ${error}`)
      }
    }
  }

  return {
    login,
    getUserData,
    signUp,
  }
}

export default useUser
