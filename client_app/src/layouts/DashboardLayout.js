import React, { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import Content from 'src/components/Content';
import Sidebar from 'src/components/Sidebar';
import Header from 'src/components/Header';

const DashboardLayout = ({ children }) => {
  return (
    <main className="relative flex flex-col w-screen h-screen space-x-0 text-gray-800 dark:text-gray-200 md:space-x-5 lg:flex-row bg-gray-50 dark:bg-gray-800">
      <Sidebar />
      <Content>
        <Toaster position="bottom-left" toastOptions={{ duration: 10000 }} />
        <Header />
        {children}
      </Content>
    </main>
  );
};

export default DashboardLayout;
