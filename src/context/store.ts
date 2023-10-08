import { combineReducers, configureStore } from "@reduxjs/toolkit"
import authReducer from "./slices/authSlice"
import userReducer from "./slices/userSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})
