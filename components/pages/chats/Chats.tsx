import { formatDateWithTime } from "@/lib/utils";
import { IFriendsResponse } from "@/types/friend.type";
import { IUser } from "@/types/user.type";
import { User } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import React from "react";


// const DummyChats2 = [
//   {
//     id: 1,
//     name: "Filmovi",
//     profilePicture: "https://images.dog.ceo/breeds/springer-english/n02102040_7091.jpg",
//   },
//   {
//     id: 2,
//     name: "Bazen",
//     profilePicture: "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
//   },
//   {
//     id: 3,
//     name: "Kafana",
//     profilePicture: "https://images.dog.ceo/breeds/pekinese/n02086079_499.jpg",
//   },
// ];

const Chats = ({ friends }: {
  friends: IFriendsResponse,
  user: User | null
}) => {
  return (
    <div className="md:h-4/5">
      <div className="overflow-y-auto h-full">
        <h3 className="dark:text-gray-200 text-2xl font-sour-gummy tracking-wide mb-4">
          Chats
        </h3>
        {/* // TODO: work on this part, add chats */}
        <div className="grid lg:grid-cols-1 xl:grid-cols-2 gap-y-4 mb-12 gap-1 md:m-2">
          {
            friends.allFriends.map((friend: IUser) => (
              <Link href={`chats/with/${friend.clerkId}`} key={friend._id} className={`flex flex-row items-center gap-3 sm:w-[60%] md:w-[80%] lg:w-[65%] p-2 rounded-full border-1 hover:md:scale-[101%] hover:shadow-md shadow-inner bg-neutral-100 dark:bg-neutral-600 cursor-pointer`}>
                <div className="w-12 h-12 overflow-hidden rounded-full border-2 bg-gray-200">  
                  <Image 
                    src={friend.profilePicture} 
                    alt="Placeholder image" 
                    width={48} 
                    height={48} 
                    className="object-cover cursor-pointer" 
                  />
                </div>
                <div>
                  <p className="text-[#6439FF] dark:text-custom-200 text-xl font-sour-gummy tracking-wide cursor-pointer">
                    {friend.firstName} {friend.lastName}
                  </p>
                  <span className="text-gray-400 dark:text-neutral-100 text-sm font-sour-gummy">last active {formatDateWithTime(friend.lastActive)}</span>
                </div>
              </Link>
            ))
          }
        </div>

        {/* // TODO: work on this part, add groups */}
        {/* <h3 className="dark:text-gray-200 text-2xl font-sour-gummy tracking-wide mb-6">
          Groups
        </h3>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 mb-12 gap-0 m-4">
          {
            DummyChats2.sort((a, b) => a.name.localeCompare(b.name)).map((chat) => (
              <div key={chat.id}>
                <div className="flex flex-row items-center gap-2">
                  <div className="w-12 h-12 overflow-hidden rounded-full border-2 border-[#6439FF]">
                    <Image 
                      src={chat.profilePicture} 
                      alt="Placeholder image" 
                      width={48} 
                      height={48} 
                      className="object-cover cursor-pointer" 
                    />
                  </div>
                  <div>
                    <p className="text-[#6439FF] text-xl font-sour-gummy tracking-wide cursor-pointer">
                      {chat.name}
                    </p>
                  </div>
                </div>
              </div>
            ))
          }
        </div> */}
      </div>
    </div>
  );
};

export default Chats;
