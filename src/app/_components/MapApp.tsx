"use client";
import React, { useEffect, useState } from "react";
import { getCountOfCourts } from "@/_lib/supabaseFunc";

const MapApp = () => {
  const [count, setCount] = useState<any>();

  useEffect(() => {
    const getKyusyuCourts = async () => {
      const count = await getCountOfCourts(40, 47);
      // console.log(count);
      setCount(count);
    };
    getKyusyuCourts();
  }, []);

  return (
    <div className="flex justify-center text-red-500">
      九州地方のコート数：{count}
    </div>
  );
};

export default MapApp;
