"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const menuFunc = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="flex items-center h-12 bg-amber-500">
      <h1 className="text-lg font-bold pl-4 pr-1">Basket Court Map</h1>
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
              <Link href={"/"}>THINKING...</Link>
            </li>
          </ul>
          <button
            onClick={menuFunc}
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
          onClick={menuFunc}
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
          <Link href={"/"}>THINKING...</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
