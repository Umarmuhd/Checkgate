import React, { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import Content from '@/components/Content';
import Sidebar from '@/components/Sidebar';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="relative flex flex-col md:flex-row w-screen h-screen space-x-0 text-gray-800 dark:text-gray-200 md:space-x-5 bg-gray-50 dark:bg-gray-800">
      <Sidebar />
      <Content>
        <Toaster position="bottom-left" toastOptions={{ duration: 10000 }} />
        {/* <Header /> */}
        {children}
      </Content>
    </main>
  );
}
