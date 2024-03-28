import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full">
      <nav className="w-full flex justify-end p-8">
        <div className="text-xl px-2 py-4 text-indigo-600">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={50} height={50} />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
