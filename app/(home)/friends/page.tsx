import Friends from '@/components/pages/friends/Friends'
import { IFriendsResponse } from '@/types/friend.type';

const Page = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/friend-requests/673865104bc3cd4046de7539/friends`);
  const data = await response.json() as IFriendsResponse;


  return (
    <Friends friends={data} />
  )
}

export default Page