export class AuthToken {
  constructor() {
    this.loadToken()
  }

  private static _accessToken: string | null
  private readonly _tokenKey = "jwt_token"

  private loadToken() {
    const token = this.getTokenFromLocalStorage()
    if (token !== null) {
      AuthToken._accessToken = token
    }
  }

  getTokenFromLocalStorage() {
    if (typeof window !== "undefined") {
      const token = window.localStorage.getItem(this._tokenKey)

      if (token !== null) {
        return token
      }
    }
    return null
  }

  removeTokenFromLocalStorage() {
    localStorage.removeItem(this._tokenKey)
  }

  setToken(token: string) {
    if (token !== "") {
      localStorage.setItem(this._tokenKey, token)
      this.loadToken()
    } else {
      throw new Error("token cannot be an empty string")
    }
  }

  clearToken() {
    this.removeTokenFromLocalStorage()
    AuthToken._accessToken = null
  }
  public get getToken() {
    return AuthToken._accessToken
  }
}
