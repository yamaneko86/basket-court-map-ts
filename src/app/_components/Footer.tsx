import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center mt-auto h-12 bg-amber-500">
      <Link href={"/"} className="pl-4 pr-4">
        トップへ戻る
      </Link>
      <div className="ml-auto pr-4 text-black">
        Developed by{" "}
        <Link href={"https://twitter.com/yamaneko8699/"} className="underline">
          @yamaneko8699
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
