"use client";
import React, { useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink, useSidebar } from "./ui/sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SignedIn, UserButton, useUser } from '@clerk/nextjs'
import ChatIcon from "./icons/ChatIcon";
import SettingsIcon from "./icons/SettingsIcon";
// import StatusIcon from "./icons/StatusIcon";
// import CommunityIcon from "./icons/CommunityIcon";
import { useTheme } from "next-themes";
import FriendsIcon from "./icons/FriendsIcon";
import FullscreenToggle from "./FullscreenToggle";

export function Content({ children, nickname }: { children: React.ReactNode, nickname: string | null }) {
    const [open, setOpen] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const { theme } = useTheme();

    const { user } = useUser();
    const [username, setUsername] = useState(nickname);

    const handleFullScreenChange = (state: boolean) => {
        setIsFullscreen(state);
    };

    useEffect(() => {
        if (user) {
            const newNickname = user.username || user.firstName || "User";
            setUsername(newNickname);
        }
    }, [user]);

    const links = [
        {
            label: "Chats",
            href: "/chats",
            icon: (
                <ChatIcon primary={theme == "dark" ? "#E6EEFF" : "#292929"} secondary={theme == "dark" ? "#D9E4FF" : "#4400FF"} />
            ),
        },
        // {
        //     label: "Status",
        //     href: "/status",
        //     icon: (
        //         <StatusIcon primary={theme == "dark" ? "#E6EEFF" : "#292929"} secondary={theme == "dark" ? "#D9E4FF" : "#4400FF"} />
        //     ),
        // },
        {
            label: "Friends",
            href: "/friends",
            icon: (
                <FriendsIcon primary={theme == "dark" ? "#E6EEFF" : "#292929"} secondary={theme == "dark" ? "#D9E4FF" : "#4400FF"} />
            ),
        },
        // {
        //     label: "Communities",
        //     href: "/communities",
        //     icon: (
        //         <CommunityIcon primary={theme == "dark" ? "#E6EEFF" : "#292929"} secondary={theme == "dark" ? "#D9E4FF" : "#4400FF"} />
        //     ),
        // },
        {
            label: "Settings",
            href: "/settings",
            icon: (
                <SettingsIcon primary={theme == "dark" ? "#E6EEFF" : "#292929"} secondary={theme == "dark" ? "#D9E4FF" : "#4400FF"} />
            ),
        }
    ];
  
    return (
        <>
            <SignedIn>
                <div
                    className={cn(
                        `md:rounded-xl flex flex-col md:flex-row bg-white md:bg-gray-100 dark:bg-neutral-900 md:dark:bg-neutral-800 flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden ${
                            isFullscreen ? 'h-full md:h-screen md:w-screen md:rounded-none' : 'w-full max-w-7xl h-full md:h-[40rem] md:mx-5'}`
                    )}
                >
                    <Sidebar open={open} setOpen={setOpen} animate={false}>
                        <SidebarBody className="justify-between gap-10">
                            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                                <>
                                    <Logo />
                                </>
                                <div className="mt-8 flex flex-col gap-2">
                                    {links.map((link, idx) => (
                                        <SidebarLink key={idx} link={link} />
                                    ))}
                                    
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <UserButton />
                                <span className="font-sour-gummy text-lg text-gray-600 dark:text-neutral-300">{username}</span>
                            </div>
                        </SidebarBody>
                    </Sidebar>
                    <div className="overflow-y-auto md:flex md:flex-1 md:relative">
                        <div className="hidden md:block md:absolute md:top-2 md:right-2">
                            <FullscreenToggle onFullScreenChange={handleFullScreenChange} />
                        </div>
                        <div className={`p-2 md:p-10 rounded-none md:rounded-tl-xl border-none md:border md:border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 overflow-y-auto`}>
                            {children}
                        </div>
                    </div>
                </div>
            </SignedIn>
        </>
    );
}

export const Logo = () => {
    const { setOpen } = useSidebar();
  return (
    <Link
      onClick={() => setOpen((prev) => !prev)}
      href="/"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-semibold text-custom-600 text-4xl font-sour-gummy dark:text-white whitespace-pre"
      >
        Chatify
      </motion.span>
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="#"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
    </Link>
  );
};
