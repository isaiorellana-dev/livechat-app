import { messages } from "@/mocks/messages"
import { message } from "@/types/api"

export default function useMessages() {
  const getMessages = async (): Promise<message[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(messages)
      }, 2000)
    })
  }

  return { getMessages }
}
