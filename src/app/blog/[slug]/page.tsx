import Image from "next/image";
import { getAllPostSlugs, getPostData } from "@/lib/posts";
import { format } from "date-fns";

export async function generateStaticParams() {
  const paths = getAllPostSlugs();
  return paths;
}

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const postData = await getPostData(params.slug);

  return (
    <article className="container mx-auto px-4 py-16 max-w-3xl animate-fadeIn">
      <Image
        src={postData.image}
        alt={`Cover image for ${postData.title}`}
        width={1200}
        height={600}
        className="rounded-lg shadow-md mb-10 object-cover"
      />
      <h1 className="text-5xl font-semibold mb-6 text-gray-800">
        {postData.title}
      </h1>
      <p className="text-gray-600 mb-10 text-lg">
        {format(new Date(postData.date), "MMMM d, yyyy")}
      </p>
      <div
        className="prose lg:prose-xl prose-gray prose-img:rounded-md prose-headings:text-gray-800"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </article>
  );
}
