"use client";
import { BadgeMinus, BadgeCheck } from 'lucide-react';

import { IUser } from "@/types/user.type";
import Image from "next/image";
import Link from "next/link";

const FriendRequests = ({ users }: { users: IUser[] }) => {
  return (
    <div className="md:h-4/5">
      <h3 className="dark:text-gray-200 text-2xl font-sour-gummy tracking-wide mb-4 text-center">
        Friend Requests
      </h3>
      <div className="overflow-y-auto h-full">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-4 mb-12 gap-4 p-4">
          {users.length
            ? users.map((user: IUser) => (
                <div
                  key={user._id}
                >
                  <div className="flex flex-row justify-between gap-2 w-full pb-2 p-2 rounded-md border-1 hover:md:scale-[101%] hover:shadow-md shadow-inner bg-neutral-100 dark:bg-neutral-600 cursor-pointer ">
                    <Link
                      href={`/profile/${user.username}`}
                      className="flex flex-row items-center gap-2 w-full"
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
                      <button
                        onClick={() => {}}
                        className="text-[#6439FF] dark:text-custom-200 text-base font-sour-gummy tracking-wide cursor-pointer mr-2 inline h-fit hover:text-[#4F75FF]"
                      >
                        <BadgeMinus className='text-red-500' />
                      </button>
                      <button
                        onClick={() => {}}
                        className="text-[#6439FF] dark:text-custom-200 text-base font-sour-gummy tracking-wide cursor-pointer mr-2 inline h-fit hover:text-[#4F75FF]"
                      >
                        <BadgeCheck className='text-green-500' />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
        {!users.length && (
          <h3 className="dark:text-neutral-200 text-xl font-sour-gummy m-auto mt-12 font-light flex justify-center items-center">
            No new friend requests found
          </h3>
        )}
      </div>
    </div>
  );
};

export default FriendRequests;
