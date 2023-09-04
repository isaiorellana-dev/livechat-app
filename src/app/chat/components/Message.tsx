import { MessagePropsT } from "@/types/components"
import { getDate, isEven } from "@/utils/math"

const Message = (props: MessagePropsT) => {
  const { message, index } = props
  const { year, month, day, hours, minutes } = getDate(message.created_at)

  return (
    <div
      className={`w-full max-w-xl scale-x-50 opacity-0 ${
        isEven(index) ? "bg-purple-900" : "bg-purple-950"
      }`}
    >
      <p className="text-left text-purple-200 px-0.5 opacity-0">
        <span className="font-semibold text-purple-50">
          {message.nickname}:
        </span>{" "}
        {message.body}
      </p>
      <p className="text-right font-thin text-xs text-purple-300 px-1 opacity-0">{`${day}/${month}/${year} - ${hours}:${minutes}`}</p>
    </div>
  )
}

export default Message
