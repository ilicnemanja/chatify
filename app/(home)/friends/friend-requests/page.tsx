import FriendRequests from "@/components/pages/friends/friend-requests/FriendRequests"
import { IUser } from "@/types/user.type";
import { currentUser } from "@clerk/nextjs/server";


const Page = async () => {
  const user = await currentUser();

  let data: IUser[] = [];

  if (user) {
  
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/friend-requests/${user.id}`);

    if (response.ok) {
      data = await response.json();
    }
  }

  return (
    <FriendRequests users={data} />
  )
}

export default Page