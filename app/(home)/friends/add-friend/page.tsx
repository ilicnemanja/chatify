import AddFriend from '@/components/pages/friends/add-friend/AddFriend'
import { IUserWithFriendRequests } from '@/types/user.type';
import { currentUser } from "@clerk/nextjs/server";

const Page = async ({ searchParams }: { searchParams: Promise<{ username?: string }> }) => {
  const username = (await searchParams)?.username;
  const user = await currentUser();

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/friend-requests/${username}/all/${user?.id}`, {
    method: "GET"
  });

  const data = await response.json() as IUserWithFriendRequests[];

  return (
    <AddFriend data={data} username={username} currentUsername={user?.username} currentUserId={user?.id} />
  )
}

export default Page