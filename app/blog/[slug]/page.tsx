import { fullBlogPage } from "@/lib/interface";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "next-sanity";
import Image from "next/image";

export const revalidate = 30; //revalidate every 30 seconds

async function getData(slug: string) {
  const query = `*[_type == "blog" && slug.current == '${slug}'] {
        "currentSlug": slug.current,
        title,
        content,
        titleImage
      }[0]`;

  const data = await client.fetch(query);
  return data;
}
const page = async ({ params }: { params: { slug: string } }) => {
  const data: fullBlogPage = await getData(params.slug);
  return (
    <div className="py-8 mx-auto max-w-[800px] text-indigo-600">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase text-indigo-600">
          Tieboo Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl text-indigo-600">
          {data.title}
        </span>
      </h1>

      <Image
        src={urlFor(data.titleImage).url()}
        alt={data.title}
        width={800}
        height={800}
        priority
        className="rounded-lg mt-8 border flex justify-center items-center"
      />

      <div className="mt-16 prose prose prose-headings:text-indigo-600 prose-a:text-indigo-600 prose-li:marker:text-indigo-600 text-indigo-500">
        <PortableText value={data.content} />
      </div>
    </div>
  );
};

export default page;
