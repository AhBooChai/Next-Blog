import { PostProps } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Post = ({ shortDescription, className, title }: PostProps) => {
  return (
    <Link
      href=""
      className={`${className} p-4 rounded border-2 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]`}
    >
      {/* <Image src={src} alt={title} width={500} height={500} /> */}
      <h3 className="text:2xl sm:text-3xl mb-3 line-clamp-2">{title}</h3>
      <p className="line-clamp-5 text-sm mt-2">{shortDescription}</p>
    </Link>
  );
};

export default Post;
