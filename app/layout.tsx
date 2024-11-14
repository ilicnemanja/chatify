import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ThemeProvider from '@/context/Theme';

const sourGummy = localFont({
  src: "./fonts/SourGummyVF.ttf",
  variable: "--font-sour-gummy",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Chatify",
  description: "Chatify is a chat application built with Next.js. You can sign in, create channels, and chat with your friends and family.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/sign-in">
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${sourGummy.variable} antialiased`}
        >
          <div className='w-full h-screen px-0 flex justify-center items-center bg-gradient-to-r from-custom-400 via-custom-500 to-custom-600'>
            <ThemeProvider
              attribute="class"
              defaultTheme="light"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
