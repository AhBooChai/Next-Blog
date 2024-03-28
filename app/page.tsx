import Hero from "@/components/Hero";
import { simpleBlogCard } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export const revalidate = 30; //revalidate every 30 seconds

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
      <div className="w-full mt-8 bg-pink" id="blogPosts">
        <h3 className="text-3xl text-center mt-6 text-indigo-600">
          Trending...
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          {data.map((post, idx) => (
            <Link
              key={idx}
              href={`/blog/${post.currentSlug}`}
              className="block cursor-pointer"
            >
              <Card key={idx}>
                <Image
                  src={urlFor(post.titleImage).url()}
                  alt={post.title}
                  width={500}
                  height={500}
                  className="rounded-t-lg h-[200px] object-cover border-indigo-600"
                />
                <CardContent className="mt-5">
                  <h3 className="text-lg line-clamp-2 text-indigo-600">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 text-sm mt-3 text-indigo-500">
                    {post.shortDescription}
                  </p>
                  <p className="text-indigo-600 mt-3">Read More</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
