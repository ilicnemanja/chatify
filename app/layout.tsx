import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ThemeProvider from '@/context/Theme';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CustomLoader from "@/components/CustomLoader";

const sourGummy = localFont({
  src: "./fonts/SourGummyVF.ttf",
  variable: "--font-sour-gummy",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Chatify",
  description: "Chatify is a chat application built with Next.js. You can sign in, create channels, and chat with your friends and family.",
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) =>{

  // AbortController to handle fetch timeout
  const checkAPIHealth = async () => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 4500); // Timeout slightly below Vercel's 5s limit

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/health`, {
        signal: controller.signal,
      });
      clearTimeout(timeout);
      return response.ok;
    } catch {
      clearTimeout(timeout);
      return false; // Consider the API unavailable on error or timeout
    }
  };

  const isAPIHealthy = await checkAPIHealth();

  if (!isAPIHealthy) {
    return (
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${sourGummy.variable} antialiased`}
        >
          <div className="flex flex-col justify-center items-center my-auto h-screen w-full" suppressHydrationWarning>
            <h1 className="mb-2 font-semibold">The API is currently unavailable.</h1>
            <h2 className="mb-5 text-center">
              Please wait 50s while the connection is being established and refresh the page again.
            </h2>
            <CustomLoader />
          </div>
        </body>
      </html>
    );
  }

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
          <ToastContainer />
        </body>
      </html>
    </ClerkProvider>
  );
}

export default RootLayout;
