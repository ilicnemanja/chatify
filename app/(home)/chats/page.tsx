import Chats from '@/components/pages/chats/Chats'
import { IFriendsResponse } from '@/types/friend.type';
import { currentUser } from '@clerk/nextjs/server';

export const dynamic = 'force-dynamic'

const Page = async () => {

  const user = await currentUser()

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/friends/${user?.id}`);
  const friends = await response.json() as IFriendsResponse;

  return (
    <Chats friends={friends} user={user} />
  )
}

export default Page