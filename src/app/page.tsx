import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <h1 className="pb-4">LiveChat App</h1>
      <p className="max-w-2xl">
        Esta es una aplicacion hecha con{" "}
        <span className="text-purple-200  bg-purple-800 rounded-sm p-0.5">
          `create-next-app`
        </span>
        , consiste en un chat en vivo similar al de Twitch, el backend esta
        hecho en Go con Echo, para participar enviando mensajes debes crear un
        usuario e iniciar sesión, o si solo quieres ser un espectador
        simplemente pasa directamente al chat.
      </p>
      <p className="mt-4">Enlaces al codigo:</p>
      <ul>
        <li>
          <a
            className="hover:underline"
            href="https://github.com/isaiorellana-dev/livechat-app"
            target="_blank"
          >
            Frontend
          </a>
        </li>
        <li>
          <a
            className="hover:underline"
            href="https://github.com/isaiorellana-dev/radio-chat-backend"
            target="_blank"
          >
            Backend
          </a>
        </li>
      </ul>
      <div className="flex gap-3 my-5">
        <Link
          href={""}
          className="bg-purple-800 text-purple-50 p-2 rounded-lg hover:cursor-pointer"
        >
          Ir al chat
        </Link>
        <Link
          href={""}
          className="bg-purple-800 text-purple-50 p-2 rounded-lg hover:cursor-pointer"
        >
          Sign Up
        </Link>
      </div>
    </main>
  )
}
