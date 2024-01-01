import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center h-12 bg-amber-500">
      <Link href={"/"} className="font-bold pl-4 pr-4">
        Basket Court Map
      </Link>
      <Link href={"/about"} className="pr-4 hover:text-white">
        <h2>about</h2>
      </Link>
    </header>
  );
};

export default Header;
