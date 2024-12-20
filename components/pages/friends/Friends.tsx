import { formatDateWithTime } from "@/lib/utils";
import { IFriendsResponse } from "@/types/friend.type";
import { IUser } from "@/types/user.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SquareUserRound, UserRoundPlus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Friends = ({
  friends,
  friendRequests,
}: {
  friends: IFriendsResponse;
  friendRequests: IUser[];
}) => {
  const sortedCloseFriends = friends.closeFriends?.sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  );

  const sortedAllFriends = friends.allFriends?.sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  );

  return (
    <div className="md:h-4/5">
      <div className="flex justify-between items-center mb-8">
        <h2 className="dark:text-gray-200 text-2xl font-sour-gummy tracking-wide">
          Friends
        </h2>
        <div className="flex gap-8 md:mr-4">
          <Link
            href="/friends/add-friend"
            className="dark:text-gray-200 text-base font-sour-gummy tracking-wide font-light"
          >
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger><UserRoundPlus className="hover:text-neutral-400" size={30} /></TooltipTrigger>
                <TooltipContent>
                  <p>Add Friend</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </Link>
          
          <div className="relative">
            <Link
              href="/friends/friend-requests"
              className="dark:text-gray-200 text-base font-sour-gummy tracking-wide font-light"
            >
              <TooltipProvider>
              <Tooltip>
                <TooltipTrigger> <SquareUserRound className="hover:text-neutral-400" size={30} /></TooltipTrigger>
                <TooltipContent>
                  <p>Friend Requests</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </Link>
            {friendRequests?.length ? (<span className="absolute -top-2 -right-1 border border-red-500 bg-red-500 rounded-full text-white font-sour-gummy text-base w-5 h-5 flex justify-center items-center">
              {friendRequests.length}
            </span>) : null}
          </div>

        </div>
      </div>

      <div className="overflow-y-auto h-full">
        <h3 className="text-gray-500 text-xl font-sour-gummy font-light">
          Close Friends
        </h3>
        {friends.closeFriends?.length > 0 ? (
          <div className="grid sm:grid-cols-1 mt-4 gap-y-8 mb-12 gap-0">
            {sortedCloseFriends.map((friend, index) => (
              <div
                key={friend.clerkId}
                className={`${index > 0 ? "-mt-5" : "mt-0"}`}
              >
                <div className="flex flex-row items-center gap-2 pb-2">
                  <div className="w-12 h-12 overflow-hidden rounded-full border-2 border-gray-200 bg-gray-200">
                    <Link href={`/profile/${friend.username}`}>
                      <Image
                        src={friend.profilePicture}
                        alt="Placeholder image"
                        width={48}
                        height={48}
                        className="object-cover cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href={`/profile/${friend.username}`}>
                      <p className="text-[#6439FF] dark:text-custom-200 text-xl font-sour-gummy tracking-wide cursor-pointer">
                        {friend.firstName} {friend.lastName}
                      </p>
                    </Link>
                    <span className="text-gray-400 text-sm font-sour-gummy">
                      last active {formatDateWithTime(friend.lastActive)}
                    </span>
                  </div>
                </div>
                {index < sortedCloseFriends.length - 1 && (
                  <hr className="w-[90%] text-neutral-200 dark:border-neutral-800" />
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 font-sour-gummy text-lg">
            You have no close friends yet. Add friends to your close friends
            list to see them here.
          </p>
        )}

        <h3 className="text-gray-500 text-xl font-sour-gummy mt-6 font-light">
          All Friends
        </h3>
        {friends.allFriends?.length > 0 ? (
          <div className="grid sm:grid-cols-1 mt-4 gap-y-8 mb-12 gap-0">
            {sortedAllFriends.map((friend, index) => (
              <div
                key={friend.clerkId}
                className={`${index > 0 ? "-mt-5" : "mt-0"}`}
              >
                <div className="flex flex-row items-center gap-2 pb-2">
                  <div className="w-12 h-12 overflow-hidden rounded-full border-2 border-gray-200 bg-gray-200">
                    <Link href={`/profile/${friend.username}`}>
                      <Image
                        src={friend.profilePicture}
                        alt="Placeholder image"
                        width={48}
                        height={48}
                        className="object-cover cursor-pointer"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href={`/profile/${friend.username}`}>
                      <p className="text-[#6439FF] dark:text-custom-200 text-xl font-sour-gummy tracking-wide cursor-pointer">
                        {friend.firstName} {friend.lastName}
                      </p>
                    </Link>
                    <span className="text-gray-400 text-sm font-sour-gummy">
                      last active {formatDateWithTime(friend.lastActive)}
                    </span>
                  </div>
                </div>
                {index < sortedAllFriends.length - 1 && (
                  <hr className="w-[90%] text-neutral-200 dark:border-neutral-800" />
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400 font-sour-gummy text-lg">
            You have no friends yet. Add friends to see them here.
          </p>
        )}
      </div>
    </div>
  );
};

export default Friends;
