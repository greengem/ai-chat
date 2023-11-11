'use client'
import { SessionProvider } from "next-auth/react";
import {NextUIProvider} from '@nextui-org/react'
import { SidebarProvider } from '@/contexts/SidebarContext'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <NextUIProvider>
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </NextUIProvider>
    </SessionProvider>
  )
}
