import { USER_SLICE_NAME } from "@/constants/strings"
import { setUserActionT, userStateT } from "@/types/context"
import { createSlice } from "@reduxjs/toolkit"

const initialState: userStateT = {
  nickname: null,
  role: null,
}

const userSlice = createSlice({
  name: USER_SLICE_NAME,
  initialState,
  reducers: {
    setUser: (state, action: setUserActionT) => {
      const { nickname, role } = action.payload
      state.nickname = nickname
      state.role = role
    },
    clearUser: (state) => {
      state.nickname = null
      state.role = null
    },
  },
})

export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer
