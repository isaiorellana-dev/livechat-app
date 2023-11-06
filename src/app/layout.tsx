import { ReduxProvider } from "@/context/provider"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import BodyWrapper from "./components/BodyWrapper"

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
        <BodyWrapper className={inter.className}>{children}</BodyWrapper>
      </ReduxProvider>
    </html>
  )
}
