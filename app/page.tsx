import Hero from "@/components/Hero";
import { simpleBlogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

async function getData() {
  const query = `*[_type == "blog"] | order(_createdAt desc) {
    title,
      shortDescription,
      "currentSlug": slug.current,
      titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  const bgClasses = ["bg-pink-500", "bg-blue-500", "bg-yellow-500"];
  return (
    <>
      <Hero />
      <div className="w-full mt-8">
        <h3 className="text-3xl text-center mt-6">Trending...</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {data.map((post, idx) => (
            <Link
              href={`/blog/${post.currentSlug}`}
              className="block cursor-pointer"
            >
              <Card key={idx}>
                <Image
                  src={urlFor(post.titleImage).url()}
                  alt={post.title}
                  width={500}
                  height={500}
                  className="rounded-t-lg h-[200px] object-cover"
                />
                <CardContent className="mt-5">
                  <h3 className="text-lg line-clamp-2">{post.title}</h3>
                  <p className="line-clamp-3 text-sm mt-2 text-gray-600">
                    {post.shortDescription}
                  </p>
                  <p className="text-indigo-600">Read More</p>
                </CardContent>
              </Card>
            </Link>

            // <div
            //   key={idx}
            //   className="w-full sm:w-40 md:w-60 lg:w-80 h-full bg-white"
            // >
            //   <Link
            //     href={`/blog/${post.currentSlug}`}
            //     className="block cursor-pointer border-2 rounded-md neo-shadow focus:shadow-none focus:translate-x-1 focus:translate-y-1 transform transition-shadow duration-100"
            //   >
            //     <article className="w-full h-full">
            //       <figure className="w-full h-30 md:h-40 lg:h-72 border-b-2">
            //         <img
            //           src={urlFor(post.titleImage).url()}
            //           alt="thumbnail"
            //           className="w-full h-full object-cover"
            //         />
            //       </figure>
            //     </article>
            //     <div className="px-6 py-5 text-left h-full">
            //       <h4 className="text-[32px] mb-4">{post.title}</h4>
            //       <p className="text-xs mb-4">{post.shortDescription}</p>
            //       <p className="text-indigo-600">Read more</p>
            //     </div>
            //   </Link>
            // </div>
            // <Link
            //   href={`/blog/${post.currentSlug}`}
            //   className={`${bgClasses[idx]} p-4 rounded border-2 shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]`}
            // >
            //   <Image
            //     src={urlFor(post.titleImage).url()}
            //     width={500}
            //     height={500}
            //     priority
            //     alt={post.title}
            //   />
            // </Link>
          ))}
        </div>
      </div>
    </>
  );
}

// {posts.map((post, index) => (
//   <PostCard key={post.id} className={bgClasses[index]} post={post} />
// ))}

// src={urlFor(post.titleImage).url()}
