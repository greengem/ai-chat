import AppSidebar from './chat/_components/Sidebar/AppSidebar';

import { Toaster } from 'react-hot-toast';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    return (
      <>
        <Toaster />
        <AppSidebar />
        <section className='flex-grow bg-default-200 h-screen'>{children}</section>
      </>
    )
  }