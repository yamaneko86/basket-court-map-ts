"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuFunc = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="flex items-center h-12 bg-amber-500">
      <h1 className="font-bold pl-4 pr-1">Basket Court Map</h1>
      <Image
        src={"/BasketBall_icon.png"}
        alt="BasketBall_icon"
        width={25}
        height={25}
      />
      {openMenu ? (
        <>
          <ul className="sm:hidden flex flex-col absolute inset-40  justify-evenly items-center bg-amber-500 border-2 rounded-lg text-xl">
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
              <Link href={"/"}>THINKING...</Link>
            </li>
          </ul>
          <button
            onClick={menuFunc}
            className="sm:hidden flex justify-center ml-auto pr-4 text-white"
          >
            <Image src={"/Cancel.png"} alt="cancel" width={50} height={50} />
          </button>
        </>
      ) : (
        <button
          onClick={menuFunc}
          className="sm:hidden flex justify-center ml-auto pr-4 text-white"
        >
          <Image src={"/HamburgerMenu.png"} alt="menu" width={50} height={50} />
        </button>
      )}
      <ul className="sm:flex flex-row ml-auto hidden">
        <li className="pr-4 hover:text-white">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="pr-4 hover:text-white">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="pr-4 hover:text-white">
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li className="pr-4 hover:text-white">
          <Link href={"/"}>THINKING...</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
