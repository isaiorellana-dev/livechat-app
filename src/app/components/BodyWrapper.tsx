"use client"
import useUser from "@/api/hooks/useUser"
import { authLogIn, authLogOut } from "@/context/slices/authSlice"
import { clearUser, setUser } from "@/context/slices/userSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export default function BodyWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const { getUserData } = useUser()
  const dispatch = useDispatch()

  useEffect(() => {
    getUserData()
      .then((res) => {
        dispatch(authLogIn())
        dispatch(setUser({ nickname: res.nickname, role: res.role }))
      })
      .catch(() => {
        dispatch(authLogOut())
        dispatch(clearUser())
      })
  }, [])
  return <body>{children}</body>
}
