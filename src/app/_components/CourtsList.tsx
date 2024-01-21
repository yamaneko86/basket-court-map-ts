"use client";
import { getCourtInfo } from "@/_lib/supabaseFunc";
import Link from "next/link";
import { useEffect, useState } from "react";

const CourtsList = (props: PrefectureCodes) => {
  const { lower_limit, upper_limit } = props;
  const [courts, setCourts] = useState<any>([]);

  useEffect(() => {
    const getCourts = async () => {
      const courtsInfo = await getCourtInfo(lower_limit, upper_limit);
      setCourts(courtsInfo);
    };

    // 処理呼び出し
    getCourts();
  }, [lower_limit, upper_limit]);

  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th>コート名</th>
          <th>住所</th>
          <th>詳細</th>
        </tr>
      </thead>
      <tbody>
        {courts.map((court: CourtInfo) => (
          <tr key={court.map_id}>
            <td>{court.map_name}</td>
            <td>{court.map_address}</td>
            <td>
              <Link href={`detail/${court.map_id}`}>詳細</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourtsList;
