"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconMessageCircle,
  IconChartArcs,
  IconUsersGroup,
  IconSettingsAutomation,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { SignedIn, UserButton } from '@clerk/nextjs'

export function Content({ children, nickname }: { children: React.ReactNode, nickname: string }) {
    const [open, setOpen] = useState(false);

    const links = [
        {
            label: "Chats",
            href: "/chats",
            icon: (
                <IconMessageCircle className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Status",
            href: "/status",
            icon: (
                <IconChartArcs className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Communities",
            href: "/communities",
            icon: (
                <IconUsersGroup className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "UI Settings",
            href: "/settings",
            icon: (
                <IconSettingsAutomation className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        }
    ];
  
    return (
        <>
            <SignedIn>
                <div
                    className={cn(
                        "md:rounded-xl flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
                        "h-screen md:h-[80vh]" // for your use case, use `h-screen` instead of `h-[60vh]`
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
                                <span className="font-sour-gummy text-lg text-gray-600">{nickname}</span>
                            </div>
                        </SidebarBody>
                    </Sidebar>
                    <div className="flex flex-1">
                        <div className="p-2 md:p-10 rounded-none md:rounded-tl-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
                            {children}
                        </div>
                    </div>
                </div>
            </SignedIn>
        </>
    );
}

export const Logo = () => {
  return (
    <Link
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
