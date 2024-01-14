"use client";
import React, { useEffect, useState } from "react";
import { getCountOfCourts } from "@/_lib/supabaseFunc";
import Link from "next/link";

const MapApp = () => {
  const [countHokkaido, setCountHokkaido] = useState<any>(-1); //北海道のコート数
  const [countTohoku, setCountTohoku] = useState<any>(-1); //東北地方のコート数
  const [countKanto, setCountKanto] = useState<any>(-1); //関東地方のコート数
  const [countChubu, setCountChubu] = useState<any>(-1); //中部地方のコート数
  const [countKinki, setCountKinki] = useState<any>(-1); //近畿地方のコート数
  const [countChugoku, setCountChugoku] = useState<any>(-1); //中国地方のコート数
  const [countShikoku, setCountShikoku] = useState<any>(-1); //四国地方のコート数
  const [countKyusyu, setCountKyusyu] = useState<any>(-1); //九州地方のコート数

  useEffect(() => {
    //北海道のコート数を取得
    const getHokkaidoCourts = async () => {
      const count = await getCountOfCourts(1, 1);
      setCountHokkaido(count);
    };

    //近畿地方のコート数を取得
    const getKinkiCourts = async () => {
      const count = await getCountOfCourts(24, 30);
      setCountKinki(count);
    };

    //九州地方のコート数を取得
    const getKyusyuCourts = async () => {
      const count = await getCountOfCourts(40, 47);
      setCountKyusyu(count);
    };

    // 処理呼び出し
    getHokkaidoCourts();
    getKinkiCourts();
    getKyusyuCourts();
  }, []);

  return (
    <>
      <div className="grid sm:grid-flow-col grid-rows-4 md:grid-rows-3 gap-2 justify-center mt-auto">
        <Link
          href={"/"}
          className="w-56 h-12 bg-green-300 rounded-md shadow-md flex items-center justify-center"
        >
          北海道：{countHokkaido}
        </Link>

        <Link
          href={"/"}
          className="w-56 h-12 bg-green-300 rounded-md shadow-md flex items-center justify-center"
        >
          東北地方：{countTohoku}
        </Link>

        <Link
          href={"/"}
          className="w-56 h-12 bg-green-300 rounded-md shadow-md flex items-center justify-center"
        >
          関東地方：{countKanto}
        </Link>

        <Link
          href={"/"}
          className="w-56 h-12 bg-green-300 rounded-md shadow-md flex items-center justify-center"
        >
          中部地方：{countChubu}
        </Link>

        <Link
          href={"/"}
          className="w-56 h-12 bg-green-300 rounded-md shadow-md flex items-center justify-center"
        >
          近畿地方：{countKinki}
        </Link>

        <Link
          href={"/"}
          className="w-56 h-12 bg-green-300 rounded-md shadow-md flex items-center justify-center"
        >
          中国地方：{countChugoku}
        </Link>

        <Link
          href={"/"}
          className="w-56 h-12 bg-green-300 rounded-md shadow-md flex items-center justify-center"
        >
          四国地方：{countShikoku}
        </Link>

        <Link
          href={"/"}
          className="w-56 h-12 bg-green-300 rounded-md shadow-md flex items-center justify-center"
        >
          九州地方：{countKyusyu}
        </Link>
      </div>
    </>
  );
};

export default MapApp;
