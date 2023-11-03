export type message = {
  id: number
  body: string
  nickname: string
  created_at: string
}

export interface user {
  id: number
  nickname: string
  role: string
  created_at: string
}
export interface signUpRes {
  id: number
  nickname: string
  created_at: string
}

export interface userData {
  nickname: string
  role: string
}

export interface token {
  token: string
}
