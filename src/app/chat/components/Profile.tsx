import { AuthToken } from "@/api/services/AuthTokenService"
import { stateReduxT } from "@/types/context"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { authLogOut } from "@/context/slices/authSlice"
import { clearUser } from "@/context/slices/userSlice"

export function Profile() {
  const user = useSelector((state: stateReduxT) => state.user)
  const [open, setOpen] = useState(false)

  const dispatch = useDispatch()

  const authToken = new AuthToken()

  const handleLogOut = () => {
    authToken.clearToken()
    dispatch(authLogOut())
    dispatch(clearUser())
  }

  return (
    <li>
      <button
        type="button"
        onClick={() => {
          setOpen(!open)
        }}
      >
        {user.nickname}
      </button>
      {open && (
        <div>
          <button
            onClick={() => {
              handleLogOut()
            }}
            type="button"
          >
            Log Out
          </button>
        </div>
      )}
    </li>
  )
}
