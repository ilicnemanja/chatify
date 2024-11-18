import AddFriend from '@/components/pages/friends/add-friend/AddFriend'
import { IUser } from '@/types/user.type';
import { currentUser } from "@clerk/nextjs/server";

const Page = async ({ searchParams }: { searchParams: Promise<{ username?: string }> }) => {
  const username = (await searchParams)?.username;
  const user = await currentUser();

  let data: IUser[] = [];

  if (username) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${username}/all`);

    if (response.ok) {
      data = await response.json();
    }
  }

  return (
    <AddFriend data={data} username={username} currentUsername={user?.username} />
  )
}

export default Page