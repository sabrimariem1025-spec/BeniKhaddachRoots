import React from "react"
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}