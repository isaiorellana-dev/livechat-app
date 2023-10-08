"use client"

import { signup } from "@/types/credentials"
import { ErrorMessage, Field, Form, Formik } from "formik"
import Link from "next/link"
import * as yup from "yup"
import { validations } from "./validations"

const initialForm: signup = { nickname: "", pin: "", confirmPin: "" }

function SignUp() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1>Sign Up</h1>
      <Formik
        initialValues={initialForm}
        onSubmit={() => {}}
        validationSchema={yup.object(validations)}
      >
        {() => (
          <Form className="flex flex-col items-center justify-center">
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

            <button className="bg-purple-500 rounded-sm p-0.5 shadow-md text-purple-300 hover:text-purple-50 hover:bg-purple-600 transition">
              Register
            </button>
          </Form>
        )}
      </Formik>
      <p className="mt-2 text-purple-400">
        Do you already have an account?,{" "}
        <Link href={"/login"} className="text-purple-300 hover:text-purple-50">
          Log In
        </Link>
      </p>
    </main>
  )
}

export default SignUp
