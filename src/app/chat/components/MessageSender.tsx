import useMessages from "@/api/hooks/useMessages"
import { AuthToken } from "@/api/services/AuthTokenService"
import { useState } from "react"

const MessageSender = () => {
  const token = new AuthToken()
  console.log(token.getToken)
  const [message, setMessage] = useState("")
  const { sendMessage } = useMessages()

  const handleSubmit = async () => {
    const validate = message.match(/^[^\s][a-zA-Z0-9\.,@\?;\s]+[^\s]$/)
    if (validate != null) {
      try {
        const res = await sendMessage(message)
        if (res) {
          console.log("hello")
          setMessage("")
        }
      } catch (error: any) {
        console.log("hi")
        if (error.status) {
          console.log(error)
        }
      }
    }
  }

  return (
    <form
      className="w-full max-w-xl flex"
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}
    >
      <input
        className="w-full bg-purple-200 text-purple-800 px-2"
        type="text"
        // pattern="[A-Za-z0-9?@:,.;]+"
        title="Can't use that caracter"
        onChange={(e) => {
          setMessage(e.target.value)
        }}
      />
      <button className="p-2 bg-purple-50 text-purple-950" type="submit">
        Send
      </button>
    </form>
  )
}

export default MessageSender
