import { IUser } from '@/types/user.type';
import { currentUser } from '@clerk/nextjs/server';
import { notFound } from 'next/navigation';
import ChatRoom from '@/components/pages/chats/ChatRoom';

export const dynamic = 'force-dynamic'

const Page = async ({ params }: {params: Promise<{ friendId: string }>}) => {
  const { friendId } = await params

  if (!friendId) {
    return notFound();
  }

  const user = await currentUser();
  const friend = await fetchFriendByClerkId(friendId!);

  if (!user || !friend) {
    return notFound();
  }

  // Simplifying the user and friend objects
  const simplifiedUser = {
    id: user.id,
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    imageUrl: user.imageUrl,
    username: user.username || '',
  };

  const simplifiedFriend = {
    id: friend.clerkId,
    firstName: friend.firstName || '',
    lastName: friend.lastName || '',
    imageUrl: friend.profilePicture,
    username: friend.username || '',
  };

  return <ChatRoom user={simplifiedUser} friend={simplifiedFriend} />;
};

async function fetchFriendByClerkId(friendClerkId: string): Promise<IUser> {
  const friend = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/find/${friendClerkId}`
  ).then((res) => res.json()) as IUser | null;

  if (!friend) {
    return notFound();
  }

  return friend;
}

export default Page;
