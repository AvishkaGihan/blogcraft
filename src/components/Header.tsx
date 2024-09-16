import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <nav className="container mx-auto px-4 py-6">
        <Link href="/" className="text-2xl font-light">
          BlogCraft
        </Link>
      </nav>
    </header>
  );
}
