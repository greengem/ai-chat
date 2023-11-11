import type { Metadata } from 'next'
import {Providers} from "./providers";
import { Inter } from 'next/font/google'
import './globals.css'
import AppSidebar from '@/app/chat/_components/Sidebar/AppSidebar';

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
          <main className='flex h-screen'>
            <AppSidebar />
            <section className='flex-grow bg-default-200 h-screen'>{children}</section>
          </main>
          <footer></footer>
        </Providers>
      </body>
    </html>
  )
}
