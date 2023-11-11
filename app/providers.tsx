'use client'
import {NextUIProvider} from '@nextui-org/react'
import { SidebarProvider } from '@/contexts/SidebarContext'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <SidebarProvider>
        {children}
      </SidebarProvider>
    </NextUIProvider>
  )
}
