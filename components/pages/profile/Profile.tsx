// import { ProfilePosts } from '@/components/ProfilePosts'
import { formatDateWithTime } from '@/lib/utils'
// import { IPost } from '@/types/post.type'
import { IUser } from '@/types/user.type'
import Image from 'next/image'
import React from 'react'

// { user, posts }: { user: IUser, posts: IPost[] }
const Profile = ({ user }: { user: IUser }) => {
  return (
    <div className='overflow-hidden'>
      <div className="flex flex-col items-center gap-4">
        <div className="w-20 h-20 overflow-hidden rounded-full border-2 border-[#6439FF]">
          <Image src={user.profilePicture} alt="Profile Picture" className="object-cover" width={80} height={80} />
        </div>
        <h3 className="text-[#6439FF] dark:text-custom-200 text-xl font-sour-gummy tracking-wide">
          {user.name}
        </h3>
        <p className="text-gray-600 dark:text-neutral-100 text-sm font-sour-gummy">{user.bio}</p>
        <p className="text-gray-400 dark:text-neutral-100 text-sm font-sour-gummy">last active {formatDateWithTime(user.lastActive)}</p>
      </div>
      <hr className="my-4 border-gray-200 dark:border-neutral-800" />

      {/* // TODO: Add component for posts */}
      {/* <div className=''>
        <ProfilePosts posts={posts} />
      </div> */}
    </div>
  )
}

export default Profile