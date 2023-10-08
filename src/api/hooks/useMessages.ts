import { message } from "@/types/api"
import { axiosInstance } from "../axiosInstance"
import { messages } from "@/mocks/messages"

export default function useMessages() {
  // const getMessages = async (): Promise<message[]> => {
  //   return await axiosInstance.get("api/v1/messages").then((res) => res.data)
  // }

  const getMessages = async (): Promise<message[]> => {
    return await new Promise((resolve) => {
      setTimeout(() => resolve(messages), 2000)
    })
  }

  return { getMessages }
}
