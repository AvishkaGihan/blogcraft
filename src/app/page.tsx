import BlogList from "@/components/BlogList";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl animate-fadeIn">
      <h1 className="text-5xl font-bold mb-12 text-center">
        Welcome to BlogCraft
      </h1>
      <BlogList posts={posts} />
    </main>
  );
}
