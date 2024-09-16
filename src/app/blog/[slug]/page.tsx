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
    <article className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <p className="text-gray-500 mb-8">
        {format(new Date(postData.date), "MMMM d, yyyy")}
      </p>
      <div
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </article>
  );
}
