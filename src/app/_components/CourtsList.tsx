"use client";
import { getCourtInfoByPref } from "@/_utils/supabase/supabaseFunc";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export let map_id: string;

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

  const router = useRouter();

  return (
    // TODO テーブルのレイアウトを整える
    <table className="table-fixed">
      <thead>
        <tr>
          <th>コート名</th>
          <th>住所</th>
          <th>使用状況</th>
          <th>詳細</th>
        </tr>
      </thead>
      <tbody>
        {courts.map((court: CourtInfo) => (
          <tr key={court.map_id}>
            <td>{court.map_name}</td>
            <td>{court.map_address}</td>
            <td>{court.isUsing ? "使用中" : "未使用"}</td>
            <td>
              <button
                onClick={() => {
                  map_id = court.map_id;
                  router.push("/detail");
                }}
              >
                詳細
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourtsList;
