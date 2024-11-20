"use client"

// import { ProfilePosts } from '@/components/ProfilePosts'
import { formatDateWithTime } from "@/lib/utils";
// import { IPost } from '@/types/post.type'
import { IUser } from "@/types/user.type";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Bounce, toast } from "react-toastify";

// { user, posts }: { user: IUser, posts: IPost[] }
const Profile = ({
  user,
  currentUserId,
  currentUserUsername
}: {
  user: IUser;
  currentUserId: string | undefined;
  currentUserUsername: string | null | undefined;
}) => {

  const addToCloseFriends = async (userId: string | undefined, friendId: string | undefined) => {

    if (!userId || !friendId) {
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/friend-requests/${userId}/add-close-friend/${friendId}`,
        {
          method: 'POST',
        }
      )

      if (response.ok) {
        toast.success('Added to close friend!', {
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
        toast.error('Error adding to close friend!', {
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
      }
    } catch (error) {
      console.error(error)
    }
  }

  // const removeFromCloseFriends = async (userId: string | undefined, friendId: string | undefined) => {

  //   if (!userId || !friendId) {
  //     return;
  //   }

  //   try {
  //     const response = await fetch(
  //       `${process.env.NEXT_PUBLIC_API_URL}/api/friend-requests/${userId}/remove-close-friend/${friendId}`,
  //       {
  //         method: 'POST',
  //       }
  //     )

  //     if (response.ok) {
  //       toast.success('Removed from close friend!', {
  //         position: "bottom-right",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //         transition: Bounce,
  //       });
  //     } else {
  //       toast.error('Error removing frpm close friend!', {
  //         position: "bottom-right",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //         transition: Bounce,
  //       });
  //     }
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center gap-4">
        <div className="w-20 h-20 overflow-hidden rounded-full">
          <Image
            src={user.profilePicture}
            alt="Profile Picture"
            className="object-cover"
            width={80}
            height={80}
          />
        </div>
        <div className={`relative ${currentUserUsername !== user.username ? "-mb-8" : "-mb-2"}`}>
          <h3 className="text-[#6439FF] dark:text-custom-200 text-xl font-sour-gummy tracking-wide">
            {user.firstName} {user.lastName}
          </h3>
          {currentUserUsername !== user.username && (
            <>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link onClick={
                      async () => {
                        await addToCloseFriends(currentUserId, user?.clerkId)
                      }} href={`/profile/${user.username}`} className="text-[#6439FF] dark:text-custom-200 absolute top-1 -right-7">
                      <Star className="text-yellow-200 hover:text-yellow-400" size={20} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Add To Close Friends</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {/* <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Link onClick={
                      async () => {
                        await removeFromCloseFriends(currentUserId, user?.clerkId)
                      }
                    } href={`/profile/${user.username}`} className="text-[#6439FF] dark:text-custom-200 absolute top-1 -right-7">
                      <Star className="text-yellow-200 hover:text-yellow-400 fill-yellow-200 hover:fill-yellow-400" size={20} />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Remove From Close Friends</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider> */}
            </>
          )}
        </div>

        <p className="text-gray-400 dark:text-neutral-100 text-sm font-sour-gummy">
          last active {formatDateWithTime(user.lastActive)}
        </p>

        {user?.bio && (
          <p className="text-gray-600 dark:text-neutral-100 text-sm font-sour-gummy">
            {user.bio}
          </p>
        )}

      </div>
      <hr className="my-4 border-gray-200 dark:border-neutral-800" />

      {/* // TODO: Add component for posts */}
      {/* <div className=''>
        <ProfilePosts posts={posts} />
      </div> */}
    </div>
  );
};

export default Profile;
