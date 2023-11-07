import { ReduxProvider } from "@/context/provider"
import "./globals.css"
import type { Metadata } from "next"
import BodyWrapper from "./components/BodyWrapper"

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
        <BodyWrapper>{children}</BodyWrapper>
      </ReduxProvider>
    </html>
  )
}
