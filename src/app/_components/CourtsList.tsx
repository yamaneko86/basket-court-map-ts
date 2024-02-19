"use client";
import { getCourtInfoByPref } from "@/_utils/supabase/supabaseFunc";
import Link from "next/link";
import { useEffect, useState } from "react";

const CourtsList = (props: PrefectureCodes) => {
  const { lower_limit, upper_limit } = props;
  const [courts, setCourts] = useState<any>([]);

  useEffect(() => {
    const getCourts = async () => {
      const courtsInfo = await getCourtInfoByPref(lower_limit, upper_limit);
      setCourts(courtsInfo);
    };

    // 処理呼び出し
    getCourts();
  }, [lower_limit, upper_limit]);

  return (
    <>
      <div className="bg-orange-100">
        <Link href={"/"} className="text-sm pl-2 pr-2 hover:text-red-500">
          トップ
        </Link>
        {">"}
      </div>
      <div className="overflow-auto">
        <table className="w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
              >
                コート名
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
              >
                住所
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
              >
                使用状況
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
              >
                詳細
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-300">
            {courts.map((court: CourtInfo) => (
              <tr
                key={court.map_id}
                className={court.isUsing ? "bg-green-200" : "bg-gray-100"}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  {court.map_name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {court.map_address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {court.isUsing ? "使用中" : "未使用"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-indigo-600 hover:text-indigo-900">
                    <Link href={`detail/${court.map_id}`}>詳細</Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CourtsList;
