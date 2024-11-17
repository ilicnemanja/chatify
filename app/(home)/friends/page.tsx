import Friends from '@/components/pages/friends/Friends'
import { IFriendsResponse } from '@/types/friend.type';
import { currentUser } from '@clerk/nextjs/server';

const Page = async () => {

  const user = await currentUser()

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/friend-requests/${user?.id}/friends`);
  const data = await response.json() as IFriendsResponse;


  return (
    <Friends friends={data} />
  )
}

export default Page