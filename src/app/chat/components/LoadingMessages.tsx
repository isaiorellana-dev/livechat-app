import { isEven } from "@/utils/math"

const LoadingMessages = () => {
  const numbersArray: number[] = Array.from(
    { length: 50 },
    (_, index) => index + 1
  )
  return (
    <>
      {numbersArray.map((m, i) => (
        <div
          key={i}
          className={`w-full max-w-xl ${
            isEven(i) ? "bg-purple-900" : "bg-purple-950"
          }`}
        >
          <p className="text-left text-purple-200 px-0.5 animate-pulse">
            <span className="font-semibold text-purple-200">
              Cargando usuario:
            </span>{" "}
            Cargando mensaje
          </p>
          <p className="text-right font-thin text-xs text-purple-300 px-1 animate-pulse">{`--/--/-- - --:--`}</p>
        </div>
      ))}
    </>
  )
}

export default LoadingMessages
