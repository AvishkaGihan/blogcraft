import Link from "next/link";
import React from "react";

type Post = {
  slug: string;
  title: string;
  date: string;
};

type BlogListProps = {
  posts: Post[];
};

const BlogList = ({ posts }: BlogListProps) => {
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
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
