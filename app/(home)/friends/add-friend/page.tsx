import AddFriend from '@/components/pages/friends/add-friend/AddFriend'
import { IUser } from '@/types/user.type';
import { currentUser } from "@clerk/nextjs/server";

export const dynamic  = 'force-dynamic'

const Page = async ({ searchParams }: { searchParams: Promise<{ username?: string }> }) => {
  const username = (await searchParams)?.username;
  const user = await currentUser();

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/friend-requests/${username}/all/${user?.id}`, {
    method: "GET"
  });

  const data = await response.json() as IUser[];

  return (
    <AddFriend data={data} username={username} currentUsername={user?.username} currentUserId={user?.id} />
  )
}

export default Page