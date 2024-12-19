import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nova Gorica Review - Read Reviews of Nova Gorica Businesses",
  description: "Read and write reviews of Nova Gorica businesses",
  keywords: [
    'Nova Gorica Review',
    'Nova Gorica Attractions',
    'Nova Gorica Best Places to Visit',
    'Nova Gorica Businesses',
    'Living in Nova Gorica',
    'Things to do in Nova Gorica',
     ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

