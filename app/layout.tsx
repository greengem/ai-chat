import type { Metadata } from 'next'
import {Providers} from "./providers";
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Chat',
  description: 'Created by Chris Waitt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark'>
      <body className={inter.className}>
        <Providers>
          <header></header>
          <nav></nav>
          <main>{children}</main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  )
}
