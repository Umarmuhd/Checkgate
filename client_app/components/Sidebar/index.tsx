import Link from 'next/link';
import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';

export default function Sidebar() {
  const [showMenu, setMenuVisibility] = useState<boolean>(false);

  const toggleMenu = () => setMenuVisibility(!showMenu);

  return (
    <aside className="sticky z-40 flex flex-col space-y-5 text-white bg-gray-800 dark:bg-gray-900 md:overflow-y-auto md:w-1/4 md:h-screen overscroll-contain">
      <div className="relative flex items-center justify-center p-5 text-center border-b border-b-gray-900">
        <Link href="/">
          <a className="flex-grow text-2xl font-bold">Checkgate</a>
        </Link>
        <button className="absolute right-0 p-5 md:hidden" onClick={toggleMenu}>
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
    </aside>
  );
}
