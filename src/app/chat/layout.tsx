import { childrenT } from "@/types/components"
import Header from "../components/Header"

export default function layout({ children }: childrenT) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
