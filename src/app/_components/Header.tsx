"use client";
import type { Session } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Header = ({ session }: { session: Session | null }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const menuFunc = () => {
    setOpenMenu(!openMenu);
  };

  const router = useRouter();
  if (session === null) {
    // 未ログイン状態の場合、ウェルカムページに遷移する
    router.push("/welcome");
  }

  return (
    <>
      {session ? (
        <header className="flex items-center h-12 bg-amber-500">
          <Link href={"/"} className="text-lg font-bold pl-4 pr-1">
            Basket Court Map
          </Link>
          <Image
            src={"/images/BasketGoal_Header.svg"}
            alt="BasketBall_icon"
            width={25}
            height={25}
          />
          <div className="text-md font-bold pl-4 pr-1">
            {session.user.user_metadata?.user_name}
          </div>
          {openMenu ? (
            <>
              <ul className="sm:hidden flex flex-col animate-fade-in absolute inset-20 z-10 justify-evenly items-center bg-amber-500 bg-opacity-90 border-2 rounded-lg text-3xl font-bold">
                <li className="hover:text-white">
                  <Link href={"/"} onClick={() => menuFunc()}>
                    Home
                  </Link>
                </li>
                <li className="hover:text-white">
                  <Link href={"/about"} onClick={() => menuFunc()}>
                    About
                  </Link>
                </li>
                <li className="hover:text-white">
                  <Link href={"/contact"} onClick={() => menuFunc()}>
                    Contact
                  </Link>
                </li>
                <li className="hover:text-white">
                  <form action="/api/auth/logout" method="post">
                    <button
                      className="font-bold text-red-600 hover:text-white"
                      type="submit"
                    >
                      LOGOUT
                    </button>
                  </form>
                </li>
              </ul>
              <button
                type="button"
                onClick={() => menuFunc()}
                className="sm:hidden flex justify-center ml-auto pr-4 text-white"
              >
                <Image
                  src={"/images/Cancel.png"}
                  alt="cancel"
                  width={40}
                  height={40}
                />
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => menuFunc()}
              className="sm:hidden flex justify-center ml-auto pr-4 text-white"
            >
              <Image
                src={"/images/HamburgerMenu.png"}
                alt="menu"
                width={40}
                height={40}
              />
            </button>
          )}

          <ul className="sm:flex flex-row ml-auto hidden">
            <li className="pr-4 hover:text-white text-lg">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="pr-4 hover:text-white text-lg">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="pr-4 hover:text-white text-lg">
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li className="pr-4 hover:text-white text-lg">
              <form action="/api/auth/logout" method="post">
                <button
                  className="font-bold pr-4 text-red-600 hover:text-white text-lg"
                  type="submit"
                >
                  LOGOUT
                </button>
              </form>
            </li>
          </ul>
        </header>
      ) : (
        <div className="fixed h-full w-full bg-white" />
      )}
    </>
  );
};

export default Header;
