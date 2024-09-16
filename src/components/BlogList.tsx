import Link from "next/link";
import { format } from "date-fns";

type Post = {
  slug: string;
  title: string;
  date: string;
};

type BlogListProps = {
  posts: Post[];
};

export default function BlogList({ posts }: BlogListProps) {
  return (
    <ul className="space-y-4">
      {posts.map((post) => (
        <li key={post.slug} className="border p-4 rounded-md">
          <Link
            href={`/blog/${post.slug}`}
            className="text-xl font-semibold hover:underline"
          >
            {post.title}
          </Link>
          <p className="text-gray-500 text-sm mt-1">
            {format(new Date(post.date), "MMMM d, yyyy")}
          </p>
        </li>
      ))}
    </ul>
  );
}
