"use client";
import React, { useState } from "react";
import { getPrefCode } from "@/_utils/supabase/supabaseFunc";
import Link from "next/link";

const CountCourts = () => {
  // 各地方のコート件数を管理
  const [counts, setCounts] = useState({
    countHokkaido: 0,
    countTohoku: 0,
    countKanto: 0,
    countChubu: 0,
    countKinki: 0,
    countChugoku: 0,
    countShikoku: 0,
    countKyushu: 0,
  });

  // コート件数の取得
  const getNumOfCourts = async () => {
    const prefArray = await getPrefCode();

    let cntHokkaido: number = 0;
    let cntTohoku: number = 0;
    let cntKanto: number = 0;
    let cntChubu: number = 0;
    let cntKinki: number = 0;
    let cntChugoku: number = 0;
    let cntShikoku: number = 0;
    let cntKyushu: number = 0;

    prefArray?.forEach((data) => {
      if (data.prefecture_code == 1) {
        cntHokkaido += 1;
      } else if (data.prefecture_code >= 2 && data.prefecture_code <= 7) {
        cntTohoku += 1;
      } else if (data.prefecture_code >= 8 && data.prefecture_code <= 14) {
        cntKanto += 1;
      } else if (data.prefecture_code >= 15 && data.prefecture_code <= 23) {
        cntChubu += 1;
      } else if (data.prefecture_code >= 24 && data.prefecture_code <= 30) {
        cntKinki += 1;
      } else if (data.prefecture_code >= 31 && data.prefecture_code <= 35) {
        cntChugoku += 1;
      } else if (data.prefecture_code >= 36 && data.prefecture_code <= 39) {
        cntShikoku += 1;
      } else if (data.prefecture_code >= 40 && data.prefecture_code <= 47) {
        cntKyushu += 1;
      } else {
        return null;
      }
    });

    setCounts({
      countHokkaido: cntHokkaido,
      countTohoku: cntTohoku,
      countKanto: cntKanto,
      countChubu: cntChubu,
      countKinki: cntKinki,
      countChugoku: cntChugoku,
      countShikoku: cntShikoku,
      countKyushu: cntKyushu,
    });
  };

  // 処理呼び出し
  getNumOfCourts();

  return (
    <>
      <div className="grid sm:grid-flow-col grid-rows-4 md:grid-rows-3 gap-2 justify-center mt-auto">
        <Link
          href={"/hokkaido"}
          className="w-56 h-12 bg-green-300 rounded-md shadow-md flex items-center justify-center"
        >
          北海道：{counts.countHokkaido}
        </Link>

        <Link
          href={"/tohoku"}
          className="w-56 h-12 bg-green-300 rounded-md shadow-md flex items-center justify-center"
        >
          東北地方：{counts.countTohoku}
        </Link>

        <Link
          href={"/kanto"}
          className="w-56 h-12 bg-green-300 rounded-md shadow-md flex items-center justify-center"
        >
          関東地方：{counts.countKanto}
        </Link>

        <Link
          href={"/chubu"}
          className="w-56 h-12 bg-green-300 rounded-md shadow-md flex items-center justify-center"
        >
          中部地方：{counts.countChubu}
        </Link>

        <Link
          href={"/kinki"}
          className="w-56 h-12 bg-green-300 rounded-md shadow-md flex items-center justify-center"
        >
          近畿地方：{counts.countKinki}
        </Link>

        <Link
          href={"/chugoku"}
          className="w-56 h-12 bg-green-300 rounded-md shadow-md flex items-center justify-center"
        >
          中国地方：{counts.countChugoku}
        </Link>

        <Link
          href={"/shikoku"}
          className="w-56 h-12 bg-green-300 rounded-md shadow-md flex items-center justify-center"
        >
          四国地方：{counts.countShikoku}
        </Link>

        <Link
          href={"/kyushu"}
          className="w-56 h-12 bg-green-300 rounded-md shadow-md flex items-center justify-center"
        >
          九州地方：{counts.countKyushu}
        </Link>
      </div>
    </>
  );
};

export default CountCourts;
