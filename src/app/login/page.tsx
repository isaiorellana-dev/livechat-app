"use client"

import { login } from "@/types/credentials"
import { ErrorMessage, Field, Form, Formik } from "formik"
import Link from "next/link"
import * as yup from "yup"
import { validations } from "./validations"

const initialForm: login = { nickname: "", pin: "" }

function Login() {
  return (
    <main className="h-screen flex flex-col items-center justify-center">
      <h1>Log In</h1>
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

            <button className="bg-purple-500 rounded-sm p-0.5 shadow-md text-purple-300 hover:text-purple-50 hover:bg-purple-600 transition">
              Go
            </button>
          </Form>
        )}
      </Formik>
      <p className="mt-2 text-purple-400">
        Don{"'"}t have an account?,{" "}
        <Link href={"/signup"} className="text-purple-300 hover:text-purple-50">
          Sign Up
        </Link>
      </p>
    </main>
  )
}

export default Login
