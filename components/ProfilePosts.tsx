"use client";
import { IPost } from "@/types/post.type";
import { ParallaxScroll } from "./ui/parallax-scroll";

export function ProfilePosts({ posts }: { posts: IPost[] }) {

    const images = posts.map(post => post.image);

  return <ParallaxScroll images={images} />;
}
