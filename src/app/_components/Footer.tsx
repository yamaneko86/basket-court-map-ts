import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center mt-auto h-12 bg-amber-500">
      <div className="ml-auto px-4 text-black">
        © 2024 Developed by{" "}
        <Link href={"https://twitter.com/yamaneko8699/"} className="underline">
          @yamaneko8699
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
