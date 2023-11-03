import { NONE } from "@/constants/strings"

function Error({ message }: { message: string }) {
  return (
    <p className={`${message == NONE && "opacity-0"} capitalize text-red-400`}>
      {message}
    </p>
  )
}

export default Error
