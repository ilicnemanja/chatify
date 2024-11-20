import Friends from '@/components/pages/friends/Friends'
import { IFriendsResponse } from '@/types/friend.type';
import { IUser } from '@/types/user.type';
import { currentUser } from '@clerk/nextjs/server';

const Page = async () => {

  const user = await currentUser()

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/friends/${user?.id}`);
  const friends = await response.json() as IFriendsResponse;

  const response2 = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/friend-requests/${user?.id}`);
  const friendRequests = await response2.json() as IUser[];


  return (
    <Friends friends={friends} friendRequests={friendRequests} />
  )
}

export default Page