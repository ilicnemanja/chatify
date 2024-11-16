import Profile from '@/components/pages/profile/Profile'
// import { IPost } from '@/types/post.type'
import { notFound } from 'next/navigation'
import React from 'react'


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

  const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${username}`).then(res => res.json());
  // const posts = dummyPosts;
  
  if (!user) notFound()

  return (
    <Profile 
      user={user}
      // posts={posts}
    />
  )
}

export default Page