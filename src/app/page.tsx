import BlogList from "@/components/BlogList";
import { getSortedPostsData } from "@/lib/posts";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to BlogCraft</h1>
      <BlogList posts={posts} />
    </main>
  );
}
