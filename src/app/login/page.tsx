"use client"

import { login as loginT } from "@/types/credentials"
import { ErrorMessage, Field, Form, Formik } from "formik"
import Link from "next/link"
import * as yup from "yup"
import { validations } from "./validations"
import useUser from "@/api/hooks/useUser"
import { AuthToken } from "@/api/services/AuthTokenService"
import { useDispatch, useSelector } from "react-redux"
import { authLogIn } from "@/context/slices/authSlice"
import { setUser } from "@/context/slices/userSlice"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import {
  CREDENTIALS_ERR,
  INTERNAL_ERR,
  NONE,
  PENDING,
  REJECTED,
  SUCCESS,
  UNKNOWN_ERR,
} from "@/constants/strings"
import { requestStatus } from "@/types/components"
import Error from "../components/Error"
import { loginError } from "@/types/strings"
import { stateReduxT } from "@/types/context"

const initialForm: loginT = { nickname: "", pin: "" }

function Login() {
  const router = useRouter()
  const tokenService = new AuthToken()
  const { login, getUserData } = useUser()
  const auth = useSelector((state: stateReduxT) => state.auth)
  const dispatch = useDispatch()

  const [status, setStatus] = useState<requestStatus<loginError>>({
    loading: NONE,
    error: NONE,
  })

  const handleSubmit = async (credentials: loginT) => {
    setStatus({ ...status, loading: PENDING })
    try {
      const res = await login(credentials)
      if (res) {
        tokenService.setToken(res.token)
        dispatch(authLogIn())
        const userData = await getUserData()
        dispatch(setUser(userData))
        setStatus({ ...status, loading: SUCCESS })
        router.push("/chat")
      }
    } catch (err: any) {
      if (err.status) {
        switch (err.status) {
          case 401:
            setStatus({ loading: REJECTED, error: CREDENTIALS_ERR })
            break
          case 500:
            setStatus({ loading: REJECTED, error: INTERNAL_ERR })
            break
          default:
            setStatus({ loading: REJECTED, error: UNKNOWN_ERR })
        }
      } else {
        setStatus({ loading: REJECTED, error: UNKNOWN_ERR })
      }
    }
  }

  useEffect(() => {
    console.log(auth)
    if (auth.isAuthenticated) {
      router.push("/chat")
    }
  }, [auth])

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1>Log In</h1>
      <Formik
        initialValues={initialForm}
        onSubmit={(values) => {
          handleSubmit(values)
        }}
        validationSchema={yup.object(validations)}
      >
        {() => (
          <Form
            onChange={() => {
              if (status.loading !== NONE) {
                setStatus({
                  loading: NONE,
                  error: NONE,
                })
              }
            }}
            className="flex flex-col gap-2 items-center justify-center"
          >
            <div className="mb-2 flex flex-col">
              <label htmlFor="nickname" className="mb-2 flex flex-col">
                Username:
              </label>
              <Field
                name="nickname"
                type="text"
                className="rounded-sm text-purple-950 px-1"
              />
              <ErrorMessage
                name="nickname"
                component="p"
                className="text-red-400 max-w-[220px]"
              />
            </div>

            <div className="mb-2 flex flex-col">
              <label htmlFor="pin">Pin:</label>
              <Field
                name="pin"
                type="password"
                className="rounded-sm text-purple-950 px-1"
              />
              <ErrorMessage
                name="pin"
                component="p"
                className="text-red-400 max-w-[220px]"
              />
            </div>

            <button
              type="submit"
              disabled={status.loading !== NONE}
              className={`bg-purple-500 rounded-sm p-0.5 shadow-md text-purple-300 transition ${
                status.loading == NONE &&
                "hover:text-purple-50 hover:bg-purple-600"
              }`}
            >
              {status.loading == NONE && "Go"}
              {status.loading == PENDING && "Loading..."}
              {status.loading == SUCCESS && "Ready"}
              {status.loading == REJECTED && "Oh no!!"}
            </button>
            {<Error message={status.error} />}
          </Form>
        )}
      </Formik>
      <p className="mt-2 text-purple-400">
        Don{"'"}t have an account?,{" "}
        <Link href={"/signup"} className="text-purple-300 hover:text-purple-50">
          Sign Up
        </Link>
      </p>
      or
      <Link href={"/chat"} className="text-purple-300 hover:text-purple-50">
        just go to the chat
      </Link>
    </main>
  )
}

export default Login
