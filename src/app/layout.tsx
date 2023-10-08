import { ReduxProvider } from "@/context/provider"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import Header from "./components/Header"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LiveChat App",
  description:
    "Esta es una aplicacion hecha con NextJS, consiste en un chat en vivo similar al de Twitch.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <ReduxProvider>
        <body className={inter.className}>{children}</body>
      </ReduxProvider>
    </html>
  )
}
