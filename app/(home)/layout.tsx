import { Content } from '@/components/Content';
import { currentUser } from '@clerk/nextjs/server'
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

    const user = await currentUser()

    if (!user) {
        redirect("/sign-in");
    }

    const nickname = user?.username || user?.firstName || "User";

    return (
      <Content nickname={nickname}>
        {children}
      </Content>
    );
}

export default HomeLayout;
  