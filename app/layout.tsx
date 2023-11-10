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
          <header><nav></nav></header>
          <main className='container mx-auto max-w-[600px] relative h-screen bg-default-200'>
            <div>
              {children}
            </div>
          </main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  )
}
