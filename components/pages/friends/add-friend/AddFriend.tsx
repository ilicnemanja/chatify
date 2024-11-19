"use client"

import { IUser } from "@/types/user.type";
import SearchUsersForm from "./SearchUsersForm";
import Image from "next/image";
import Link from "next/link";
import { UserRoundPlus } from 'lucide-react';
import { Bounce, toast } from "react-toastify"
// import { useState } from "react";


const AddFriend = ({
  data,
  username,
  currentUsername,
  currentUserId
}: {
  data: IUser[];
  username: string | undefined;
  currentUsername: string | null | undefined;
  currentUserId: string | null | undefined;
}) => {
  // const [users, setUsers] = useState(data)

  const onFriendRequestSendHandler = async (userId: string | null | undefined, friendId: string) => {
    if (!userId) {
      return;
    }

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/friend-requests/${userId}/send-friend-request/${friendId}`, {
        method: "POST"
      });

      if (response.ok) {
        toast.success('Friend request Sent!', {
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        if (response.status == 304) {
          toast.error("Friend request already sent!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          })
        }
      }
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  return (
    <div className="md:h-4/5">
      <div className="flex flex-col justify-center items-center md:w-full lg:w-2/5 mx-auto p-4 lg:p-0">
        <SearchUsersForm username={username} />

        {username && (
          <h3 className="text-neutral-400 text-lg font-sour-gummy my-6 font-light">
            Search results for &quot;{username}&quot;
          </h3>
        )}
        {!username && (
          <h3 className="text-neutral-400  text-lg font-sour-gummy my-6 font-light">
            Search for a user to add as a friend
          </h3>
        )}
      </div>

      <div className="overflow-y-auto h-full">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-4 mb-12 gap-4 p-4">
          {data.length
            ? data.map((user: IUser) => (
                <div
                  key={user._id}
                  className={`${
                    user.username === currentUsername
                      ? "opacity-50 pointer-events-none border-1 border-gray-400 rounded-md"
                      : ""
                  }`}
                >
                  <div className="flex flex-row justify-between gap-2 w-full pb-2 p-2 rounded-md border-1 hover:md:scale-[101%] hover:shadow-md shadow-inner bg-neutral-100 dark:bg-neutral-600 cursor-pointer ">
                    <Link
                      href={`/profile/${user.username}`}
                      className="flex flex-row items-center gap-2 w-full" 
                      aria-disabled={user.username === currentUsername}
                    >
                      <Image
                        src={user.profilePicture}
                        alt="profile"
                        className="w-12 h-12 rounded-full"
                        width={48}
                        height={48}
                      />
                      <div className="flex flex-col">
                        <h3 className="dark:text-gray-200 text-lg font-sour-gummy tracking-wide">
                          {user.firstName} {user.lastName}
                        </h3>
                        <p className="dark:text-gray-400 text-sm font-sour-gummy tracking-wide">
                          {user.username}
                        </p>
                      </div>
                    </Link>
                    <div className="flex items-center justify-center">
                      {user.username != currentUsername && <button
                        onClick={async () => {
                          await onFriendRequestSendHandler(currentUserId, user.clerkId)
                        }}
                        className="text-[#6439FF] dark:text-custom-200 text-base font-sour-gummy tracking-wide cursor-pointer mr-2 inline h-fit"
                      >
                        <UserRoundPlus className="hover:text-custom-50" />
                      </button>}
                      {user.username === currentUsername && <span className="text-base font-sour-gummy tracking-wide mr-2 inline h-fit">You</span>}
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
        {username && !data.length && (
          <h3 className="dark:text-neutral-200 text-xl font-sour-gummy m-auto mt-12 font-light flex justify-center items-center">
            No users found
          </h3>
        )}
      </div>
    </div>
  );
};

export default AddFriend;
