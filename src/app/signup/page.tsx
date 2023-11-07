"use client"

import { signup } from "@/types/credentials"
import { ErrorMessage, Field, Form, Formik } from "formik"
import Link from "next/link"
import * as yup from "yup"
import { validations } from "./validations"
import { useEffect, useState } from "react"
import { requestStatus } from "@/types/components"
import { signUpError } from "@/types/strings"
import {
  INTERNAL_ERR,
  NICKNAME_ERR,
  NONE,
  PENDING,
  REJECTED,
  UNKNOWN_ERR,
} from "@/constants/strings"
import useUser from "@/api/hooks/useUser"
import { SUCCESS } from "../../constants/strings"
import Error from "../components/Error"
import { useRouter } from "next/navigation"
import { useSelector } from "react-redux"
import { stateReduxT } from "@/types/context"

const initialForm: signup = { nickname: "", pin: "", confirmPin: "" }

function SignUp() {
  const { signUp } = useUser()
  const router = useRouter()
  const auth = useSelector((state: stateReduxT) => state.auth)

  const [status, setStatus] = useState<requestStatus<signUpError>>({
    loading: NONE,
    error: NONE,
  })

  const handleSubmit = async (credentials: signup) => {
    const { nickname, pin } = credentials
    setStatus({
      error: NONE,
      loading: PENDING,
    })
    try {
      const res = await signUp({
        nickname: nickname,
        pin: pin,
      })
      if (res) {
        setStatus({
          loading: SUCCESS,
          error: NONE,
        })
      }
    } catch (error: any) {
      if (error.status) {
        switch (error.status) {
          case 400:
            setStatus({
              loading: REJECTED,
              error: NICKNAME_ERR,
            })
            break
          case 500:
            setStatus({
              loading: REJECTED,
              error: INTERNAL_ERR,
            })
            break
          default:
            setStatus({
              loading: REJECTED,
              error: UNKNOWN_ERR,
            })
        }
      } else {
        setStatus({
          loading: REJECTED,
          error: UNKNOWN_ERR,
        })
      }
    }
  }

  useEffect(() => {
    if (auth.isAuthenticated) {
      router.push("/chat")
    }
  }, [auth])

  return (
    <main className="h-screen flex flex-col items-center justify-center">
      {status.loading !== SUCCESS && (
        <>
          <h1>Sign Up</h1>
          <Formik
            initialValues={initialForm}
            onSubmit={(values) => {
              handleSubmit(values)
            }}
            validationSchema={yup.object(validations)}
          >
            {() => (
              <Form
                className="flex flex-col gap-2 items-center justify-center"
                onChange={() => {
                  if (status.loading !== NONE) {
                    setStatus({
                      loading: NONE,
                      error: NONE,
                    })
                  }
                }}
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

                <div className="mb-4 flex flex-col">
                  <label htmlFor="confirmPin">Confirm Pin:</label>
                  <Field
                    name="confirmPin"
                    type="password"
                    className="rounded-sm text-purple-950 px-1"
                  />
                  <ErrorMessage
                    name="confirmPin"
                    component="p"
                    className="text-red-400 max-w-[220px]"
                  />
                </div>

                <button
                  className="bg-purple-500 rounded-sm p-0.5 shadow-md text-purple-300 hover:text-purple-50 hover:bg-purple-600 transition"
                  disabled={status.loading !== NONE}
                >
                  {status.loading == NONE && "Register"}
                  {status.loading == PENDING && "Loading..."}
                  {status.loading == SUCCESS && "Ready"}
                  {status.loading == REJECTED && "Oh no!!"}
                </button>
                {<Error message={status.error} />}
              </Form>
            )}
          </Formik>
          <p className="mt-2 text-purple-400">
            Do you already have an account?,{" "}
            <Link
              href={"/login"}
              className="text-purple-300 hover:text-purple-50"
            >
              Log In
            </Link>
          </p>
        </>
      )}

      {status.loading == SUCCESS && (
        <div className="p-6">
          <p className="text-cyan-50">
            Successful registration!, now you must log in with the account you
            just created.
          </p>

          <Link href={"/login"} className="text-cyan-200  underline">
            Continue
          </Link>
        </div>
      )}
    </main>
  )
}

export default SignUp
