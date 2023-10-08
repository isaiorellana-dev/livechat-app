"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Header = () => {
  const path = usePathname()

  return (
    <header className="p-2">
      <nav>
        <ul className="flex justify-around gap-5 hover:text-purple-200">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link
              className={`${
                path == "/chat" && "text-purple-300"
              } hover:text-purple-200`}
              href={"/chat"}
            >
              Chat
            </Link>
          </li>
          <li>
            <Link href={"signup"} className="hover:text-purple-200">
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
