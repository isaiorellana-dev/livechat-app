import { dateInfoT } from "@/types/math"

export const isEven = (n: number): boolean => n % 2 === 0

export const getDate = (iso: string): dateInfoT => {
  const date = new Date(iso)

  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hours = date.getHours()
  let minutes
  if (date.getMinutes() < 10) {
    minutes = "0" + date.getMinutes().toString()
  } else {
    minutes = date.getMinutes()
  }

  return {
    year,
    month,
    day,
    hours,
    minutes,
  }
}
