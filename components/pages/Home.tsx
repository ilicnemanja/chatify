"use client";

import Link from 'next/link'
import {
    IconLockSquareRounded
  } from "@tabler/icons-react";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-4 relative">
        <h1 className="text-3xl font-bold text-custom-600 font-sour-gummy">Welcome to Chatify 👋</h1>
        <p className="text-lg text-gray-400 font-sour-gummy">Start a chat with your friends</p>

        <div className="flex flex-col items-center space-y-4">
            <Link href="/chats" className="relative inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-custom-600 transition-colors duration-300 ease-out border-2 border-custom-600 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-custom-600 group-hover:-rotate-180 ease"></span>
                    <span className="relative font-sour-gummy">Start Chat</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-custom-600 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </Link>
        </div>

        <div className='absolute bottom-0 text-gray-400 text-sm flex justify-center items-center gap-2 font-sour-gummy'>
            <IconLockSquareRounded /> Your personal messages are end-to-end encrypted
        </div>
    </div>
    )
}

export default Home