import { formatDateWithTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DummyFriends = [
  {
    id: 1,
    name: "Milos Djukic",
    username: "milosdjukic",
    lastActive: new Date(Date.now()),
    profilePicture: "https://images.dog.ceo/breeds/collie-border/n02106166_7454.jpg",
    isClosed: true,
  },
  {
    id: 2,
    name: "Stefan Petkovic",
    username: "stefanpetkovic",
    lastActive: new Date(Date.now()),
    profilePicture: "https://images.dog.ceo/breeds/lhasa/n02098413_2199.jpg",
    isClosed: false,
  },
  {
    id: 3,
    name: "Sasa Kuzmanovic",
    username: "sasakuzmanovic",
    lastActive: new Date(Date.now()),
    profilePicture: "https://images.dog.ceo/breeds/pekinese/n02086079_2933.jpg",
    isClosed: false,
  },
  {
    id: 4,
    name: "Jovana Cvetkovic",
    username: "jovanacvetkovic",
    lastActive: new Date(Date.now()),
    profilePicture: "https://images.dog.ceo/breeds/spitz-japanese/beet-005.jpg",
    isClosed: false,
  },
  {
    id: 5,
    name: "Strahinja Djukic",
    username: "strahinjadjukic",
    lastActive: new Date(Date.now()),
    profilePicture: "https://images.dog.ceo/breeds/terrier-cairn/n02096177_2854.jpg",
    isClosed: false,
  },
  {
    id: 6,
    name: "Milos Micevic",
    username: "milosmicevic",
    lastActive: new Date(Date.now()),
    profilePicture: "https://images.dog.ceo/breeds/terrier-bedlington/n02093647_2156.jpg",
    isClosed: false,
  },
  {
    id: 7,
    name: "Nikola Jovanovic",
    username: "nikolajovanovic",
    lastActive: new Date(Date.now()),
    profilePicture: "https://images.dog.ceo/breeds/maltese/n02085936_10307.jpg",
    isClosed: true,
  },
  {
    id: 8,
    name: "Mihajlo Miladinovic",
    username: "mihajlomiladinovic",
    lastActive: new Date(Date.now()),
    profilePicture: "https://images.dog.ceo/breeds/hound-english/n02089973_3074.jpg",
    isClosed: true,
  },
  {
    id: 9,
    name: "Miljan Pantovic",
    username: "miljanpantovic",
    lastActive: new Date(Date.now()),
    profilePicture: "https://images.dog.ceo/breeds/spaniel-irish/n02102973_4821.jpg",
    isClosed: false,
  },
  {
    id: 10,
    name: "Jovana Jeftic",
    username: "jovanajeftic",
    lastActive: new Date(Date.now()),
    profilePicture: "https://images.dog.ceo/breeds/labradoodle/Cali.jpg",
    isClosed: false,
  },
  {
    id: 11,
    name: "Pera Ilic",
    username: "perailic",
    lastActive: new Date(Date.now()),
    profilePicture: "https://images.dog.ceo/breeds/pitbull/dog-3981540_1280.jpg",
    isClosed: false,
  },
  {
    id: 12,
    name: "Ana Jovanovic",
    username: "anajovanovic",
    lastActive: new Date(Date.now()),
    profilePicture: "https://images.dog.ceo/breeds/havanese/00100trPORTRAIT_00100_BURST20191126134713895_COVER.jpg",
    isClosed: false,
  },
  {
    id: 13,
    name: "Milan Djukic",
    username: "milandjukic",
    lastActive: new Date(Date.now()),
    profilePicture: "https://images.dog.ceo/breeds/sharpei/noel.jpg",
    isClosed: false,
  },
  {
    id: 14,
    name: "Nenad Savic",
    username: "nenadsavic",
    lastActive: new Date(Date.now()),
    profilePicture: "https://images.dog.ceo/breeds/schnauzer-giant/n02097130_4265.jpg",
    isClosed: false,
  },
  {
    id: 15,
    name: "Luka Hadzimirovic",
    username: "lukahadzimirovic",
    lastActive: new Date(Date.now()),
    profilePicture: "https://images.dog.ceo/breeds/kuvasz/n02104029_4660.jpg",
    isClosed: false,
  },
  {
    id: 16,
    name: "Petar Petrovic",
    username: "petarpetrovic",
    lastActive: new Date(Date.now()),
    profilePicture: "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_694.jpg",
    isClosed: false,
  }
];

const Friends = () => {

  const filteredAndSortedCloseFriends = DummyFriends.sort((a, b) => a.name.localeCompare(b.name)).filter((chat) => chat.isClosed === true);
  const sortedAllFriends = DummyFriends.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="md:h-4/5">
      <div className="flex justify-between items-center mb-8">
        <h2 className="dark:text-gray-200 text-2xl font-sour-gummy tracking-wide">
          Friends
        </h2>
        <Link href="/friends/add-friend" className="dark:text-gray-200 text-base font-sour-gummy tracking-wide font-light md:pr-12">+ Add Friend</Link>
      </div>

      <div className="overflow-y-auto h-full">
        <h3 className="text-gray-500 text-xl font-sour-gummy mb-6 font-light">
          Close Friends
        </h3>
        <div className="grid sm:grid-cols-1 gap-y-8 mb-12 gap-0">
          {
            filteredAndSortedCloseFriends.map((friend, index) => (
              <div key={friend.id} className={`${index > 0 ? "-mt-5" : "mt-0"}`}>
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
                        {friend.name}
                      </p>
                    </Link>
                    <span className="text-gray-400 text-sm font-sour-gummy">last active {formatDateWithTime(friend.lastActive)}</span>
                  </div>
                </div>
                {index < filteredAndSortedCloseFriends.length-1 && <hr className="w-[90%] text-neutral-200 dark:border-neutral-800" />}
              </div>
            ))
          }
        </div>

        <h3 className="text-gray-500 text-xl font-sour-gummy mb-6 font-light">
          All Friends
        </h3>
        <div className="grid sm:grid-cols-1 gap-y-8 mb-12 gap-0">
          {
            sortedAllFriends.map((friend, index) => (
              <div key={friend.id} className={`${index > 0 ? "-mt-5" : "mt-0"}`}>
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
                        {friend.name}
                      </p>
                    </Link>
                    <span className="text-gray-400 text-sm font-sour-gummy">last active {formatDateWithTime(friend.lastActive)}</span>
                  </div>
                </div>
                {index < sortedAllFriends.length-1 && <hr className="w-[90%] text-neutral-200 dark:border-neutral-800" />}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Friends;
