import { ReduxProvider } from "@/context/provider"
import "./globals.css"
import type { Metadata } from "next"
import BodyWrapper from "./components/BodyWrapper"

export const metadata: Metadata = {
  title: "LiveChat App",
  description:
    "This is an application built with NextJS 13, featuring a live chat similar to Twitch.",
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
