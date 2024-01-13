"use client";
import React, { useEffect, useState } from "react";
import { getCountOfCourts } from "@/_lib/supabaseFunc";

const MapApp = () => {
  const [countKinki, setCountKinki] = useState<any>(); //近畿地方のコート数
  const [countKyusyu, setCountKyusyu] = useState<any>(); //九州地方のコート数

  useEffect(() => {
    //近畿地方のコート数を取得
    const getKinkiCourts = async () => {
      const count = await getCountOfCourts(24, 30);
      // console.log(count);
      setCountKinki(count);
    };

    //九州地方のコート数を取得
    const getKyusyuCourts = async () => {
      const count = await getCountOfCourts(40, 47);
      // console.log(count);
      setCountKyusyu(count);
    };
    getKinkiCourts();
    getKyusyuCourts();
  }, []);

  return (
    <div className="flex justify-center text-red-500">
      <ul>
        <li>近畿地方のコート数：{countKinki}</li>
        <li>九州地方のコート数：{countKyusyu}</li>
      </ul>
    </div>
  );
};

export default MapApp;
