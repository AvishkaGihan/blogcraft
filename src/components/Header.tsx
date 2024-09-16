import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto px-4 py-6">
        <Link href="/" className="text-2xl font-bold">
          BlogCraft
        </Link>
      </nav>
    </header>
  );
};

export default Header;
