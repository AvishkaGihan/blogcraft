import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

type Post = {
  slug: string;
  title: string;
  date: string;
  image: string;
};

type BlogListProps = {
  posts: Post[];
};

export default function BlogList({ posts }: BlogListProps) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <li key={post.slug} className="group">
          <Link href={`/blog/${post.slug}`} className="block">
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
              <Image
                src={post.image}
                alt={`Cover image for ${post.title}`}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
            </div>
            <h2 className="text-xl font-semibold mb-2 transition-colors duration-300 ease-in-out group-hover:text-indigo-600">
              {post.title}
            </h2>
            <p className="text-gray-500 text-sm">
              {format(new Date(post.date), "MMMM d, yyyy")}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
