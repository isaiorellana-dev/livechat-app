import { AUTH_SLICE_NAME } from "@/constants/strings"
import { authStateT } from "@/types/context"
import { createSlice } from "@reduxjs/toolkit"

const initialState: authStateT = {
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {
    authLogIn: (state) => {
      state.isAuthenticated = true
    },
    authLogOut: (state) => {
      state.isAuthenticated = false
    },
  },
})

export const { authLogIn, authLogOut } = authSlice.actions

export default authSlice.reducer
