import { Content } from '@/components/Content';
import CustomLoader from '@/components/CustomLoader';
import { currentUser } from '@clerk/nextjs/server';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: "Chatify | Home",
  description: "Chatify is a chat application that allows you to chat with your friends and family.",
};

const HomeLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  const nickname = user?.username || user?.firstName || "User";

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
      <Content nickname={nickname}>
        <div className="flex flex-col justify-center items-center my-auto">
          <h1 className="mb-2 font-semibold">The API is currently unavailable.</h1>
          <h2 className="mb-5">
            Please wait 50s while the connection is being established and refresh the page again.
          </h2>
          <CustomLoader />
        </div>
      </Content>
    );
  }

  return (
    <Content nickname={nickname}>
      {children}
    </Content>
  );
};

export default HomeLayout;
