"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-16 bg-green-500 text-white mb-8">
      <div className="flex items-center">
        <Link href="/" className="">
          <img
            src="https://seminal-fe-test-demo.vercel.app/image/star-wars.png"
            alt="Star Wars Logo"
            className="h-10"
          />
        </Link>
      </div>

      <nav>
        <Link href="/favourites" className="text-lg hover:underline">
          <img className="w-10 h-10" src="/favorite.png" alt="favourite icon" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
