export type authStateT = {
  isAuthenticated: boolean
}

export type userStateT = {
  nickname: string | null
  role: string | null
}

export type setUserActionT = {
  type: string
  payload: {
    nickname: string | null
    role: string | null
  }
}
