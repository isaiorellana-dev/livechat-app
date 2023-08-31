export interface message {
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

export interface userData {
  nickname: string
  role: string
}
