import Link from "next/link";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="w-full">
      <nav className="w-full flex justify-between p-8">
        <div className="text-4xl px-2 py-4">
          <Link href="/">LOGO</Link>
        </div>
        <button className="text-red border-red border-2 px-4 py-2">
          Sign In
        </button>
      </nav>
    </header>
  );
};

export default Header;
