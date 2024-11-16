import Profile from '@/components/pages/profile/Profile'
// import { IPost } from '@/types/post.type'
import { IUser } from '@/types/user.type'
import { notFound } from 'next/navigation'
import React from 'react'

const dummyUser: IUser = {
  id: 1,
  name: "Milos Djukic",
  username: "milosdjukic",
  lastActive: new Date(Date.now()),
  profilePicture: "https://images.dog.ceo/breeds/pitbull/dog-3981540_1280.jpg",
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  email: 'milosdjukic@gmail.com'
}

// const dummyPosts: IPost[] = [
//   {
//     id: 1,
//     title: 'First post',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     date: new Date(Date.now()),
//     image: "https://images.dog.ceo/breeds/vizsla/n02100583_14017.jpg",
//   },
//   {
//     id: 1,
//     title: 'Second post',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     date: new Date(Date.now()),
//     image: "https://images.dog.ceo/breeds/springer-english/n02102040_7091.jpg",
//   },
//   {
//     id: 1,
//     title: 'First post',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     date: new Date(Date.now()),
//     image: "https://images.dog.ceo/breeds/pekinese/n02086079_499.jpg",
//   },
//   {
//     id: 1,
//     title: 'First post',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     date: new Date(Date.now()),
//     image: "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
//   },
//   {
//     id: 1,
//     title: 'First post',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     date: new Date(Date.now()),
//     image: "https://images.dog.ceo/breeds/poodle-standard/n02113799_3278.jpg",
//   },
//   {
//     id: 1,
//     title: 'First post',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     date: new Date(Date.now()),
//     image: "https://images.dog.ceo/breeds/terrier-silky/n02097658_8053.jpg",
//   },
//   {
//     id: 1,
//     title: 'First post',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     date: new Date(Date.now()),
//     image: "https://images.dog.ceo/breeds/groenendael/n02105056_5668.jpg",
//   },
//   {
//     id: 1,
//     title: 'First post',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     date: new Date(Date.now()),
//     image: "https://images.dog.ceo/breeds/vizsla/n02100583_14017.jpg",
//   },

// ]

const Page = async ({ params }: { params: Promise<{ username: string }> }) => {

  const username = (await params).username


  // TODO: Fetch user and posts from API

  const user = dummyUser;
  // const posts = dummyPosts;
  
  if (!username) notFound()

  return (
    <Profile 
      user={user}
      // posts={posts}
    />
  )
}

export default Page