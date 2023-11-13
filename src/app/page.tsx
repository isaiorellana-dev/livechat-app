"use client"
import { stateReduxT } from "@/types/context"
import Link from "next/link"
import { useSelector } from "react-redux"

export default function Home() {
  const auth = useSelector((state: stateReduxT) => state.auth)

  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <h1 className="pb-4 font-bold">LiveChat App</h1>
      <p className="max-w-2xl font-mono">
        This is an application built with{" "}
        <span className="text-purple-200  bg-purple-800 rounded-sm p-0.5">
          `create-next-app`
        </span>
        , featuring a live chat similar to Twitch. The backend is developed in
        Go with Echo.
        <br />
        To participate and send messages, you need to create a user account and
        log in. Alternatively, if you just want to be a spectator, feel free to
        jump directly into the chat
      </p>
      <h2 className="mt-4 font-mono font-semibold">Code:</h2>
      <ul className="flex gap-5">
        <li>
          <a
            className="hover:underline font-mono"
            href="https://github.com/isaiorellana-dev/livechat-app"
            target="_blank"
          >
            Frontend
          </a>
        </li>
        <li>
          <a
            className="hover:underline font-mono"
            href="https://github.com/isaiorellana-dev/radio-chat-backend"
            target="_blank"
          >
            Backend
          </a>
        </li>
      </ul>
      <div className="flex gap-3 my-5">
        <Link
          href={"/chat"}
          className="bg-purple-800 text-purple-50 p-2 rounded-lg hover:cursor-pointer hover:bg-purple-700"
        >
          Go to chat
        </Link>
        {!auth.isAuthenticated && (
          <Link
            href={"/signup"}
            className="bg-purple-800 text-purple-50 p-2 rounded-lg hover:cursor-pointer hover:bg-purple-700"
          >
            Sign Up
          </Link>
        )}
      </div>
    </main>
  )
}
