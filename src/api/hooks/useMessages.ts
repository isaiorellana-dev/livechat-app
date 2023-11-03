import { message } from "@/types/api"
import { axiosInstance } from "../axiosInstance"

export default function useMessages() {
  const getMessages = async (): Promise<message[]> => {
    return await axiosInstance.get("/messages").then((res) => res.data)
  }

  // const getMessages = async (): Promise<message[]> => {
  //   return await new Promise((resolve) => {
  //     setTimeout(() => resolve(messages), 2000)
  //   })
  // }

  const sendMessage = async (message: string): Promise<message> => {
    try {
      const res = await axiosInstance.post<message>("/messages", {
        body: message,
      })
      return res.data
    } catch (error: any) {
      if (error.response) {
        throw { status: error.response.status }
      } else {
        throw new Error(error)
      }
    }
  }

  return { getMessages, sendMessage }
}
