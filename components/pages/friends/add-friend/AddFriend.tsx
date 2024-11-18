import { IUser } from "@/types/user.type";
import SearchUsersForm from "./SearchUsersForm";
import Image from "next/image";
import Link from "next/link";

const AddFriend = async ({
  data,
  username,
  currentUsername,
}: {
  data: IUser[];
  username: string | undefined;
  currentUsername: string | null | undefined;
}) => {
  return (
    <div className="md:h-4/5">
      <div className="flex flex-col justify-center items-center">
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
        <div className="grid sm:grid-cols-1 gap-y-8 mb-12 gap-0">
          <div className="flex flex-row items-center gap-2 pb-2">
            {data.length ? (
              data.map((user: IUser) => (
                <Link
                  href={`/profile/${user.username}`}
                  key={user._id}
                  className={`flex flex-row items-center gap-2 pb-2 w-1/3 p-2 rounded-md border-1 hover:md:scale-[101%] hover:shadow-md shadow-inner bg-neutral-100 dark:bg-neutral-600 cursor-pointer ${
                    user.username === currentUsername ? "opacity-50 pointer-events-none" : ""
                  }`}
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
              ))): null}
            {username && !data.length && (
              <h3 className="dark:text-neutral-200 text-xl font-sour-gummy m-auto mt-12 font-light flex justify-center items-center">
                No users found
              </h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFriend;
