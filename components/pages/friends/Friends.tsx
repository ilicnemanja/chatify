import { formatDateWithTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Friends = () => {
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
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 mb-12 gap-0">
          <div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image 
                  src="https://placehold.co/48x48.png" 
                  alt="Placeholder image" 
                  width={48} 
                  height={48} 
                  className="object-cover cursor-pointer" 
                />
              </div>
              <div>
                <p className="text-[#6439FF] text-xl font-sour-gummy tracking-wide cursor-pointer">
                  John Doe
                </p>
                <span className="text-gray-400 text-sm">last active {formatDateWithTime(new Date(Date.now()))}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image 
                  src="https://placehold.co/48x48.png" 
                  alt="Placeholder image" 
                  width={48} 
                  height={48} 
                  className="object-cover cursor-pointer" 
                />
              </div>
              <div>
                <p className="text-[#6439FF] text-xl font-sour-gummy tracking-wide cursor-pointer">
                  John Doe
                </p>
                <span className="text-gray-400 text-sm">last active {formatDateWithTime(new Date(Date.now()))}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image 
                  src="https://placehold.co/48x48.png" 
                  alt="Placeholder image" 
                  width={48} 
                  height={48} 
                  className="object-cover cursor-pointer" 
                />
              </div>
              <div>
                <p className="text-[#6439FF] text-xl font-sour-gummy tracking-wide cursor-pointer">
                  John Doe
                </p>
                <span className="text-gray-400 text-sm">last active {formatDateWithTime(new Date(Date.now()))}</span>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-gray-500 text-xl font-sour-gummy mb-6 font-light">
          All Friends
        </h3>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8 mb-12 gap-0">
          <div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image 
                  src="https://placehold.co/48x48.png" 
                  alt="Placeholder image" 
                  width={48} 
                  height={48} 
                  className="object-cover cursor-pointer" 
                />
              </div>
              <div>
                <p className="text-[#6439FF] text-xl font-sour-gummy tracking-wide cursor-pointer">
                  John Doe
                </p>
                <span className="text-gray-400 text-sm">last active {formatDateWithTime(new Date(Date.now()))}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image 
                  src="https://placehold.co/48x48.png" 
                  alt="Placeholder image" 
                  width={48} 
                  height={48} 
                  className="object-cover cursor-pointer" 
                />
              </div>
              <div>
                <p className="text-[#6439FF] text-xl font-sour-gummy tracking-wide cursor-pointer">
                  John Doe
                </p>
                <span className="text-gray-400 text-sm">last active {formatDateWithTime(new Date(Date.now()))}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image 
                  src="https://placehold.co/48x48.png" 
                  alt="Placeholder image" 
                  width={48} 
                  height={48} 
                  className="object-cover cursor-pointer" 
                />
              </div>
              <div>
                <p className="text-[#6439FF] text-xl font-sour-gummy tracking-wide cursor-pointer">
                  John Doe
                </p>
                <span className="text-gray-400 text-sm">last active {formatDateWithTime(new Date(Date.now()))}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image 
                  src="https://placehold.co/48x48.png" 
                  alt="Placeholder image" 
                  width={48} 
                  height={48} 
                  className="object-cover cursor-pointer" 
                />
              </div>
              <div>
                <p className="text-[#6439FF] text-xl font-sour-gummy tracking-wide cursor-pointer">
                  John Doe
                </p>
                <span className="text-gray-400 text-sm">last active {formatDateWithTime(new Date(Date.now()))}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image 
                  src="https://placehold.co/48x48.png" 
                  alt="Placeholder image" 
                  width={48} 
                  height={48} 
                  className="object-cover cursor-pointer" 
                />
              </div>
              <div>
                <p className="text-[#6439FF] text-xl font-sour-gummy tracking-wide cursor-pointer">
                  John Doe
                </p>
                <span className="text-gray-400 text-sm">last active {formatDateWithTime(new Date(Date.now()))}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image 
                  src="https://placehold.co/48x48.png" 
                  alt="Placeholder image" 
                  width={48} 
                  height={48} 
                  className="object-cover cursor-pointer" 
                />
              </div>
              <div>
                <p className="text-[#6439FF] text-xl font-sour-gummy tracking-wide cursor-pointer">
                  John Doe
                </p>
                <span className="text-gray-400 text-sm">last active {formatDateWithTime(new Date(Date.now()))}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image 
                  src="https://placehold.co/48x48.png" 
                  alt="Placeholder image" 
                  width={48} 
                  height={48} 
                  className="object-cover cursor-pointer" 
                />
              </div>
              <div>
                <p className="text-[#6439FF] text-xl font-sour-gummy tracking-wide cursor-pointer">
                  John Doe
                </p>
                <span className="text-gray-400 text-sm">last active {formatDateWithTime(new Date(Date.now()))}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image 
                  src="https://placehold.co/48x48.png" 
                  alt="Placeholder image" 
                  width={48} 
                  height={48} 
                  className="object-cover cursor-pointer" 
                />
              </div>
              <div>
                <p className="text-[#6439FF] text-xl font-sour-gummy tracking-wide cursor-pointer">
                  John Doe
                </p>
                <span className="text-gray-400 text-sm">last active {formatDateWithTime(new Date(Date.now()))}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image 
                  src="https://placehold.co/48x48.png" 
                  alt="Placeholder image" 
                  width={48} 
                  height={48} 
                  className="object-cover cursor-pointer" 
                />
              </div>
              <div>
                <p className="text-[#6439FF] text-xl font-sour-gummy tracking-wide cursor-pointer">
                  John Doe
                </p>
                <span className="text-gray-400 text-sm">last active {formatDateWithTime(new Date(Date.now()))}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image 
                  src="https://placehold.co/48x48.png" 
                  alt="Placeholder image" 
                  width={48} 
                  height={48} 
                  className="object-cover cursor-pointer" 
                />
              </div>
              <div>
                <p className="text-[#6439FF] text-xl font-sour-gummy tracking-wide cursor-pointer">
                  John Doe
                </p>
                <span className="text-gray-400 text-sm">last active {formatDateWithTime(new Date(Date.now()))}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image 
                  src="https://placehold.co/48x48.png" 
                  alt="Placeholder image" 
                  width={48} 
                  height={48} 
                  className="object-cover cursor-pointer" 
                />
              </div>
              <div>
                <p className="text-[#6439FF] text-xl font-sour-gummy tracking-wide cursor-pointer">
                  John Doe
                </p>
                <span className="text-gray-400 text-sm">last active {formatDateWithTime(new Date(Date.now()))}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
