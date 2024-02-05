"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  createClientComponentClient,
  type Session,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const Header = ({ session }: { session: Session | null }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const menuFunc = () => {
    setOpenMenu(!openMenu);
  };

  const supabase = createClientComponentClient();
  useEffect(() => {
    async function getData() {
      const { data } = await supabase.auth.getSession();
      console.log(data);
    }
    getData();
  }, []);

  // TODO 2024/2/6 チラッとトップ画面が見えるため、何か対策をする。
  const router = useRouter();
  if (session === null) {
    router.push("/login");
  }

  return (
    <header className="flex items-center h-12 bg-amber-500">
      <Link href={"/"} className="text-lg font-bold pl-4 pr-1">
        Basket Court Map
      </Link>
      <Image
        // src={"/images/BasketBall_icon.png"}
        src={"/images/BasketGoal.svg"}
        alt="BasketBall_icon"
        width={25}
        height={25}
      />
      {openMenu ? (
        <>
          <ul className="sm:hidden flex flex-col animate-fade-in absolute inset-20 z-10 justify-evenly items-center bg-amber-500 border-2 rounded-lg text-3xl font-bold">
            <li className="hover:text-white">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-white">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="hover:text-white">
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li className="hover:text-white">
              <button>ログアウト</button>
            </li>
          </ul>
          <button
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
        {/* TODO 2024/2/6 ユーザーネームをsupabase関数で取得して表示する */}
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
            {/* TODO 2024/2/6 ログアウトボタンUIの修正 */}
            <button
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              type="submit"
            >
              ログアウト
            </button>
          </form>
        </li>
      </ul>
    </header>
  );
};

export default Header;
